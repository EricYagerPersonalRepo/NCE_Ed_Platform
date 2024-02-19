import React, { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/api"
import { getStudentProfile, listCourseProfiles } from '@/src/graphql/queries'
import { FormControl, InputLabel, Select, MenuItem, Typography, Grid, Paper, Avatar, Button } from '@mui/material'
import { Course } from '@/src/types/StudentProfileTypes'
import { downloadAvatarFromS3, uploadFileToS3 } from '@/src/functions/StorageFunctions'
import { getCurrentUser } from 'aws-amplify/auth'
import { createUserSettings } from '@/src/graphql/mutations'
import { CreateUserSettingsInput } from '@/src/API'

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

            try {
                const userData: any = await amplifyApiClient.graphql({
                    query: getStudentProfile,
                    variables: {
                        id: userID
                    }
                })
                setUserInformation(userData.data.getStudentProfile)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        fetchUserData()

        const userSettingsInput: CreateUserSettingsInput = {
            studentProfileID: userID,
            notificationsEnabled: true, 
            darkModeEnabled: false, 
            language: 'en', 
        }

        
        const createUserSettingsCall = async() =>{
            try {
                const apiCall = await amplifyApiClient.graphql({
                    query: createUserSettings,
                    variables: { input: userSettingsInput }
                })
            } catch (userSettingsCreateError) {
                console.log('Error Creating User Settings:', userSettingsCreateError)
            }
        }
        if (userInformation.userSettings?.studentProfileID ?? null === null) {
            createUserSettingsCall();
        }
    }, [userID])

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Account Dashboard
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Typography variant="h6">Profile Information</Typography>
                    {/* Profile information goes here */}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} style={{ padding: 20 }}>
                    <Typography variant="h6">Settings</Typography>
                    {/* Settings go here */}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <AvatarManager avatarUrl={avatarUrl} />
                <Paper elevation={3} style={{ marginTop: 20, padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6">Recent Activity</Typography>
                </Paper>
            </Grid>
            {/* Additional sections can be added here */}
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
        const userDataResponse = {
            email: currentUser.signInDetails?.loginId || '', // Fallback to an empty string if undefined
            cognitoID: currentUser.userId
        }
        const avatarTarget = `avatars/${userDataResponse.cognitoID}/avatar.png`

        if (!file) return
        const uploadedKey:any = await uploadFileToS3(file, avatarTarget)

        if (uploadedKey) {
            window.location.reload()
        }
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