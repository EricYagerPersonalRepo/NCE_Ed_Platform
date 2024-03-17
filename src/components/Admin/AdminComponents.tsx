import { useEffect, useState } from "react"
import { MobileAdmin, WebAdmin } from "."
import { NotificationType } from "@/src/API"
import { amplifyApiClient } from "@/src/functions/AuthX"
import { createBroadcastNotification, deleteBroadcastNotification, updateBroadcastNotification, updateNCEStudentProfile } from "@/src/graphql/mutations"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, Tab, Tabs, TextField, Typography } from "@mui/material"
import { listBroadcastNotifications, listNCEStudentProfiles } from "@/src/graphql/queries"
import { DataGrid, GridActionsCellItem, GridColDef, GridRowModes, GridRowModesModel, GridRowsProp } from "@mui/x-data-grid"
import { Delete, Edit } from "@mui/icons-material"
import { TabPanel } from "../Global/Tabs"
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth"
import { post } from "aws-amplify/api"

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

export const CreateNewNotificationView = () => {
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [type, setType] = useState<NotificationType>(NotificationType.MESSAGE)

    const handleCreateNotification = async (event:any) => {
        event.preventDefault()
    
        try {
            await amplifyApiClient.graphql({
                query: createBroadcastNotification, 
                variables: { input: 
                    {
                        title:title, 
                        targetStudent: "",
                        message:message, 
                        type:type 
                    }
                }
            })
            alert('Notification created successfully')
            setMessage('')
            setType(NotificationType.MESSAGE)
        } catch (error) {
            console.error('Error creating notification:', error)
            alert('Failed to create notification')
        }
    }

    return(
        <form onSubmit={handleCreateNotification}>
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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
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
    )
}

export const AdminNotificationsTableView = () => {
    const [rows, setRows] = useState<GridRowsProp>([])
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
    const [openDialog, setOpenDialog] = useState(false)
    const [editedRow, setEditedRow] = useState<any>({})


    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const { data } = await amplifyApiClient.graphql({
                    query: listBroadcastNotifications,
                    variables: {},
                })
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
                await amplifyApiClient.graphql({
                    query: updateBroadcastNotification,
                    variables: { input: { id: newRow.id, title:newRow.title, message:newRow.message } },
                })

                setRows((prevRows) => prevRows.map((row) => (row.id === editedRow.id ? editedRow : row)))

            } catch (error) {
                console.error("Error updating notification:", error)
                throw new Error('The row update failed, reverting changes')
            }
        }

        setOpenDialog(false)
        setEditedRow({})
    }

    const processRowUpdateError = (error:any) => {
        console.error("processRowUpdateError: ", error)
    }
    
    const confirmRowUpdate = (newRow:any) => {
        const originalRow = rows.find(row => row.id === newRow.id)
        setEditedRow({originalRow, newRow})
        setOpenDialog(true)
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
            const deleteNotification = await amplifyApiClient.graphql({
                query: deleteBroadcastNotification,
                variables: { input: { id: id } },
            })
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
                open={openDialog}
                onClose={() => setOpenDialog(false)}
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
                    <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                    <Button onClick={() => processRowUpdate(editedRow.newRow)} autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>

        </>
    )
}

export const AdminUsersView = () => {
    const [rows, setRows] = useState<GridRowsProp>([])
    const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
    const [openDialog, setOpenDialog] = useState(false)
    const [editedRow, setEditedRow] = useState<any>({})

    useEffect(() => {
        const fetchProfilesAndGroups = async () => {
            try {
                const profilesData = await amplifyApiClient.graphql({
                    query: listNCEStudentProfiles,
                    variables: {},
                })
    
                if (profilesData.data.listNCEStudentProfiles.items) {
                    let session = await fetchAuthSession()
                    console.log("SESSION: ", session)
                    const profilesWithGroups = await Promise.all(
                        profilesData.data.listNCEStudentProfiles.items.map(async (profile) => {
                            console.log(profile)
                            let apiName = 'AdminQueries'
                            let path = '/listGroupsForUser'
                            
                            if(session.tokens){
                                let token:any = session.tokens.accessToken.toString()
                                let options = {
                                    body: {
                                        "username" : profile.id,
                                    }, 
                                    headers: {
                                        'Content-Type' : 'application/json',
                                        Authorization: `${token}`
                                    } 
                                }
                                console.log("OPTIONS: ", options)
                               try{
                                    const groupsResponse:any = await post({apiName,path,options})
                                    console.log(groupsResponse)
                                    if (groupsResponse && groupsResponse.groups) {
                                        return { ...profile, groups: groupsResponse.groups};
                                    }else{
                                        return {...profile, groups: []}
                                    }
                                }catch(error) {
                                    console.error(error)
                                }
                            }
                        })
                    )
                    const filteredProfiles = profilesWithGroups.filter(item => item !== undefined)
                    console.log(filteredProfiles)
                    //setRows(filteredProfiles.map(item => ({ ...item, id: item.id })))
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
                    query: updateNCEStudentProfile,
                    variables: { input: { id: newRow.id, name: newRow.name,  email:newRow.email, birthdate: newRow.birthdate, status:newRow.status } },
                })
                setRows((prevRows) => prevRows.map((row) => (row.id === editedRow.id ? editedRow : row)))

            } catch (error) {
                console.error("Error updating student profle:", error)
                throw new Error('The row update failed, reverting changes')
            }
        }

        setOpenDialog(false)
        setEditedRow({})
    }

    const processRowUpdateError = (error:any) => {
        console.error("processRowUpdateError: ", error)
    }

    const confirmRowUpdate = (newRow:any) => {
        const originalRow = rows.find(row => row.id === newRow.id)
        setEditedRow({ originalRow, newRow })
        setOpenDialog(true)
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex: 1, editable: false },
        { field: 'name', headerName: 'Name', flex: 1, editable: true },
        { field: 'email', headerName: 'Email', flex: 1, editable: true},
        { field: 'birthdate', headerName: 'Birthdate', flex: 1, editable: true},
        { field: 'status', headerName: 'Status', flex: 1, editable: true },
        { field: 'groups', headerName: 'Groups', flex: 1, editable: false },
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
            open={openDialog}
            onClose={() => setOpenDialog(false)}
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
                <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
                <Button onClick={() => processRowUpdate(editedRow.newRow)} autoFocus>Confirm</Button>
            </DialogActions>
        </Dialog>
    </>
    )
}
