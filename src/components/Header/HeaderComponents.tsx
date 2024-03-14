import React, { useEffect, useState } from 'react'
import { Avatar, Badge, Box, Button, Grid, IconButton, Menu, MenuItem, Typography, setRef } from '@mui/material'
import { AccountCircle, MoreVert, Notifications } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { signOut } from 'aws-amplify/auth'
import { loginButtonStyle, signUpButtonStyle } from '@/src/style/HeaderStyle'
import { ConsoleLogger } from 'aws-amplify/utils'
import { getBroadcastNotificationsQuery, markNotificationAsRead } from '@/src/functions/Notifications'
import { formatDistanceToNow } from 'date-fns'
import { amplifyApiClient } from '@/src/functions/AuthX'
import { onCreateBroadcastNotification, onDeleteBroadcastNotification } from '@/src/graphql/subscriptions'
import { Notification } from '@/src/types/HeaderTypes'

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
    const [anchorElUser, setanchorElUser] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorElUser)
    const router = useRouter()

    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchorElUser(event.currentTarget)
    }

    const handleUserClose = () => {
        setanchorElUser(null)
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
                        onClick={handleUserClick}
                        color="default"
                    >
                        <MoreVert />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorElUser}
                        keepMounted
                        open={open}
                        onClose={handleUserClose}
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
 * displays the user's avatar otherwise, it defaults to a generic account circle icon. Clicking the avatar
 * icon triggers a dropdown menu with user account-related actions. The component manages the dropdown's
 * open/close state using local component state and provides handlers for opening and closing the menu.
 * 
 * @param {any} avatarUrl - The URL of the user's avatar image. If present, the avatar is displayed otherwise, a default icon is used.
 * 
 * @returns {JSX.Element} - A container with an avatar icon button that toggles a dropdown menu for user account actions.
 */

export const UserAccountButtons_Web = ({ avatarUrl }: any) => {
    const [anchorElUser, setanchorElUser] = useState<null | HTMLElement>(null)
    const [anchorElNotifications, setanchorElNotifications] = useState<null | HTMLElement>(null)
    const [notifications, setNotifications] = useState<Notification[]>([])
    const [notificationsLength, setNotificationsLength] = useState(0)
    const [refreshSwitch, setRefreshSwitch] = useState(false)

    const open = Boolean(anchorElUser)

    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchorElUser(event.currentTarget)
    }

    const handleUserClose = () => {
        setanchorElUser(null)
    }

    const handleNotificationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchorElNotifications(event.currentTarget)
    }

    const handleNotificationsClose = () => {
        setanchorElNotifications(null)
    }

    /**
     * 
     * @param notificationID I'm using the refreshSwitch just to trigger the useEffect below to try to live refresh the notifications
     * read and notification count
     */
    const handleNotificationClickEvent = async(notificationID:string) => {
        const notifications:any = await fetchNotifications()
        notifications && markNotificationAsRead(notificationID)
        setRefreshSwitch(!refreshSwitch)
    }

    useEffect(()=>{
        fetchNotifications()
    },[refreshSwitch])

    const fetchNotifications = async () => {
        try {
            const { newNotificationsCount, notificationsPayload }:any = await getBroadcastNotificationsQuery()
            setNotifications(notificationsPayload)
            setNotificationsLength(newNotificationsCount)
            return notificationsPayload
        } catch (error) {
            console.error(error)
            return null
        }
    }

    useEffect(()=>{
        fetchNotifications()
    },[]) 

    useEffect(() => {
        const createNotificationSub = amplifyApiClient.graphql({ query: onCreateBroadcastNotification }).subscribe({
            next: ({ data }) => {
                const newNotification = data.onCreateBroadcastNotification
    
                const readNotificationIds = new Set()
    
                const notificationToAdd: Notification = {
                    id: newNotification.id,
                    title: newNotification.title || null,
                    message: newNotification.message,
                    createdAt: newNotification.createdAt,
                    read: readNotificationIds.has(newNotification.id),
                    target: newNotification.redirect || null,
                }
    
                setNotifications(notifications => [notificationToAdd, ...notifications])
                fetchNotifications()
            },
            error: (error) => console.warn(error)
        })

        // Subscription for deletion events
        const deleteNotificationSub = amplifyApiClient.graphql({ query: onDeleteBroadcastNotification }).subscribe({
            next: ({ data }) => {
                const deletedNotificationId = data.onDeleteBroadcastNotification.id
                console.log(data)

                // Remove the deleted notification from the state
                setNotifications(notifications => notifications.filter(notification => notification.id !== deletedNotificationId))
                fetchNotifications()
            },
            error: (error) => console.warn(error),
        })
    
        return () => {
            createNotificationSub.unsubscribe()
            deleteNotificationSub.unsubscribe()
        }
    }, [])
    

    

    return (
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }}>
            <Grid item>
                <IconButton
                    aria-label="notifications"
                    color="inherit"
                    onClick={handleNotificationClick}
                    style={{marginRight:"30px"}}
                >
                    <Badge badgeContent={notificationsLength} color="error">
                        <Notifications color="action"/>
                    </Badge>
                </IconButton>
                <Menu
                    id="notification-menu"
                    anchorEl={anchorElNotifications}
                    keepMounted
                    open={Boolean(anchorElNotifications)}
                    onClose={handleNotificationsClose}
                    sx={{width: 300}}
                >
                    {notifications.map((notification:any, index) => (
                        <MenuItem 
                            key={index} 
                            sx={{ 
                            width: 280, 
                            whiteSpace: 'normal',
                            backgroundColor: notification.read ? 'inherit' : '#f0f0f0', // Light grey for unread notifications
                            }}
                            onClick={() => handleNotificationClickEvent(notification.id)}
                        >
                            <Box display="flex" flexDirection="column" sx={{ maxWidth: '100%' }}>
                                <Typography variant="body1" component="p" sx={{
                                    display: '-webkit-box',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    wordBreak: 'break-word',
                                    whiteSpace: 'normal',
                                    fontWeight: notification.read ? 'normal' : 'bold', // Bold for unread messages
                                }}>
                                    {notification.message}
                                </Typography>
                                {/*<Typography component="p" variant="body2" style={{ color: 'gray' }}>
                                    {formatDistanceToNow(new Date(notification.createdAt), { addSuffix: true })}
                            </Typography>*/}
                            </Box>
                        </MenuItem>
                        ))}

                </Menu>

                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleUserClick}
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
                <Authenticated_UserHeaderMenu anchorElUser={anchorElUser} open={open} handleUserClose={handleUserClose} />
            </Grid>
        </Grid>
    )
}

