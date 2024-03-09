import React, { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/api"
import { getNCEStudentProfile, getNCEUserSettings } from '@/src/graphql/queries'
import { Box, Tabs, Tab, FormControl, InputLabel, Select, MenuItem, Typography, Grid, Paper, Avatar, Button, TextField, FormControlLabel, Switch, CircularProgress } from '@mui/material'
import { Course } from '@/src/types/StudentProfileTypes'
import { uploadFileToS3 } from '@/src/functions/Storage'
import { getCurrentUser } from 'aws-amplify/auth'
import { updateNCEStudentProfile, updateNCEUserSettings } from '@/src/graphql/mutations'
import { Cancel, CheckCircle } from '@mui/icons-material'
import { green, red } from '@mui/material/colors'
import { Router, useRouter } from 'next/router'

const amplifyApiClient = generateClient()

/**
 * StudentCourseView Component - Manages and displays a list of courses and details for a selected course.
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
 *

export const StudentCourseView = ({userID}:any) => {
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
*/

/**
 * UserAccountView - A container component for managing user account-related components.
 * 
 * This component renders a tabbed interface for different aspects of the user's account, including account settings, user settings, 
 * avatar management, and notifications. Based on the selected tab, it conditionally renders the corresponding component, passing 
 * necessary props such as userID and avatarUrl to them. This architecture enables a modular and organized approach to account management,
 * with each tab dedicated to a specific aspect of the user's account.
 * 
 * @param {any} userID - The unique identifier for the user.
 * @param {any} avatarUrl - The URL of the user's current avatar image.
 * 
 * @returns {JSX.Element} - A grid layout containing tabs for different sections of the user's account and the content of the selected tab.
 */
export const UserAccountView = ({userID, avatarUrl, router}:any) => {
    const [selectedTab, setSelectedTab] = useState(0)

    const handleTabChange = (event:any, newTabValue:any) => {
        setSelectedTab(newTabValue)
    }

    const tabNameToIndex:any = {
        accountSettings: 0,
        userSettings: 1,
        avatar: 2,
        notifications: 3,
      }

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            const tabIndex = tabNameToIndex[hash]
            if (tabIndex !== undefined) setSelectedTab(tabIndex)
        }

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange, false)
        
        // Call once on component mount in case there's already a hash
        handleHashChange()

        // Cleanup
        return () => window.removeEventListener('hashchange', handleHashChange, false)
    }, [])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Tabs value={selectedTab} onChange={handleTabChange} aria-label="settings tabs">
                        <Tab label="Account Settings" />
                        <Tab label="User Settings" />
                        <Tab label="Avatar" />
                        <Tab label="Notifications" />
                    </Tabs>
                </Box>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: 20, width: '100%' }}>
                        {selectedTab === 0 && (
                            <AccountSettingsComponent userID={userID} />

                        )}
                        {selectedTab === 1 && (
                            <UserSettingsComponent userID={userID}/>
                        )}
                        {selectedTab === 2 && (
                            <AvatarManager avatarUrl={avatarUrl}/>
                        )}
                        {selectedTab === 3 && (<div></div>)}

                    </Paper>
                </Grid>
            </Grid>
            
        </Grid>
    )
}

/**
 * UserSettingsComponent - Manages the display and update of user settings.
 * 
 * This component is responsible for fetching and displaying the current user's settings, such as name, email, and birthdate, 
 * based on the provided userID. Users can update their settings, which are then persisted to the backend via a GraphQL API call. 
 * The component initially fetches the user's settings and displays them in form fields, allowing for modifications. Changes are 
 * applied by invoking a separate API call to update the backend, ensuring the user's settings are always current and accurately reflected.
 * 
 * @param {any} userID - The unique identifier for the user whose settings are to be managed.
 * 
 * @returns {JSX.Element} - A form that displays and allows for the modification of the user's settings.
 */
export const UserSettingsComponent = ({userID}:any) => {
    const [userSettings, setUserSettings] = useState({
        id:userID,
        birthdate: '',
        email: '',
        name: '',
    })
    const [loading, setLoading] = useState(true)
    const [saveChangesLoading, setSaveChangesLoading] = useState(false)
    const [saveError, setSaveError] = useState(false)
    const [saveErrorText, setSaveErrorText] = useState("")

    useEffect(() => {
        const checkAndSetUserSettings = async () => {
            try{
                if(userID){
                    const apiCall = await amplifyApiClient.graphql({
                        query: getNCEStudentProfile, 
                        variables: { id: userID }
                    })

                    if(apiCall.data.getNCEStudentProfile) {
                        setUserSettings({
                            id: userID,
                            birthdate: apiCall.data.getNCEStudentProfile.birthdate,
                            email: apiCall.data.getNCEStudentProfile.email,
                            name: apiCall.data.getNCEStudentProfile.name,
                        })
                        setLoading(false)
                    }
                    else {
                        console.error("User settings don't exist")
                    }
                }
            }catch(error){
                console.error(error)
                return false
            }
        }

        (async () => {
            try{
                checkAndSetUserSettings()
            }catch(error){
                console.error(error)
            }
        })()
    }, [userID])

    const handleChange = () => {
        setSaveChangesLoading(true)
        const accountSettingsUpdateCall = async() => {
            try {
                const updateCall = await amplifyApiClient.graphql({
                    query: updateNCEStudentProfile,
                    variables: { input: userSettings }
                })
                return(updateCall)
            } catch (userSettingsUpdateError) {
                console.log('Error Creating User Settings:', userSettingsUpdateError)
                return(null)
            }
        }
        try{
            const updateCall = accountSettingsUpdateCall()
            if(updateCall !== null) {
                setTimeout(() => {
                    setSaveChangesLoading(false)
                }, 1250)
            } else {
                setSaveChangesLoading(false)
            }
        }catch(error:any){
            setSaveErrorText(error)
            setSaveChangesLoading(false)
            setSaveError(true)
        }
    }

    const SaveStatusIndicator = () => {
        if(saveError){
            return(<Cancel style={{ color: red[500] }} />)
        }else{
            return(<CheckCircle style={{ color: green[500] }} />)
        }
    }

    return(
        !loading && (
            <Box component="form" noValidate autoComplete="off">
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    value={userSettings.name}
                    onChange={(event)=>setUserSettings({...userSettings, name:event.target.value})}
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={userSettings.email}
                    disabled
                />
                <TextField
                    fullWidth
                    label="Birthdate"
                    name="birthdate"
                    type="date"
                    variant="outlined"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={userSettings.birthdate}
                    onChange={(event)=>setUserSettings({...userSettings, birthdate:event.target.value})}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>handleChange()}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save Changes 
                    {saveChangesLoading ? (
                    <CircularProgress size={24} />
                    ) : (
                    <SaveStatusIndicator />
                )}
                </Button>
                {saveErrorText!=="" && <Typography variant="caption" color="red">{saveErrorText}</Typography>}
                

            </Box>
        )
    )
}

