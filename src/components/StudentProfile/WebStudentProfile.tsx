import React, { useEffect, useState } from 'react'
import { Button, Grid, List, ListItem, Typography } from '@mui/material'
import { UserAccountView } from './StudentProfileComponents'

/**
 * WebStudentProfile Component - Manages and displays the student profile interface within a web application.
 * 
 * This component serves as a navigation hub for different views of a student's profile, such as their account
 * details and course enrollments. It maintains an 'activeView' state to control which component is displayed
 * to the user based on their selection. The navigation menu allows the user to switch between different views,
 * including 'Account' and 'My Courses', with the potential for additional views to be added.
 * 
 * The main functionality includes:
 * - A side menu for selecting the view ('Account', 'My Courses', etc.).
 * - Dynamic rendering of the selected view's component in the main content area.
 * 
 * @param {any} avatarUrl - The URL of the student's avatar image, passed to the 'UserAccountView' component.
 * 
 * @returns {JSX.Element} - A container with a side navigation menu and a main content area that displays the
 *                          selected view's content.
 */

const WebStudentProfile = ({ userID, avatarUrl, studentProfile, userSettings }) => {
    const [activeView, setActiveView] = useState('Account')
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

    
    const handleMenuClick = (view) => {
        setActiveView(view)
    }

    useEffect(() => {
        console.log("PROFILE: ", studentProfile)
        if(studentProfile && userSettings){
            setStudentProfileData(studentProfile)
            setUserSettingsData(userSettings)
        }else{
            return
        }
    }, [studentProfile, userSettings])

    const renderActiveView = () => {
        switch (activeView) {
            case 'Account':
                return <UserAccountView userID={userID} avatarUrl={avatarUrl} studentProfile={studentProfileData} userSettings={userSettingsData} />
            case 'My Courses':
                // return <StudentCourseView />
                break
            default:
                return <div>Welcome to Your Dashboard</div>
        }
    }

    return (
        <Grid container>
            <Grid item xs={2}>
                <Typography variant="h4" style={{ justifyContent: "center", padding: '10px' }}>
                    Menu
                </Typography>
                <List>
                    {['Account', 'My Courses'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <Button
                                fullWidth
                                onClick={() => handleMenuClick(text)}
                                style={{ 
                                    justifyContent: "flex-start",
                                    color: 'black', 
                                    textTransform: 'none',
                                    fontSize: '1.25rem', 
                                }}
                            >
                                {text}
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid item xs={10} style={{ padding: '20px' }}>
                {renderActiveView()}
            </Grid>
        </Grid>
    )
}

export default WebStudentProfile
