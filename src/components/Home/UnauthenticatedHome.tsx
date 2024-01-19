import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

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
            {isMobile ? <div>Unauthenticated Monbile</div> : <div>Unauthenticated Web</div>}
        </div>
    )
}

export default UnauthenticatedHome