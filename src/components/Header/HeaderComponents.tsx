import React, { useEffect, useState } from 'react'
import { Avatar, Button, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { AccountCircle, MoreVert } from '@mui/icons-material'
import { getUrl } from 'aws-amplify/storage';
import { getUrlResult, validateFileExists } from '@/src/functions/AmplifyFunctions';
import { useRouter } from 'next/router';
import { signOut } from 'aws-amplify/auth';

/**
 * CommonHeaderComponent - Displays the brand image in the header.
 *
 * This component is used to render the brand image across different parts of the application
 * where the header is present. It uses Material-UI's Typography component to maintain consistent
 * styling and layout with other textual elements in the header, even though it's displaying an image.
 *
 * @returns {JSX.Element} The brand image wrapped in a Typography component for consistent header styling.
 */
export const CommonHeaderComponent: React.FC = () => {
    return (
        <Typography variant="h6" component="div" style={{ lineHeight: 'inherit' }}>
            <img
                src="/NCE Schoolhouse.jpg"
                alt="NCE Schoolhouse"
                style={{
                    maxHeight: '140px', // Adjust this value as needed
                    maxWidth: '100%',
                    height: 'auto',
                    margin: 'auto', // Centers the image in the available space
                    display: 'block' // Ensures that the image is block-level so margin:auto has effect
                }}
            />
        </Typography>
    )
}

/**
 * Component for rendering authentication buttons for web view.
 * 
 * This component displays 'Sign Up' and 'Login' buttons aligned to the right side of the header.
 * It is intended for use in wider screen layouts typically found in web views.
 */
export const UnauthenticatedHeaderButtons_Web: React.FC = () => {
    // Define custom styles for the buttons
    const signUpButtonStyle: React.CSSProperties = {
        color: 'black', // Text color
        backgroundColor: 'white', // Button color
        border: '1px solid black', // Border color
        textTransform: 'none' // Optional, keeps the text case as is
    }

    const loginButtonStyle: React.CSSProperties = {
        color: 'white', // Text color
        backgroundColor: 'black', // Button color
        border: '1px solid black', // Border color
        textTransform: 'none' // Optional, keeps the text case as is
    }

    return (
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }} spacing={2}>
            <Grid item>
                <Button style={signUpButtonStyle}>Sign Up</Button>
            </Grid>
            <Grid item>
                <Button style={loginButtonStyle}>Login</Button>
            </Grid>
        </Grid>
    )
}

/**
 * Component for rendering authentication buttons for mobile view.
 * 
 * This component displays an icon button that, when clicked, shows a dropdown menu with 'Sign Up' and 'Login' options.
 * It is designed for narrower screen layouts typically found in mobile views.
 * The state and event handlers manage the opening and closing of the dropdown menu.
 */
export const UnauthenticatedHeaderButtons_Mobile: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }}>
            <Grid item>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="default"
                >
                    <MoreVert />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Button color="inherit">Sign Up</Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Button color="inherit">Login</Button>
                    </MenuItem>
                </Menu>
            </Grid>
        </Grid>
    )
}

/**
 * Component for displaying user account buttons for web view.
 * 
 * This component shows an avatar icon button, representing the user's account.
 * It is designed for web layouts and should be replaced with the user's avatar when available.
 */
export const UserAccountButtons_Web: React.FC = () => {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const avatarFileName = 'avatar/avatar.jpg'; 
                const exists = await validateFileExists(avatarFileName);
                if (exists) {
                    const url:any = await getUrlResult(avatarFileName);
                    setAvatarUrl(url);
                }
            } catch (error) {
                console.error('Error fetching avatar:', error);
            }
        };

        fetchAvatar();
    }, [])

    return (
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }}>
            <Grid item>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <Avatar>
                        <AccountCircle /> 
                    </Avatar>
                </IconButton>
                <Authenticated_UserHeaderMenu anchorEl = {anchorEl} open={open} handleClose={handleClose}/>
            </Grid>
        </Grid>
    )
}

/**
 * Component for displaying user account options for mobile view.
 * 
 * Similar to the web version, this component shows an icon button for user account actions.
 * When clicked, it opens a dropdown menu with user account options.
 * It handles the opening and closing of the dropdown menu for mobile layouts.
 */
export const UserAccountButtons_Mobile: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }}>
            <Grid item>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="default"
                >
                    <MoreVert />
                </IconButton>
                <Authenticated_UserHeaderMenu anchorEl = {anchorEl} open={open} handleClose={handleClose}/>
            </Grid>
        </Grid>
    )
}

export const Authenticated_UserHeaderMenu = ({anchorEl, open, handleClose}:any) => {
    const router = useRouter()

    const handleMyCourses = () => {
        handleClose(); // Close the menu
        router.push('/Account'); // Redirect to the Account page
    }

    const handleLogout = async () => {
        try {
            await signOut()
            handleClose()
            router.push('/')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return(
        <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
        >
            <MenuItem onClick={handleMyCourses}>
                <Button color="inherit">My Courses</Button>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                <Button color="inherit">Logout</Button>
            </MenuItem>
        </Menu>
    )
}