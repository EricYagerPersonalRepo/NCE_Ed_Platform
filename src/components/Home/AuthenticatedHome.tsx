import React from 'react'
import { useTheme, useMediaQuery } from '@mui/material'

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
            {isMobile ? <div>Authenticated Mobile</div> : <div>Authenticated Web</div>}
        </div>
    )
}

export default AuthenticatedHome