/**
 * AccountSettingsComponent - Manages the display and update of account-related settings.
 * 
 * This component is designed to allow users to manage their account settings, including toggling dark mode,
 * selecting a language preference, enabling or disabling notifications, and viewing admin status. 
 * It fetches the current settings from a GraphQL API upon component mount, using the provided userID, and 
 * updates the UI accordingly. Users can modify their settings via interactive form elements, and changes are 
 * persisted to the backend through another GraphQL API call. This ensures that account settings are consistent 
 * across sessions and devices. The component provides immediate visual feedback for changes and handles loading 
 * states and potential errors gracefully.
 * 
 * @param {any} userID - The unique identifier for the user whose account settings are being managed.
 * 
 * @returns {JSX.Element} - A set of form controls for updating user account settings, including dark mode preference, 
 * language selection, notifications toggle, and admin status indication.
 */
export const AccountSettingsComponent = ({userID}:any) => {
    const [accountSettings, setAccountSettings] = useState({
        id:userID,
        darkModeEnabled: false,
        language: 'en',
        notificationsEnabled: false,
        isAdmin: false
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAndSetAccountSettings = async () => {
            try{
                if(userID){
                    const apiCall = await amplifyApiClient.graphql({
                        query: getNCEUserSettings, 
                        variables: { id: userID }
                    })

                    if(apiCall.data.getNCEUserSettings) {
                        setAccountSettings({
                            id: apiCall.data.getNCEUserSettings.id,
                            darkModeEnabled: apiCall.data.getNCEUserSettings.darkModeEnabled,
                            language: apiCall.data.getNCEUserSettings.language,
                            notificationsEnabled: apiCall.data.getNCEUserSettings.notificationsEnabled,
                            isAdmin: apiCall.data.getNCEUserSettings.isAdmin,
                        })
                        setLoading(false)
                    }
                    else {
                        console.error("User settings don't exist")
                    }
                }
            }catch(error){
                console.error(error)
                return false
            }
        }

        (async () => {
            try{
                checkAndSetAccountSettings()
            }catch(error){
                console.error(error)
            }
        })()
    }, [userID])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = event.target
        const updatedValue = type === 'checkbox' ? checked : value

        const accountSettingsUpdateCall = async() => {
            try {
                const updatedSettings = {
                    ...accountSettings,
                    [name]: updatedValue,
                }
                let apiCall = await amplifyApiClient.graphql({
                    query: updateNCEUserSettings,
                    variables: { input: updatedSettings }
                })

                if(apiCall) {
                    setAccountSettings({
                        id:apiCall.data.updateNCEUserSettings.id,
                        darkModeEnabled: apiCall.data.updateNCEUserSettings.darkModeEnabled,
                        language: apiCall.data.updateNCEUserSettings.language,
                        notificationsEnabled: apiCall.data.updateNCEUserSettings.notificationsEnabled,
                        isAdmin: apiCall.data.updateNCEUserSettings.isAdmin
                    })
                    setLoading(false)
                }
            } catch (userSettingsUpdateError) {
                console.log('Error Creating User Settings:', userSettingsUpdateError)
            }
        }
        accountSettingsUpdateCall()
    }

    return (
        !loading && (
            <><div style={{ marginBottom: 16 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={accountSettings.darkModeEnabled ? accountSettings.darkModeEnabled : false}
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
                    value={accountSettings.language}
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
                            checked={accountSettings.notificationsEnabled ? accountSettings.notificationsEnabled : false}
                            onChange={handleChange}
                            name="notificationsEnabled"
                            color="primary"
                        />
                    }
                    label="Allow Notifications"
                />
            </div></>
        )
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
export const AvatarManager = ({ avatarUrl }:any) => {
    const router=useRouter()

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

        if (uploadedKey) {
            window.location.href+="#avatar"
            window.location.reload()
        }
    }

    return (
        <div>
            <Typography variant="h6">Avatar</Typography>
            <Avatar src={avatarUrl} style={{ width: 60, height: 60, margin: 20 }} />
            <Button variant="contained" component="label">
                Upload Avatar
                <input type="file" hidden onChange={handleFileChange} />
            </Button>
        </div>
    )
}