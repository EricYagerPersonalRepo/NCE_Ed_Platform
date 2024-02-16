import React, { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/api"
import { listCourseProfiles } from '@/src/graphql/queries'
import { FormControl, InputLabel, Select, MenuItem, Typography, Grid, Paper, Avatar, Button } from '@mui/material'
import { Course } from '@/src/types/StudentProfileTypes'
import { downloadAvatarFromS3, uploadFileToS3 } from '@/src/functions/StorageFunctions'

const amplifyApiClient = generateClient()

export const MyCourseView = () => {
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

export const MyAccountView = ({userID}:any) => {
    const [avatar,setAvatar] = useState()

    const avatarUrl = `/public/avatars/${userID}/avatar.png`
    console.log("AVATARURL: ", avatarUrl)

    useEffect(()=>{
        const getUserAvatar = async() => {
            const avatarCall = await downloadAvatarFromS3(avatarUrl)
            console.log("AVATARCALL: ", avatarCall)
        }
        getUserAvatar()
    },[])

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
    );
};

const AvatarManager = ({ avatarUrl, onAvatarUpload }:any) => {
    const handleFileChange:any = async (event:any) => {
        const file = event.target.files[0];
        if (!file) return;
        const uploadedKey:any = await uploadFileToS3(file, avatarUrl);

        if (uploadedKey) {
            onAvatarUpload(uploadedKey);
        }
    };

    return (
        <Paper elevation={3} style={{ padding: 20 }}>
            <Typography variant="h6">Avatar</Typography>
            <Avatar src={avatarUrl} style={{ width: 60, height: 60, margin: 20 }} />
            <Button variant="contained" component="label">
                Upload Avatar
                <input type="file" hidden onChange={handleFileChange} />
            </Button>
        </Paper>
    );
}