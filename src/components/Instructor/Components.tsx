
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Fragment, useEffect, useState } from 'react'
import { CourseApprovalStatus, CourseSubject, CreateCourseApprovalInput, CreateCourseApprovalMutation, CreateCourseMutation } from '@/src/API'
import { Box, ButtonBase, Chip, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { createCourse, createCourseApproval } from '@/src/graphql/mutations'
import { Drawer, List, ListItem, ListItemText, Collapse, Typography, Grid } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { callAmplifyApi, fetchCoursesForDataGrid } from '@/src/functions/Amplify'
import { customListCourses } from '@/src/custom-amplify-graphql-queries'
import { DrawerStyle } from '@/src/style/Components'

export const InstructorDashboard = ({ userData }: any) => {
    const [currentCourseView, setCurrentCourseView] = useState("")
    const [userDatum, setUserDatum] = useState({cognitoId:"",email:""})
    const [userCourses, setUserCourses] = useState([])
    const [currentCourseObject, setCurrentCourseObject ] = useState({
        id: "",
        approval: {},
        createdAt: "",
        creator: "",
        description: "",
        difficulty: "",
        modules: {},
        subject: "",
        title: "",
        updatedAt: "",
    })

    const getCurrentCourse = () => {
        return userCourses.find(course => course.id === currentCourseView);
    }
   
    useEffect(()=>{
        if(userData) {
            console.log(userData)
            setUserDatum(userData)
            const callListCourses = async() => {
                const response:any = await callAmplifyApi(customListCourses, {})
                console.log("List Courses Response: ", response)
                setUserCourses(response.listCourses.items)
            }
            callListCourses()
        }
    },[userData])

    useEffect(()=>{
        const currentCourse = getCurrentCourse()
        currentCourse!==undefined && setCurrentCourseObject(currentCourse)
    },[ currentCourseView ])

    return (
        <Grid container spacing={1}>
            <Grid item xs={2.5}>
                <InstructorSideDrawer userData={userDatum} setCurrentCourseView={setCurrentCourseView} />
            </Grid>
            <Grid item xs={9.5}>
                <CourseDashboard CurrentCourse={currentCourseObject} />
            </Grid>
        </Grid>
    )
}

export const InstructorSideDrawer = ({userData, setCurrentCourseView}:any) => {
    const [open, setOpen] = useState(true)
    const [userDatum, setUserDatum] = useState({cognitoId:"",email:""})
    const [userCourses, setUserCourses] = useState([])

    const handleClick = () => {
        setOpen(!open)
    }

    function StatusBadge({ status }) {
        const getStatusColor = () => {
            switch (status) {
                case 'PENDING':
                    return 'default';
                case 'APPROVED':
                    return 'success';
                case 'DISAPPROVED':
                    return 'error';
                default:
                    return 'default';
            }
        };
    
        return <Chip label={status} color={getStatusColor()} />;
    }

    useEffect(()=>{
        if(userData) {
            console.log(userData)
            setUserDatum(userData)
            const callListCourses = async() => {
                const response:any = await fetchCoursesForDataGrid()//callAmplifyApi(customListCourses, {})
                console.log("RESPONSE IN INSTRUCTOR VIEW: ", response)
                setUserCourses(response)
            }
            callListCourses()
        }
    },[userData])

    return(
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" sx={DrawerStyle(340)}>
                <List component="nav" aria-labelledby="nested-list-subheader">
                    <ListItem>
                        <NewCourseDialog userData={userDatum} />
                    </ListItem>
                    <ListItem onClick={handleClick}>
                        <ListItemText primary="Course Management" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {userCourses.map(course => (
                                <ButtonBase key={course.id} component="div" style={{ width: '100%'}} onClick={()=>setCurrentCourseView(course.id)}>
                                    <ListItem sx={{ pl: 4 }} key={course.id}>
                                        <ListItemText 
                                            primary={
                                                <Grid container spacing={2} alignItems="center">
                                                    <Grid item xs={6}>
                                                        <Typography component="span" variant="body2" sx={{ fontWeight: 'bold' }}>
                                                            {course.title}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <StatusBadge status={course.approval} />
                                                    </Grid>
                                                </Grid>
                                            } 
                                        />
                                    </ListItem>
                                                                    </ButtonBase>
                            ))}
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </Box>
    )
}

export const CourseDashboard = ({CurrentCourse}) => {
    const [currentCourseObject, setCurrentCourseObject ] = useState({
        id: "",
        approval: {},
        createdAt: "",
        creator: "",
        description: "",
        difficulty: "",
        modules: {},
        subject: "",
        title: "",
        updatedAt: "",
    })

    useEffect(()=>{
        if(CurrentCourse) {
            setCurrentCourseObject(CurrentCourse)
        }
    },[CurrentCourse])

    return(
        <main style={{ flexGrow: 1, padding: 3 }}>
            <Typography variant="h6">Dashboard - { currentCourseObject.title }</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">Main Page Header</Typography>
                </Grid>
                <Grid item xs={4}>
                    {/* Placeholder for Graph */}
                    <Typography>Graph 1</Typography>
                </Grid>
                <Grid item xs={4}>
                    {/* Placeholder for Graph */}
                    <Typography>Graph 2</Typography>
                </Grid>
                <Grid item xs={4}>
                    {/* Placeholder for Graph */}
                    <Typography>Graph 3</Typography>
                </Grid>
                <Grid item xs={3}>
                    {/* Placeholder for Course Metadata */}
                    <Typography>Course 1</Typography>
                </Grid>
                <Grid item xs={3}>
                    {/* Placeholder for Course Metadata */}
                    <Typography>Course 2</Typography>
                </Grid>
                <Grid item xs={3}>
                    {/* Placeholder for Course Metadata */}
                    <Typography>Course 3</Typography>
                </Grid>
                <Grid item xs={3}>
                    {/* Placeholder for Course Metadata */}
                    <Typography>Course 4</Typography>
                </Grid>
            </Grid>
        </main>
    )
}

export const NewCourseDialog = ({userData}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subject, setSubject] = useState<CourseSubject | ''>('')
    const [difficulty, setDifficulty] = useState('')
    const [open, setOpen] = useState(false)
    const [userDatum, setUserDatum] = useState({cognitoId:"",email:""})

    useEffect(()=>{
        if(userData) { setUserDatum(userData) }
    },[userData])

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const courseData = {title, description, subject, difficulty, creator: userData.cognitoID}

        try {
            const variables = {input: courseData}
            const createNewCourse:CreateCourseMutation = await callAmplifyApi(createCourse, variables)

            if(createNewCourse.createCourse.id){
                const createNewCourseApprovalVariables = {
                    input: {
                        courseApprovalId: createNewCourse.createCourse.id,
                        status: CourseApprovalStatus.PENDING,
                        approvingAdmin: " ",
                    }
                }
                
                const createNewCourseApproval:CreateCourseApprovalMutation = await callAmplifyApi(createCourseApproval, createNewCourseApprovalVariables)
                
                if(createNewCourseApproval.createCourseApproval.id){  
                    handleClose()
                }
            }

        } catch (error) {
            console.error('Error creating course:', error)
        }
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Fragment>
            <Button variant="contained" onClick={handleClickOpen} color="primary" sx={{color:"white", bgcolor:"primary", width:"100%"}}>
                Create New Course
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                PaperProps={{ style: { width: '60%', maxWidth: 'none' } }} 
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Create New Course"}
                </DialogTitle>
                <DialogContent>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width:"75%" }}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                        <TextField
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <FormControl variant="outlined" required>
                            <InputLabel>Subject</InputLabel>
                            <Select
                                value={subject}
                                onChange={(e) => setSubject(e.target.value as CourseSubject)}
                                label="Subject"
                                required
                            >
                                {Object.keys(CourseSubject).map((key) => (
                                    <MenuItem key={key} value={CourseSubject[key]}>
                                        {CourseSubject[key]}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            label="Difficulty"
                            variant="outlined"
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        />
                        <TextField
                            label="Creator"
                            variant="outlined"
                            value={userDatum.email}
                            disabled
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button type="submit" variant="contained" color="primary" onClick={(event)=>handleSubmit(event)}>
                        Create Course
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}