{/*<Avatar src={avatarUrl} />*/}
/**
 * Component for displaying user account options for mobile view.
 * 
 * Similar to the web version, this component shows an icon button for user account actions.
 * When clicked, it opens a dropdown menu with user account options.
 * It handles the opening and closing of the dropdown menu for mobile layouts.
 */
export const UserAccountButtons_Mobile: React.FC = () => {
    const [anchorElUser, setanchorElUser] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorElUser)

    const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchorElUser(event.currentTarget)
    }

    const handleUserClose = () => {
        setanchorElUser(null)
    }

    return (
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }}>
            <Grid item>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleUserClick}
                    color="default"
                >
                    <MoreVert />
                </IconButton>
                <Authenticated_UserHeaderMenu anchorElUser = {anchorElUser} open={open} handleUserClose={handleUserClose}/>
            </Grid>
        </Grid>
    )
}

/**
 * Authenticated_UserHeaderMenu Component - Renders a dropdown menu for authenticated users.
 * 
 * This component provides a dropdown menu for authenticated users, offering navigation options to
 * "My Courses" and a logout functionality. The menu is triggered by an IconButton in the parent
 * component and utilizes the `anchorElUser` prop for positioning. The `open` prop controls the visibility
 * of the dropdown, and the `handleUserClose` function is used to close the menu upon selecting an option
 * or clicking outside. Navigation is handled using the Next.js `useRouter` hook, ensuring a seamless
 * SPA experience. The logout functionality is implemented with an async `signOut` function, which, upon
 * success, redirects the user to the homepage.
 * 
 * @param {any} anchorElUser - The element to anchor the dropdown menu to.
 * @param {any} open - A boolean controlling the visibility of the dropdown menu.
 * @param {any} handleUserClose - A function to close the dropdown menu.
 * 
 * @returns {JSX.Element} - A dropdown menu with options for "My Courses" and "Logout" for authenticated users.
 */

export const Authenticated_UserHeaderMenu = ({anchorElUser, open, handleUserClose}:any) => {
    const router = useRouter()
    

    const handleSettingsClick = () => {
        handleUserClose() // Close the menu
        router.push('/StudentProfile') // Redirect to the Account page
    }

    const handleLogoutClick = async () => {
        const logger = new ConsoleLogger('handleLogoutClick in Authenticated_UserHeaderMenu')
        try {
            await signOut()
            handleUserClose()
            router.push('/')
        } catch (error) {
            logger.error(error)
        }
    }

    return(
        <div id="authenticated-user-menu">
            <Menu
                id="long-menu"
                anchorEl={anchorElUser}
                keepMounted
                open={open}
                onClose={handleUserClose}
            >
                <MenuItem onClick={handleSettingsClick}>
                    <Button color="inherit">Settings</Button>
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                    <Button color="inherit">Logout</Button>
                </MenuItem>
            </Menu>
            <Menu
                id="long-menu"
                anchorEl={anchorElUser}
                keepMounted
                open={open}
                onClose={handleUserClose}
            >
                <MenuItem onClick={handleSettingsClick}>
                    <Button color="inherit">Settings</Button>
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                    <Button color="inherit">Logout</Button>
                </MenuItem>
            </Menu>
        </div>
    )
}

export const notificationsDropDown = async({anchorElNotifications, open, handleNotificationsClose}:any) => {
    return(
        <Menu
          id="notification-menu"
          anchorEl={anchorElNotifications}
          keepMounted
          open={anchorElNotifications}
          onClose={handleNotificationsClose}
        >
          {/* Placeholder MenuItems, replace with your logic for notifications */}
          <MenuItem onClick={handleNotificationsClose}>Notification 1</MenuItem>
          <MenuItem onClick={handleNotificationsClose}>Notification 2</MenuItem>
          <MenuItem onClick={handleNotificationsClose}>Notification 3</MenuItem>
        </Menu>
    )
}