import React, { useState } from 'react'
import { Avatar, Button, Grid, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { AccountCircle, MoreVert } from '@mui/icons-material'

/**
 * Common header elements
 */
export const CommonHeaderComponent: React.FC = () => {
    return (
        <Typography variant="h6">
            Brand Name
        </Typography>
    )
}

/**
 * Component for rendering authentication buttons for web view.
 * 
 * This component displays 'Sign Up' and 'Login' buttons aligned to the right side of the header.
 * It is intended for use in wider screen layouts typically found in web views.
 */
export const HeaderAuthenticationButtons_Web: React.FC = () => {
    return(
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }}>
            <Grid item>
                <Button color="inherit">Sign Up</Button>
            </Grid>
            <Grid item>
                <Button color="inherit">Login</Button>
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
export const HeaderAuthenticationButtons_Mobile: React.FC = () => {
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
                    color="inherit"
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
    return (
        <Grid container justifyContent="flex-end" style={{ flexGrow: 1 }}>
            <Grid item>
                <IconButton>
                    <Avatar>
                        <AccountCircle /> {/* Placeholder icon, replace with user avatar when available */}
                    </Avatar>
                </IconButton>
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
                    color="inherit"
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