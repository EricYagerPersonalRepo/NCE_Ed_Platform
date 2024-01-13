import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { CommonHeaderComponent } from './HeaderComponents'

const UnauthenticatedHeader: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <CommonHeaderComponent />
                {/* Additional components or elements for unauthenticated users */}
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default UnauthenticatedHeader
