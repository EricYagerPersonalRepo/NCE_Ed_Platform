import { Notifications, People, School } from "@mui/icons-material";
import { Badge, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { AdminCoursesView, AdminNotificationsView, AdminUsersView } from "./AdminComponents";
import { DrawerStyle } from "@/src/style/Components";
import { callAmplifyApi } from "@/src/functions/Amplify";
import { customListCourses } from "@/src/custom-amplify-graphql-queries";
import { ListPendingCourses } from "@/src/custom-amplify-graphql-queries/ListCourses";

const WebAdministrativeView = () => {
    const [activeView, setActiveView] = useState('Notifications');
    const [courses, setCourses] = useState([])
    const [numberOfPendingCourses, setNumberOfPendingCourses] = useState(0)

    const renderActiveView = () => {
        switch (activeView) {
            case 'Notifications':
                return <AdminNotificationsView />;
            case 'Users':
                return <AdminUsersView />;
            case 'Course Management':
                return <AdminCoursesView />;
            default:
                return <div>Unknown View</div>;
        }
    }

    useEffect(()=>{
            const callListCourses = async() => {
                const response:any = await callAmplifyApi(ListPendingCourses, {})
                console.log("List Courses Response: ", response.listCourseApprovals.items.length)
                setCourses(response.listCourseApprovals.items)
                setNumberOfPendingCourses(response.listCourseApprovals.items.length)
            }
            callListCourses()
    },[])

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={DrawerStyle(240)}
            >
                <List>
                    {['Notifications', 'Users', 'Course Management'].map((text, index) => (
                        <ListItemButton key={text} onClick={()=>setActiveView(text)}>
                            <ListItemIcon>
                                {index === 0 && <Notifications />}
                                {index === 1 && <People />}
                                {index === 2 && (
                                    <Badge badgeContent={numberOfPendingCourses} color="secondary">
                                        <School />
                                    </Badge>
                                )}
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