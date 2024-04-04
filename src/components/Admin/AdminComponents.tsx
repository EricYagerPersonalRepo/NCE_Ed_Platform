import { useEffect, useState } from "react"
import { MobileAdmin, WebAdmin } from "."
import { NotificationType } from "@/src/API"
import { amplifyApiClient } from "@/src/functions/AuthX"
import { createBroadcastNotification, deleteBroadcastNotification, updateBroadcastNotification, updateStudentProfile } from "@/src/graphql/mutations"
import { Alert, AlertColor, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Radio, RadioGroup, Select, Tab, Tabs, TextField, Typography } from "@mui/material"
import { listBroadcastNotifications, listStudentProfiles } from "@/src/graphql/queries"
import { DataGrid, GridActionsCellItem, GridColDef, GridRowModes, GridRowModesModel, GridRowsProp } from "@mui/x-data-grid"
import { Add, Check, Delete, Edit } from "@mui/icons-material"
import { TabPanel } from "../Global/Tabs"
import { addToAdminGroup, callAmplifyApi } from "@/src/functions/Amplify"
import { customListCourses } from "@/src/custom-amplify-graphql-queries"

export const RestrictedView = () => {
    return(
        <div>This site is restricted to administrative users only</div>
    )
}

export const AdminHome = ({isMobile}:any) => {
    return(isMobile ? <MobileAdmin /> : <WebAdmin />)
}

export const AdminNotificationsView = () => {
    const [value, setValue] = useState(0)


    function a11yProps(index:number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    useEffect(() => {
        switch (window.location.hash) {
            case "#createnotifications":
                setValue(0)
                break
            case "#editnotifications":
                setValue(1)
                break
            default:
                setValue(0)
                break
        }
    }, [])

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue)
        switch (newValue) {
            case 0:
                window.location.hash = "createnotifications"
                break
            case 1:
                window.location.hash = "editnotifications"
                break
            // Add more cases as needed for additional tabs
            default:
                window.location.hash = "" // Clear the hash if it's not one of the known values
                break
        }
    }

    return(
        <Box sx={{ width: '100%' }}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Create Notification" {...a11yProps(0)} />
                <Tab label="Manage Notifications" {...a11yProps(1)} />
            </Tabs>
            <TabPanel key={1} value={value} index={0}>
                <CreateNewNotificationView />
            </TabPanel>
            <TabPanel key={2} value={value} index={1}>
                <AdminNotificationsTableView />
            </TabPanel>
        </Box>
    )
}

