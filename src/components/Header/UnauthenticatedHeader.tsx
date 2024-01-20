import React from 'react'
import { AppBar, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import { CommonHeaderComponent, HeaderAuthenticationButtons_Web, HeaderAuthenticationButtons_Mobile } from './HeaderComponents'

/**
 * Component for displaying the header when a user is not authenticated.
 * 
 * This component displays the common header content along with buttons for 
 * authentication actions such as 'Sign Up' and 'Login'. It adapts to screen 
 * size changes using a media query, switching between mobile and web layouts.
 * 
 * The component utilizes Material-UI's AppBar and Toolbar for its layout. 
 * The 'isMobile' state determines whether to show mobile or web versions 
 * of the authentication buttons, enhancing the responsiveness of the header.
 */
const UnauthenticatedHeader: React.FC = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <AppBar position="static" style={{ background: 'white' }}>
            <Toolbar>
                <CommonHeaderComponent />
                {isMobile ? <HeaderAuthenticationButtons_Mobile /> : <HeaderAuthenticationButtons_Web />}
            </Toolbar>
        </AppBar>
    )
}

export default UnauthenticatedHeader