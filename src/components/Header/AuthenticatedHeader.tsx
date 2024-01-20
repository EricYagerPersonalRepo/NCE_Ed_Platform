import React from 'react'
import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material'
import { CommonHeaderComponent, UserAccountButtons_Mobile, UserAccountButtons_Web } from './HeaderComponents'

/**
 * Component for displaying the header when a user is authenticated.
 * 
 * This component renders the common header content and user account buttons.
 * It uses a media query to determine if the layout is for mobile or web view
 * and displays the appropriate user account buttons accordingly.
 * 
 * The component relies on the MUI AppBar and Toolbar components for layout,
 * and it dynamically switches between mobile and web versions of the user account
 * buttons based on the screen size.
 */
const AuthenticatedHeader: React.FC = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <AppBar position="static" style={{ background: 'white' }} elevation={0}>
            <Toolbar>
                <CommonHeaderComponent />
                {isMobile ? <UserAccountButtons_Mobile /> : <UserAccountButtons_Web />}
            </Toolbar>
        </AppBar>
    )
}

export default AuthenticatedHeader
