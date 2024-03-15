import { Notifications, People, School } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import { AdminNotificationsView, AdminUsersView } from "./AdminComponents";

const drawerWidth = 240

const WebAdministrativeView = () => {
    const [activeView, setActiveView] = useState('Notifications');

    const renderActiveView = () => {
        switch (activeView) {
            case 'Notifications':
                return <AdminNotificationsView />;
            case 'Users':
                return <AdminUsersView />;
            case 'Courses':
                return <div>Courses View</div>;
            default:
                return <div>Unknown View</div>;
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', top: '140px' }
                }}
            >
                <List>
                    {['Notifications', 'Users', 'Courses'].map((text, index) => (
                        <ListItemButton key={text} onClick={()=>setActiveView(text)}>
                            <ListItemIcon>
                                {index === 0 && <Notifications />}
                                {index === 1 && <People />}
                                {index === 2 && <School />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                {renderActiveView()}
            </Box>
        </Box>
    );
}

export default WebAdministrativeView