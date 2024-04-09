import { Notifications, People, School } from "@mui/icons-material"
import { Badge, Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useEffect, useState } from "react"
import { AdminCoursesView, AdminNotificationsView, AdminUsersView } from "./AdminComponents"
import { DrawerStyle } from "@/src/style/Components"
import { callAmplifyApi, fetchCourseStatusCounts } from "@/src/functions/Amplify"
import { ListPendingCourses } from "@/src/custom-amplify-graphql-queries/ListCourses"

const WebAdministrativeView = () => {
    const [activeView, setActiveView] = useState('Notifications')
    const [courses, setCourses] = useState([])
    const [numberOfPendingCourses, setNumberOfPendingCourses] = useState(0)

    const renderActiveView = () => {
        switch (activeView) {
            case 'Notifications':
                window.location.hash="editNotifications"
                return <AdminNotificationsView />
            case 'Users':
                window.location.hash="editUsers"
                return <AdminUsersView />
            case 'Course Management':
                window.location.hash="editCourses"
                return <AdminCoursesView />
            default:
                window.location.hash = ""
                return <div>Unknown View</div>
        }
    }

    useEffect(()=>{
            const callListCourses = async() => {
                const response:any = await fetchCourseStatusCounts()
                setNumberOfPendingCourses(response.pending)
            }
            callListCourses()
    },[])

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash
            switch(hash) {
                case "#editNotifications":
                    setActiveView('Notifications')
                    break
                case "#editUsers":
                    setActiveView('Users')
                    break
                case "#editCourses":
                    setActiveView('Course Management')
                    break
                default:
                    setActiveView('Notifications')
                    break
            }
        }
        handleHashChange()
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, []) 

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
    )
}

export default WebAdministrativeView