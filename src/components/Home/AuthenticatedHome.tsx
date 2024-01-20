import React from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { HomeSplash_Mobile_Authenticated, HomeSplash_Web_Authenticated } from './HomeComponents'

/**
 * AuthenticatedHome component - Manages the display of the homepage for authenticated users.
 *
 * This component is responsible for rendering the homepage content for users who are logged in. 
 * It leverages Material-UI's useTheme and useMediaQuery hooks to determine the current screen size 
 * and accordingly switches between mobile and web versions of the homepage splash.
 * 
 * - If the screen size is mobile (smaller than the 'sm' breakpoint), it renders the 
 *   'HomeSplash_Mobile_Authenticated' component.
 * - If the screen size is larger (web view), it renders the 'HomeSplash_Web_Authenticated' component.
 * 
 * This dynamic rendering ensures that the homepage is responsive and provides an optimal user 
 * experience across different device sizes.
 *
 * @returns {JSX.Element} - The rendered homepage content appropriate for the screen size and 
 *                          authentication status of the user.
 */
const AuthenticatedHome: React.FC = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            {isMobile ? <HomeSplash_Mobile_Authenticated /> : <HomeSplash_Web_Authenticated/>}
        </div>
    )
}

export default AuthenticatedHome