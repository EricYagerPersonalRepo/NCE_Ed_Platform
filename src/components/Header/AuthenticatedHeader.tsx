import React from 'react'
import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material'
import { CommonHeaderComponent, UserAccountButtons_Mobile, UserAccountButtons_Web } from './HeaderComponents'
import { AuthenticatedHeaderProps } from '@/src/types/HeaderTypes'

/**
 * AuthenticatedHeader Component - Renders the header for authenticated users in the application.
 * 
 * This component displays a consistent header for authenticated users across different parts of the application.
 * It dynamically adjusts the user account buttons based on the screen size, showing a mobile-optimized version
 * on smaller screens and a web version on larger screens. The decision is made using Material-UI's useMediaQuery
 * hook to check against the theme's breakpoints.
 * 
 * Props:
 * - avatarUrl: URL string pointing to the authenticated user's avatar image. This URL is passed to the
 *   UserAccountButtons_Web component for displaying the user's avatar.
 * 
 * The component includes a CommonHeaderComponent, which could contain navigation or branding common to
 * all authenticated states of the application. The presence of avatarUrl in the props suggests that the
 * component may also display user-specific information, enhancing the personalized experience of the application.
 * 
 * @param {AuthenticatedHeaderProps} props - The props object, destructured to extract avatarUrl for use in the component.
 * @returns {JSX.Element} - The AppBar component containing the toolbar with common header elements and user account buttons,
 *                          adapted for mobile or web display based on the current screen size.
 */
const AuthenticatedHeader: React.FC<AuthenticatedHeaderProps>= ({userData, avatarUrl}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <AppBar position="static" sx={{ background: 'white', zIndex: (theme) => theme.zIndex.drawer + 1  }} elevation={0}>
            <Toolbar>
                <CommonHeaderComponent />
                {isMobile ? <UserAccountButtons_Mobile /> : <UserAccountButtons_Web userID={userData.cognitoID} avatarUrl={avatarUrl}/>}
            </Toolbar>
        </AppBar>
    )
}

export default AuthenticatedHeader