export const AdminCoursesView = () => {
    const [rows, setRows] = useState<GridRowsProp>([])
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
    const [userUpdateDialogOpen, setUserUpdateDialogOpen] = useState(false)
    const [editedRow, setEditedRow] = useState<any>({})


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const data:any = await callAmplifyApi(customListCourses, {})
                if (data.listCourses.items) {
                    setRows(data.listCourses.items.map(item => ({...item, id: item.id})))
                }
            } catch (error) {
                console.error('Error fetching notifications:', error)
            }
        }
        fetchCourses()
    }, [])
    
    const handleRowEditStop = (event:any, reason:any) => {
        if (reason === 'rowFocusOut') {
            event.defaultMuiPrevented = true
        }
    }

    const processRowUpdate = async(newRow:any) => {
        if(editedRow) {
            try {
                const variables = { input: { id: newRow.id, title:newRow.title, message:newRow.message } }
                await callAmplifyApi(updateBroadcastNotification, variables)
                setRows((prevRows) => prevRows.map((row) => (row.id === editedRow.id ? editedRow : row)))
            } catch (error) {
                console.error("Error updating notification:", error)
                throw new Error('The row update failed, reverting changes')
            }
        }

        setUserUpdateDialogOpen(false)
        setEditedRow({})
    }

    const processRowUpdateError = (error:any) => {
        console.error("processRowUpdateError: ", error)
    }
    
    const confirmRowUpdate = (newRow:any) => {
        const originalRow = rows.find(row => row.id === newRow.id)
        setEditedRow({originalRow, newRow})
        setUserUpdateDialogOpen(true)
    }

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', flex: 1, editable: true },
        { field: 'createdAt', headerName: 'Date Created', flex: 5, editable: true },



        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<Edit />}
                    label="Edit"
                    onClick={() => setRowModesModel({...rowModesModel, [params.id]: { mode: GridRowModes.Edit }})}
                />,
                <GridActionsCellItem
                    icon={<Delete />}
                    label="Delete"
                    onClick={() => handleDelete(params.id)}
                />,
            ],
        },
    ]

    const handleDelete = async(id:any) => {
        try{
            const variables= { input: { id: id } }
            const deleteNotification = await callAmplifyApi(updateBroadcastNotification, variables)
            deleteNotification && setRows(rows.filter(row => row.id !== id))
        }catch(error){
            console.error(error)
        }
    }

    return (
        <>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={setRowModesModel}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={confirmRowUpdate}
                    onProcessRowUpdateError={(error)=>processRowUpdateError(error)}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions = {[5, 10, 25]}
                />
            </Box>
            <Dialog
                open={userUpdateDialogOpen}
                onClose={() => setUserUpdateDialogOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Changes"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to save these changes?
                        <br/>
                        <strong>Changes:</strong>
                        {editedRow.newRow && editedRow.originalRow && Object.keys(editedRow.newRow).map((key) => {
                            if (editedRow.newRow[key] !== editedRow.originalRow[key]) {
                                return (
                                    <div key={key}>
                                        {key}: {editedRow.originalRow[key]} <strong>-</strong> {editedRow.newRow[key]}
                                    </div>
                                )
                            }
                            return null
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setUserUpdateDialogOpen(false)}>Cancel</Button>
                    <Button onClick={() => processRowUpdate(editedRow.newRow)} autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export const CreateNewNotificationView = () => {
    const [notificationMessage, setNotificationMessage] = useState('')
    const [title, setTitle] = useState('')
    const [type, setType] = useState<NotificationType>(NotificationType.MESSAGE)
    const [alertOpen, setAlertOpen] = useState(false)
    const [alertMessage, setAlertMessage] = useState("Notification Created Successfully!")
    const [alertSeverityLevel, setAlertSeverityLevel] = useState<AlertColor>("success")

    const handleCreateNotification = async (event:any) => {
        event.preventDefault()
    
        try {
 
            const variablesDefinition =  { 
                input: {
                    title:title, 
                    targetStudent: "",
                    message: notificationMessage, 
                    type:type 
                }
            }

            const amplifyApiCall = await callAmplifyApi(createBroadcastNotification, variablesDefinition)

            if(amplifyApiCall!==null){
                setAlertOpen(true);
                setTimeout(() => {
                    setAlertOpen(false);
                }, 2000)
                setNotificationMessage('')
                setType(NotificationType.MESSAGE)
            }
        } catch (error) {
            console.error('Error creating notification:', error)
            alert('Failed to create notification')
        }
    }

    const AlertComponent = () => {
        return(
            <Alert icon={<Check fontSize="inherit" />} severity={alertSeverityLevel}>{alertMessage}</Alert>
        )
    }

    return(
        <div>
            {alertOpen && <AlertComponent />}
            <form onSubmit={ handleCreateNotification }>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            value={notificationMessage}
                            onChange={(e) => setNotificationMessage(e.target.value)}
                            required
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Type</InputLabel>
                            <Select
                                value={type}
                                onChange={(e) => setType(e.target.value as NotificationType)}
                                label="Type"
                                required
                            >
                                {/* Map enum values to menu items */}
                                {Object.values(NotificationType).map((typeValue) => (
                                    <MenuItem key={typeValue} value={typeValue}>
                                        {typeValue}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Create Notification
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export const AdminNotificationsTableView = () => {
    const [rows, setRows] = useState<GridRowsProp>([])
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
    const [userUpdateDialogOpen, setUserUpdateDialogOpen] = useState(false)
    const [editedRow, setEditedRow] = useState<any>({})


    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const data:any = await callAmplifyApi(listBroadcastNotifications, {})
                if (data.listBroadcastNotifications.items) {
                    setRows(data.listBroadcastNotifications.items.map(item => ({...item, id: item.id})))
                }
            } catch (error) {
                console.error('Error fetching notifications:', error)
            }
        }
        fetchNotifications()
    }, [])
    
    const handleRowEditStop = (event:any, reason:any) => {
        if (reason === 'rowFocusOut') {
            event.defaultMuiPrevented = true
        }
    }

    const processRowUpdate = async(newRow:any) => {
        if(editedRow) {
            try {
                const variables = { input: { id: newRow.id, title:newRow.title, message:newRow.message } }
                await callAmplifyApi(updateBroadcastNotification, variables)
                setRows((prevRows) => prevRows.map((row) => (row.id === editedRow.id ? editedRow : row)))
            } catch (error) {
                console.error("Error updating notification:", error)
                throw new Error('The row update failed, reverting changes')
            }
        }

        setUserUpdateDialogOpen(false)
        setEditedRow({})
    }

    const processRowUpdateError = (error:any) => {
        console.error("processRowUpdateError: ", error)
    }
    
    const confirmRowUpdate = (newRow:any) => {
        const originalRow = rows.find(row => row.id === newRow.id)
        setEditedRow({originalRow, newRow})
        setUserUpdateDialogOpen(true)
    }

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', flex: 1, editable: true },
        { field: 'message', headerName: 'Message', flex: 5, editable: true },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<Edit />}
                    label="Edit"
                    onClick={() => setRowModesModel({...rowModesModel, [params.id]: { mode: GridRowModes.Edit }})}
                />,
                <GridActionsCellItem
                    icon={<Delete />}
                    label="Delete"
                    onClick={() => handleDelete(params.id)}
                />,
            ],
        },
    ]

    const handleDelete = async(id:any) => {
        try{
            const variables= { input: { id: id } }
            const deleteNotification = await callAmplifyApi(updateBroadcastNotification, variables)
            deleteNotification && setRows(rows.filter(row => row.id !== id))
        }catch(error){
            console.error(error)
        }
    }

    return (
        <>
            <Box sx={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    rowModesModel={rowModesModel}
                    onRowModesModelChange={setRowModesModel}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={confirmRowUpdate}
                    onProcessRowUpdateError={(error)=>processRowUpdateError(error)}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions = {[5, 10, 25]}
                />
            </Box>
            <Dialog
                open={userUpdateDialogOpen}
                onClose={() => setUserUpdateDialogOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Changes"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to save these changes?
                        <br/>
                        <strong>Changes:</strong>
                        {editedRow.newRow && editedRow.originalRow && Object.keys(editedRow.newRow).map((key) => {
                            if (editedRow.newRow[key] !== editedRow.originalRow[key]) {
                                return (
                                    <div key={key}>
                                        {key}: {editedRow.originalRow[key]} <strong>-</strong> {editedRow.newRow[key]}
                                    </div>
                                )
                            }
                            return null
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setUserUpdateDialogOpen(false)}>Cancel</Button>
                    <Button onClick={() => processRowUpdate(editedRow.newRow)} autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export const AdminUsersView = () => {
    const [rows, setRows] = useState<GridRowsProp>([])
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
    const [userUpdateDialogOpen, setUserUpdateDialogOpen] = useState(false)
    const [editedRow, setEditedRow] = useState<any>({})
    const [userGroupUpdateDialogOpen, setUserGroupUpdateDialogOpen] = useState(false)
    const [targetUser, setTargetUser] = useState({targetUser: "", groups:""})
    const [newGroupName, setNewGroupName] = useState("")

    useEffect(() => {
        async function fetchUserGroups(username) {
            const response = await fetch('/api/getUserGroups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username }),
            })
            const data = await response.json()
            return(data)
        }

        const fetchProfilesAndGroups = async () => {
            try {
                const profilesData = await amplifyApiClient.graphql({
                    query: listStudentProfiles,
                    variables: {},
                })
    
                if (profilesData.data.listStudentProfiles.items) {
                    const profilesWithGroups = await Promise.all(
                        profilesData.data.listStudentProfiles.items.map(async (profile) => {
                            let groupsForUser = await fetchUserGroups(profile.id)
                            console.log("GROUPS FOR USER: ", groupsForUser.Data)
                            try{
                                if(!groupsForUser.Data.Error) {
                                    return { ...profile, groups: groupsForUser.Data};
                                }else{
                                    return {...profile, groups: []}
                                }
                            }catch(error) {
                                console.error(error)
                            }
                        })
                    )
                    const validProfilesWithGroups = profilesWithGroups.filter(Boolean);
                    setRows(validProfilesWithGroups.map(profile => ({
                        id: profile.id,
                        name: profile.name,
                        email: profile.email,
                        status: profile.status,
                        groups: profile.groups.join(', ')
                    })));
                                    }
                
            } catch (error) {
                console.error('Error fetching profiles and groups:', error)
            }
        }
    
        fetchProfilesAndGroups()

    }, [])
    

    const handleRowEditStop = (event:any, reason:any) => {
        if (reason === 'rowFocusOut') {
            event.defaultMuiPrevented = true
        }
    }

    const processRowUpdate = async (newRow:any) => {

        if(editedRow) {
            try {
                await amplifyApiClient.graphql({
                    query: updateStudentProfile,
                    variables: { input: { id: newRow.id, name: newRow.name,  email:newRow.email, status:newRow.status } },
                })
                setRows((prevRows) => prevRows.map((row) => (row.id === editedRow.id ? editedRow : row)))

            } catch (error) {
                console.error("Error updating student profle:", error)
                throw new Error('The row update failed, reverting changes')
            }
        }

        setUserUpdateDialogOpen(false)
        setEditedRow({})
    }

    const processRowUpdateError = (error:any) => {
        console.error("processRowUpdateError: ", error)
    }

    const confirmRowUpdate = (newRow:any) => {
        const originalRow = rows.find(row => row.id === newRow.id)
        setEditedRow({ originalRow, newRow })
        setUserUpdateDialogOpen(true)
    }

    const openHandleGroupUpdateDialog = async(userID:string, groups:string) => {
        console.log("GROUPS FROM CLICK: ", groups)
        setTargetUser({groups: groups, targetUser: userID})
        setUserGroupUpdateDialogOpen(true)
    }
    const handleAddUserToAdminGroupSubmit = async() => {
        console.log("Calling API with: ", targetUser)
        async function addUserToAdminGroupCall(username, group) {
            try{
                const response = await fetch('/api/addUserToAdminGroup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        username: username,
                        group: group
                    }),
                })
                const data = await response.json()
                console.log("DATA: ", data.Data.$metadata.httpStatusCode)

                return(data)
            }
            catch(error) {
                return({error: error})
            }
        }
        if(targetUser.targetUser!==""){
            const apiCall = await addUserToAdminGroupCall(targetUser.targetUser, newGroupName)
            if(apiCall.Data.$metadata.httpStatusCode===200){
                setUserGroupUpdateDialogOpen(false)
            }
        } 
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1, editable: true },
        { field: 'email', headerName: 'Email', flex: 1, editable: true},
        { field: 'status', headerName: 'Status', flex: 1, editable: true },
        { 
            field: 'groups', 
            headerName: 'Groups', 
            flex: 1, 
            editable: false,
            renderCell: (params) => (
                <div>
                    {params.value}
                    <IconButton
                        size="small"
                        aria-label="add"
                        onClick={() => openHandleGroupUpdateDialog(String(params.id), params.value)}
                    >
                        <Add fontSize="small" />
                    </IconButton>
                </div>
            ),
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<Edit />}
                    label="Edit"
                    onClick={() => setRowModesModel({...rowModesModel, [params.id]: { mode: GridRowModes.Edit }})}
                />,
            ],
        },
    ]


    return (
        <>
        <Box sx={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                editMode="row"
                rowModesModel={rowModesModel}
                onRowModesModelChange={setRowModesModel}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={confirmRowUpdate}
                onProcessRowUpdateError={(error)=>processRowUpdateError(error)}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions = {[5, 10, 25]}
            />
        </Box>
        <Dialog
            open={userUpdateDialogOpen}
            onClose={() => setUserUpdateDialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Confirm Changes"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to save these changes?
                    <br/>
                    <strong>Changes:</strong>
                    {editedRow.newRow && editedRow.originalRow && Object.keys(editedRow.newRow).map((key) => {
                        if (editedRow.newRow[key] !== editedRow.originalRow[key]) {
                            return (
                                <div key={key}>
                                    {key}: {editedRow.originalRow[key]} <strong>-</strong> {editedRow.newRow[key]}
                                    email: {editedRow.email}
                                </div>
                            )
                        }
                        return null
                    })}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setUserUpdateDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => processRowUpdate(editedRow.newRow)} autoFocus>Confirm</Button>
            </DialogActions>
        </Dialog>

        <Dialog
            open={userGroupUpdateDialogOpen}
            onClose={() => setUserGroupUpdateDialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Confirm Changes"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Group Assignment
                </DialogContentText>
                <RadioGroup
                    aria-label="user-group"
                    defaultValue=""
                    name="user-group-radio-buttons-group"
                    onChange={(event) => setNewGroupName(event.target.value)}
                >
                    {["Students", "Instructors", "Admins"].map((group) => (
                        <FormControlLabel
                            key={group}
                            value={group}
                            control={<Radio />}
                            label={group}
                            disabled={targetUser.groups.includes(group)}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setUserGroupUpdateDialogOpen(false)}>Cancel</Button>
                <Button onClick={() => handleAddUserToAdminGroupSubmit()} autoFocus>Confirm</Button>
            </DialogActions>
        </Dialog>
    </>
    )
}


