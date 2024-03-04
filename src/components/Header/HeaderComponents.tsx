import React, { useEffect, useState } from 'react'
import { Avatar, Button, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { AccountCircle, MoreVert } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { signOut } from 'aws-amplify/auth'
import { loginButtonStyle, signUpButtonStyle } from '@/src/style/HeaderStyle'
import { ConsoleLogger } from 'aws-amplify/utils'

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
 * UnauthenticatedHeaderMenuOptions Component - Renders menu options for unauthenticated users.
 * 
 * This component displays different menu options based on the device's screen size. For mobile devices,
 * it presents a dropdown menu activated by an icon button. For larger screens, it displays "Sign Up" and
 * "Login" buttons directly in the header. It utilizes the `isMobile` prop to determine the screen size and
 * accordingly adjust the UI presentation. The navigation to "Log In" and "Sign Up" pages is handled using
 * the Next.js `useRouter` hook, providing SPA navigation experience.
 * 
 * @param {any} isMobile - A boolean indicating whether the device is a mobile device based on screen size.
 * 
 * @returns {JSX.Element} - A set of menu options for unauthenticated users, tailored to the screen size.
 */

export const UnauthenticatedHeaderMenuOptions = ({isMobile}:any) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLoginClick = () => {
        router.push('/LogIn')
    }

    const handleSignUpClick = () => {
        router.push("/SignUp")
    }

    if(isMobile) {
        return(
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
                        <MenuItem onClick={handleSignUpClick}>
                            <Button color="inherit">Sign Up</Button>
                        </MenuItem>
                        <MenuItem onClick={handleLoginClick}>
                            <Button color="inherit">Login</Button>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        )
    }

    else {
        return(
            <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }} spacing={2}>
                <Grid item>
                    <Button onClick={handleSignUpClick} style={signUpButtonStyle}>Sign Up</Button>
                </Grid>
                <Grid item>
                    <Button onClick={handleLoginClick} style={loginButtonStyle}>Login</Button>
                </Grid>
            </Grid>
        )
    }
}

/**
 * Component for rendering authentication buttons for web view.
 * 
 * This component displays 'Sign Up' and 'Login' buttons aligned to the right side of the header.
 * It is intended for use in wider screen layouts typically found in web views.
 */
export const UnauthenticatedHeaderButtons_Web: React.FC = () => {
    return ( <UnauthenticatedHeaderMenuOptions isMobile={false} />)
}

/**
 * Component for rendering authentication buttons for mobile view.
 * 
 * This component displays an icon button that, when clicked, shows a dropdown menu with 'Sign Up' and 'Login' options.
 * It is designed for narrower screen layouts typically found in mobile views.
 * The state and event handlers manage the opening and closing of the dropdown menu.
 */
export const UnauthenticatedHeaderButtons_Mobile: React.FC = () => {
    return ( <UnauthenticatedHeaderMenuOptions isMobile={true} /> )
}

/**
 * UserAccountButtons_Web Component - Displays the user account button for web views.
 * 
 * This component renders an avatar icon button in the web application's header for authenticated users.
 * The avatar is conditionally rendered based on the `avatarUrl` prop. If an avatar URL is provided, it
 * displays the user's avatar; otherwise, it defaults to a generic account circle icon. Clicking the avatar
 * icon triggers a dropdown menu with user account-related actions. The component manages the dropdown's
 * open/close state using local component state and provides handlers for opening and closing the menu.
 * 
 * @param {any} avatarUrl - The URL of the user's avatar image. If present, the avatar is displayed; otherwise, a default icon is used.
 * 
 * @returns {JSX.Element} - A container with an avatar icon button that toggles a dropdown menu for user account actions.
 */

export const UserAccountButtons_Web = ({ avatarUrl }: any) => {
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
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleClick}
                    color="inherit"
                >
                    {avatarUrl ? (
                        <Avatar src={avatarUrl} />
                    ) : (
                        <Avatar>
                            <AccountCircle />
                        </Avatar>
                    )}
                </IconButton>
                <Authenticated_UserHeaderMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
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

/**
 * Authenticated_UserHeaderMenu Component - Renders a dropdown menu for authenticated users.
 * 
 * This component provides a dropdown menu for authenticated users, offering navigation options to
 * "My Courses" and a logout functionality. The menu is triggered by an IconButton in the parent
 * component and utilizes the `anchorEl` prop for positioning. The `open` prop controls the visibility
 * of the dropdown, and the `handleClose` function is used to close the menu upon selecting an option
 * or clicking outside. Navigation is handled using the Next.js `useRouter` hook, ensuring a seamless
 * SPA experience. The logout functionality is implemented with an async `signOut` function, which, upon
 * success, redirects the user to the homepage.
 * 
 * @param {any} anchorEl - The element to anchor the dropdown menu to.
 * @param {any} open - A boolean controlling the visibility of the dropdown menu.
 * @param {any} handleClose - A function to close the dropdown menu.
 * 
 * @returns {JSX.Element} - A dropdown menu with options for "My Courses" and "Logout" for authenticated users.
 */

export const Authenticated_UserHeaderMenu = ({anchorEl, open, handleClose}:any) => {
    const router = useRouter()
    

    const handleSettingsClick = () => {
        handleClose() // Close the menu
        router.push('/StudentProfile') // Redirect to the Account page
    }

    const handleLogoutClick = async () => {
        const logger = new ConsoleLogger('handleLogoutClick in Authenticated_UserHeaderMenu')
        try {
            await signOut()
            handleClose()
            router.push('/')
        } catch (error) {
            logger.error(error)
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
            <MenuItem onClick={handleSettingsClick}>
                <Button color="inherit">Settings</Button>
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>
                <Button color="inherit">Logout</Button>
            </MenuItem>
        </Menu>
    )
}