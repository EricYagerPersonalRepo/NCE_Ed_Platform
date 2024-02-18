import React, { useEffect } from 'react'
import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material'
import { CommonHeaderComponent, UserAccountButtons_Mobile, UserAccountButtons_Web } from './HeaderComponents'
import { AuthenticatedHeaderProps } from '@/src/types/HeaderTypes'
import { useAuth } from '@/src/state/AuthGlobalState'

/**
 * AuthenticatedHeader Component - Renders the header for authenticated users, adapting to screen size.
 * 
 * This component displays a navigation header for authenticated users, incorporating responsive design to
 * adapt to different screen sizes. It utilizes Material-UI's AppBar and Toolbar components for layout and
 * styling. The header includes a common header component that is always displayed, and user account buttons
 * that change based on the screen size - showing a mobile-specific version on small screens and a web-specific
 * version on larger screens. The avatar URL is passed to the user account buttons component to display the
 * user's avatar image.
 * 
 * The use of Material-UI's useTheme and useMediaQuery hooks allows the component to responsively adjust its
 * layout and content. A useEffect hook is used to log the avatar URL on component mount, demonstrating how
 * side effects can be managed within functional components.
 * 
 * @param {AuthenticatedHeaderProps} props - Props containing the avatar URL for the authenticated user.
 * @returns {JSX.Element} - The AppBar component with conditional content based on screen size.
 */

const AuthenticatedHeader: React.FC<AuthenticatedHeaderProps>= ({avatarUrl}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    

    useEffect(()=>{
        console.log("avatar: ", avatarUrl)
    },[])

    return (
        <AppBar position="static" style={{ background: 'white' }} elevation={0}>
            <Toolbar>
                <CommonHeaderComponent />
                {isMobile ? <UserAccountButtons_Mobile /> : <UserAccountButtons_Web avatarUrl={avatarUrl}/>}
            </Toolbar>
        </AppBar>
    )
}

export default AuthenticatedHeader
