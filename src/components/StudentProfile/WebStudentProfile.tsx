import React, { useState } from 'react';
import { Button, Drawer, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

const WebStudentProfile = ({ isLoggedIn }: any) => {
    const [activeView, setActiveView] = useState('Account');

    const handleMenuClick = (view: string) => {
        setActiveView(view);
    };

    const renderActiveView = () => {
        switch (activeView) {
            case 'Account':
                return <div>Account Information</div>;
            case 'My Courses':
                return <div>My Courses Content</div>;
            // Add more cases for other views
            default:
                return <div>Welcome to Your Dashboard</div>;
        }
    };

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
    );
}

export default WebStudentProfile;
