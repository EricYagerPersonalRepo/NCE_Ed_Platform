import React, { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/api"
import { getNCEStudentProfile, getNCEUserSettings, getStudentProfile } from '@/src/graphql/queries'
import { Box, Tabs, Tab, FormControl, InputLabel, Select, MenuItem, Typography, Grid, Paper, Avatar, Button, TextField, FormControlLabel, Switch, CircularProgress } from '@mui/material'
import { Course } from '@/src/types/StudentProfileTypes'
import { uploadFileToS3 } from '@/src/functions/Storage'
import { getCurrentUser } from 'aws-amplify/auth'
import { updateNCEStudentProfile, updateNCEUserSettings, updateStudentProfile } from '@/src/graphql/mutations'
import { Cancel, CheckCircle } from '@mui/icons-material'
import { green, red } from '@mui/material/colors'
import { Router, useRouter } from 'next/router'
import { StudentStatus } from '@/src/API'

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
export const UserAccountView = ({ avatarUrl, studentProfile, userSettings}:any) => {
    const [selectedTab, setSelectedTab] = useState(0)
    const [studentProfileData, setStudentProfileData] = useState({
        id: '',
        email: '',
        name: '',
    })
    const [userSettingsData, setUserSettingsData] = useState({
        id: '',
        darkModeEnabled: false,
        language: 'en',
        notificationsEnabled: false,
        isAdmin: false,
    })

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
        window.addEventListener('hashchange', handleHashChange, false)
        handleHashChange()
        return () => window.removeEventListener('hashchange', handleHashChange, false)
    }, [])

    useEffect(() => {
        if(studentProfile && userSettings){
            console.log("student profile: ", studentProfile, "user settings: ", userSettings)
            setStudentProfileData(studentProfile)
            setUserSettingsData(userSettings)
        }else{
            return
        }
    }, [studentProfile, userSettings])

    const updateHash = (hash) => {
        window.location.hash = ""
        window.location.hash += hash
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <Tabs value={selectedTab} onChange={handleTabChange} aria-label="settings tabs">
                        <Tab onClick={()=>{updateHash("#accountSettings")}} label="Account Settings" />
                        <Tab onClick={()=>{updateHash("#userSettings")}} label="User Settings" />
                        <Tab onClick={()=>{updateHash("#avatar")}} label="Avatar" />
                        <Tab onClick={()=>{updateHash("#notifications")}} label="Notifications" />
                    </Tabs>
                </Box>
                <Grid item xs={12}>
                    <Paper elevation={3} style={{ padding: 20, width: '100%' }}>
                        {selectedTab === 0 && (
                            <StudentProfileComponent userSettings={userSettingsData} studentProfile={studentProfileData} />
                        )}
                        {selectedTab === 1 && (
                            <UserSettingsComponent userSettings={userSettingsData} studentProfile={studentProfileData}/>
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

export const StudentProfileComponent = ({userSettings, studentProfile}:any) => {
    const [studentProfileData, setStudentProfileData] = useState({
        id:'',
        email: '',
        name: '',
    })
    const [userSettingsData, setUserSettingsData] = useState({
        id: '',
        darkModeEnabled: false,
        language: 'en',
        notificationsEnabled: false,
        isAdmin: false,
    })
    const [loading, setLoading] = useState(true)
    const [saveChangesLoading, setSaveChangesLoading] = useState(false)
    const [saveError, setSaveError] = useState(false)
    const [saveErrorText, setSaveErrorText] = useState("")

    useEffect(() => {
        if(studentProfile && userSettings){
            setStudentProfileData(studentProfile)
            setUserSettingsData(userSettings)
            setLoading(false)
        }else{
            return
        }
    }, [studentProfile, userSettings])

    const handleChange = async () => {
        setSaveChangesLoading(true);
        try {
            const updatedStudentProfile = {
                ...studentProfileData,
                // Include other fields as necessary
            };
            const updateCall = await amplifyApiClient.graphql({
                query: updateStudentProfile,
                variables: { input: updatedStudentProfile }
            });
            if (updateCall !== null) {
                setStudentProfileData({
                    id: updateCall.data.updateStudentProfile.id,
                    email: updateCall.data.updateStudentProfile.email,
                    name: updateCall.data.updateStudentProfile.name,
                });
                // Optionally, update userSettings state if necessary
            }
            setSaveChangesLoading(false);
        } catch (error) {
            console.error('Error Updating User Settings:', error);
            setSaveChangesLoading(false);
            setSaveErrorText(error.message || 'An error occurred');
            setSaveError(true);
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
                    value={studentProfileData.name}
                    onChange={(event)=>setStudentProfileData({...studentProfileData, name: event.target.value})}
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    value={studentProfileData.email}
                    disabled
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleChange}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Save Changes 
                </Button>
                {saveChangesLoading ? (
                    <CircularProgress size={24} />
                    ) : (
                    <SaveStatusIndicator />
                )}
                {saveErrorText!=="" && <Typography variant="caption" color="red">{saveErrorText}</Typography>}
                

            </Box>
        )
    )
}

export const UserSettingsComponent = ({ userSettings, studentProfile }) => {
    const [studentProfileData, setStudentProfileData] = useState({
        id:'',
        email: '',
        name: '',
    })
    const [userSettingsData, setUserSettingsData] = useState({
        id: '',
        darkModeEnabled: false,
        language: 'en',
        notificationsEnabled: false,
        isAdmin: false,
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (studentProfile && userSettings) {
            console.log("User Settings: ", userSettings)
            setUserSettingsData(userSettings)
            setStudentProfileData(studentProfile)
            setLoading(false)
        } else {
            return
        }
    }, [studentProfile, userSettings])

    const handleChange = async (event) => {
        const { name, value, checked, type } = event.target
        const updatedValue = type === 'checkbox' ? checked : value

        try {
            const updatedSettings = {
                ...studentProfileData,
                ...userSettingsData,
                [name]: updatedValue,
            }
            const response = await amplifyApiClient.graphql({
                query: updateStudentProfile,
                variables: { input: updatedSettings },
            })

            if (response) {
                setUserSettingsData({
                    id: response.data.updateStudentProfile.id,
                    darkModeEnabled: response.data.updateStudentProfile.darkModeEnabled,
                    language: response.data.updateStudentProfile.language,
                    notificationsEnabled: response.data.updateStudentProfile.notificationsEnabled,
                    isAdmin: response.data.updateStudentProfile.isAdmin,
                })
            }
        } catch (userSettingsUpdateError) {
            console.log('Error Updating User Settings:', userSettingsUpdateError)
        }
    }

    return !loading && (
        <>
            <div style={{ marginBottom: 16 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={userSettingsData.darkModeEnabled}
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
                    value={userSettingsData.language}
                    onChange={handleChange}
                    name="language"
                    variant="outlined"
                    size="small"
                    fullWidth
                >
                    {['en', 'es', 'fr'].map((lang) => (
                        <MenuItem key={lang} value={lang}>{lang}</MenuItem>
                    ))}
                </TextField>
            </div>
            <div style={{ marginBottom: 16 }}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={userSettingsData.notificationsEnabled}
                            onChange={handleChange}
                            name="notificationsEnabled"
                            color="primary"
                        />
                    }
                    label="Allow Notifications"
                />
            </div>
        </>
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
        const avatarTarget = `user_files/${userDataResponse.cognitoID}/avatar.png`

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