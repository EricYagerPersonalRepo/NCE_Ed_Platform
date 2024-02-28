import React, { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/api"
import { getStudentProfile, getUserSettings, listCourseProfiles, listStudentProfiles } from '@/src/graphql/queries'
import { FormControl, InputLabel, Select, MenuItem, Typography, Grid, Paper, Avatar, Button, List, ListItem, ListItemText, TextField, FormControlLabel, Switch } from '@mui/material'
import { Course } from '@/src/types/StudentProfileTypes'
import { downloadAvatarFromS3, uploadFileToS3 } from '@/src/functions/StorageFunctions'
import { getCurrentUser } from 'aws-amplify/auth'
import { createUserSettings, updateUserSettings } from '@/src/graphql/mutations'
import { CreateUserSettingsInput, UpdateUserSettingsInput, UserSettings } from '@/src/API'
import { use } from 'chai'
import { UserSettingsUpdateFormInputValues } from '@/src/ui-components/UserSettingsUpdateForm'

const amplifyApiClient = generateClient()

/**
 * MyCourseView Component - Manages and displays a list of courses and details for a selected course.
 * 
 * This component is responsible for fetching and displaying a list of courses. It allows users to select
 * a course from a dropdown menu to view more detailed information about it, such as its description. The
 * courses are fetched asynchronously on component mount and stored in the component's state. The user's
 * selected course is also managed in the state, allowing dynamic rendering of the selected course's details.
 * 
 * The fetching of courses is handled via an async function within a useEffect hook to ensure data is loaded
 * when the component is rendered. Error handling is included to log issues when fetching course data. The
 * component utilizes Material-UI components for the UI, providing a consistent and user-friendly experience.
 * 
 * @returns {JSX.Element} - A component that provides a dropdown list of courses and displays the description
 * of the selected course.
 */

export const MyCourseView = ({userID}:any) => {
    const [courses, setCourses] = useState<Course[]>([])
    const [selectedCourseId, setSelectedCourseId] = useState('')

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const apiData:any = await amplifyApiClient.graphql({
                    query: listCourseProfiles,
                    variables: {} // Add any required variables here
                })
                setCourses(apiData.data.listCourseProfiles.items)
            } catch (error) {
                console.error('Error fetching courses:', error)
            }
        }
        fetchCourses()
    }, [])

    const handleChange = (event:any) => {
        setSelectedCourseId(event.target.value)
    }

    // Find the selected course to display its description
    const selectedCourse:any = courses.find(course => course.id === selectedCourseId)

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="course-select-label">Select a Course</InputLabel>
                <Select
                    labelId="course-select-label"
                    id="course-select"
                    value={selectedCourseId}
                    label="Select a Course"
                    onChange={handleChange}
                >
                    {courses.map((course:any) => (
                        <MenuItem key={course.id} value={course.id}>{course.title}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {selectedCourse && (
                <Typography variant="body1" style={{ marginTop: '20px' }}>
                    {selectedCourse.description}
                </Typography>
            )}
        </div>
    )
}

export const getFullStudentProfile = /* GraphQL */ `query GetStudentProfile($id: ID!) {
    getStudentProfile(id: $id) {
      id
      cognitoUserID
      name
      email
      birthdate
      courseEnrollments {
        items {
            enrollmentDate
            progress
            state
        }
        }
      userSettings {
        items {
          id
          darkModeEnabled
          isAdmin
          language
          notificationsEnabled
        }
      }
      createdAt
      updatedAt
      __typename
    }
  }
  `

/**
 * MyAccountView Component - Renders the account management dashboard with user-specific details.
 * 
 * This component structures the account dashboard into a grid layout, featuring sections for profile
 * information, settings, avatar management, and recent activity. Each section is presented within its
 * own card for clear separation and focus. The avatar management section utilizes the AvatarManager
 * component to handle avatar uploads, leveraging the passed `avatarUrl` prop to display the current avatar.
 * 
 * @param {any} avatarUrl - The URL of the user's current avatar image.
 * 
 * @returns {JSX.Element} - A comprehensive view of the user's account dashboard, including profile
 * information, settings, avatar management, and a placeholder for recent activity.
 */

export const MyAccountView = ({userID, avatarUrl}:any) => {
    const [userInformation, setUserInformation] = useState<any>({})
    
    useEffect(() => {
        const fetchUserData = async () => {
            if (!userID) return
            else{
                try {
                    const userData: any = await amplifyApiClient.graphql({
                        query: getFullStudentProfile,
                        variables: {
                            id: userID
                        }
                    })
                    setUserInformation(userData.data.getStudentProfile)
                } catch (error) {
                    console.error('Error fetching user data:', error)
                }
            }
        }
        fetchUserData()
    }, [userID])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Account Dashboard
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Typography variant="h6">Settings</Typography>
                    <SettingsComponent userID={userID} />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <AvatarManager avatarUrl={avatarUrl} />
                <Paper elevation={3} style={{ marginTop: 20, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6">Recent Activity</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

/**
 * AvatarManager Component - Manages user avatar uploads and displays the current avatar.
 * 
 * This component allows users to upload a new avatar image, which is then uploaded to an S3 bucket.
 * It displays the user's current avatar if available. The component handles file selection and
 * triggers the upload process. Upon successful upload, the avatar is updated and the page is reloaded
 * to reflect the change. The upload process involves fetching the current user's details to construct
 * a target path for the avatar in the S3 bucket, ensuring the avatar is associated with the correct user.
 * 
 * @param {any} avatarUrl - The URL of the user's current avatar image.
 * 
 * @returns {JSX.Element} - A component that includes an avatar display and an upload button for updating the avatar.
 */
const AvatarManager = ({ avatarUrl }:any) => {
    const handleFileChange:any = async (event:any) => {
        const file = event.target.files[0]
        const currentUser = await getCurrentUser()
        console.log("current user from studentprof: ", currentUser)
        const userDataResponse = {
            email: currentUser.signInDetails?.loginId || '',
            cognitoID: currentUser.userId
        }
        const avatarTarget = `avatars/${userDataResponse.cognitoID}/avatar.png`

        if (!file) return
        
        const uploadedKey:any = await uploadFileToS3(file, avatarTarget)

        if (uploadedKey)  window.location.reload()
    }

    return (
        <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Avatar</Typography>
            <Avatar src={avatarUrl} style={{ width: 60, height: 60, margin: 20 }} />
            <Button variant="contained" component="label">
                Upload Avatar
                <input type="file" hidden onChange={handleFileChange} />
            </Button>
        </Paper>
    )
}


const SettingsComponent = ({userID}:any) => {
    const [userSettings, setUserSettings] = useState<UpdateUserSettingsInput>({
        id:userID,
        darkModeEnabled: false,
        language: 'en',
        notificationsEnabled: false,
        isAdmin: false
    })

    /**
     * note 27FEB24: Create custom query so apiCall is defined without the StudentProfile object included.
     * Currently we are explicitly defining the object being passed to setUserSettings hook.
     */
    useEffect(() => {
        const checkAndSetUserSettings = async () => {
            try{
                if(userID){
                    const apiCall = await amplifyApiClient.graphql({
                        query: getUserSettings, 
                        variables: { id: userID }
                    })

                    if(apiCall.data.getUserSettings) {
                        setUserSettings({
                            id: apiCall.data.getUserSettings.id,
                            darkModeEnabled: apiCall.data.getUserSettings.darkModeEnabled,
                            language: apiCall.data.getUserSettings.language,
                            notificationsEnabled: apiCall.data.getUserSettings.notificationsEnabled,
                            isAdmin: apiCall.data.getUserSettings.isAdmin,
                        })
                        return true
                    }
                    return false
                }
                else return false
                
            }catch(error){
                console.error(error)
                return false
            }
        }

        checkAndSetUserSettings()

        const createUserSettingsCall = async() =>{
            try {
                const apiCall = await amplifyApiClient.graphql({
                    query: createUserSettings,
                    variables: { input: userSettingsInput }
                })
                console.log('User Settings Created:', apiCall)
            } catch (userSettingsCreateError) {
                console.log('Error Creating User Settings:', userSettingsCreateError)
            }
        }

        if(userID){
            (async () => {
                try{
                    let userSettingsExist = await checkAndSetUserSettings()
                    if (!userSettingsExist) {
                        console.log("hit")
                        createUserSettingsCall()
                    }
                }catch(error){
                    console.error(error)
                }
                
            })()
        }
        }, [userID])


    useEffect(()=>{
        if(userID){
            const userSettingsUpdateCall = async() => {
                try {
                    await amplifyApiClient.graphql({
                        query: updateUserSettings,
                        variables: { input: userSettings }
                    })
                } catch (userSettingsUpdateError) {
                    console.log('Error Creating User Settings:', userSettingsUpdateError)
                }
            }
            userSettingsUpdateCall()
        }
    },[userSettings])

    const userSettingsInput: CreateUserSettingsInput = {
        id: userID,
        studentProfileID: userID,
        notificationsEnabled: true, 
        darkModeEnabled: false, 
        language: 'en',
        isAdmin: false,
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = event.target
        setUserSettings(prevSettings => ({
            ...prevSettings,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    return (
        <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: 20, width: '100%' }}>
                <Typography variant="h6" gutterBottom>
                    User Settings
                </Typography>
                <div style={{ marginBottom: 16 }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={userSettings.darkModeEnabled ? userSettings.darkModeEnabled : false}
                                onChange={handleChange}
                                name="darkModeEnabled"
                                color="primary"
                            />
                        }
                        label="Dark Mode"
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <TextField
                        select
                        label="Language"
                        value={userSettings.language}
                        onChange={handleChange}
                        name="language"
                        variant="outlined"
                        size="small"
                        fullWidth
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                        {/* Add more language options as needed */}
                    </TextField>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={userSettings.notificationsEnabled ? userSettings.notificationsEnabled : false}
                                onChange={handleChange}
                                name="notificationsEnabled"
                                color="primary"
                            />
                        }
                        label="Allow Notifications"
                    />
                </div>
            </Paper>
        </Grid>
    )
}
