import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { HomeSplash_Mobile_Unauthenticated, HomeSplash_Web_Unauthenticated } from './HomeComponents'
import { AuthenticatedHomeProps } from '@/src/types/SignUpTypes'

/**
 * Component for displaying the home when a user is not authenticated.
 * 
 * 
 */
const UnauthenticatedHome: React.FC<AuthenticatedHomeProps> = ({ isMobile }) => {
    const theme = useTheme()

    return (
        <div>
            {isMobile ? <HomeSplash_Mobile_Unauthenticated /> : <HomeSplash_Web_Unauthenticated />}
        </div>
    )
}

export default UnauthenticatedHome