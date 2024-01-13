import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { CommonHeaderComponent } from './HeaderComponents'
import { signUserOut } from '@/src/functions/AuthFunctions'

const AuthenticatedHeader: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <CommonHeaderComponent />
                <Button color="inherit" onClick={signUserOut}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default AuthenticatedHeader
