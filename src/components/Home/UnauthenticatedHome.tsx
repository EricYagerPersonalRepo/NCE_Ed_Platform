import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { HomeSplash_Mobile_Unauthenticated, HomeSplash_Web_Unauthenticated } from './HomeComponents'

/**
 * Component for displaying the home when a user is not authenticated.
 * 
 * 
 */
const UnauthenticatedHome: React.FC = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            {isMobile ? <HomeSplash_Mobile_Unauthenticated /> : <HomeSplash_Web_Unauthenticated />}
        </div>
    )
}

export default UnauthenticatedHome