import React from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { HomeSplash_Mobile_Authenticated, HomeSplash_Web_Authenticated } from './HomeComponents'

/**
 * Component for displaying the homepage when a user is authenticated.
 * 
 * 
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