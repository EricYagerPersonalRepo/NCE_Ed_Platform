
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Fragment, useEffect, useState } from 'react'
import { CourseApprovalStatus, CourseSubject, CreateCourseApprovalInput, CreateCourseApprovalMutation, CreateCourseMutation } from '@/src/API'
import { ButtonBase, Chip, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { amplifyApiClient } from '@/src/functions/AuthX'
import { createCourse, createCourseApproval } from '@/src/graphql/mutations'
import { Drawer, List, ListItem, ListItemText, Collapse, Typography, Grid } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { callAmplifyApi } from '@/src/functions/Amplify'
import { customListCourses } from '@/src/custom-amplify-graphql-queries'

export const InstructorDashboard = ({ userData }: any) => {
    const [open, setOpen] = useState(false)
    const [userDatum, setUserDatum] = useState({cognitoId:"",email:""})
    const [userCourses, setUserCourses] = useState([])
    const [currentCourseView, setCurrentCourseView] = useState("")
   
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

    return (

        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                        },
                    }}
                >
                    <List component="nav" aria-labelledby="nested-list-subheader">
                        <ListItem>
                            <NewCourseDialog userData={userDatum} />
                        </ListItem>
                        <ListItem button onClick={handleClick}>
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
                                                    <Fragment>
                                                        <Typography component="span" variant="body2" sx={{ fontWeight: 'bold' }}>
                                                            {course.title}
                                                        </Typography>
                                                        {}
                                                        {' - '}
                                                        <StatusBadge status={course.approval.items[0].status} />
                                                    </Fragment>
                                                } 
                                            />
                                        </ListItem>
                                    </ButtonBase>
                                ))}
                            </List>
                        </Collapse>
                        {/* Add more items here */}
                    </List>
                </Drawer>
            </Grid>
            <Grid item xs={10}>
                <main style={{ flexGrow: 1, padding: 3 }}>
                    <Typography variant="h6">Dashboard - {currentCourseView}</Typography>
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
            </Grid>
        </Grid>
    )
}

export const NewCourseDialog = ({userData}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subject, setSubject] = useState<CourseSubject | ''>('')
    const [difficulty, setDifficulty] = useState('')
    const [open, setOpen] = useState(false)
    const [userDatum, setUserDatum] = useState({cognitoId:"",email:""})
    const [userCourses, setUserCourses] = useState([{
        __typename: "Course",
        createdAt: "",
        descrption: "", 
        difficulty: "",
        id: "",
        subject: "",
        title: "",
        updatedAt: "",
        modules: {}
    }])

    useEffect(()=>{
        if(userData) {
            console.log(userData)
            setUserDatum(userData)
        }
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
                console.log("NEW COURSE CREATED: ", createNewCourse)
                const createNewCourseApprovalVariables = {
                    input: {
                        courseApprovalId: createNewCourse.createCourse.id,
                        status: CourseApprovalStatus.PENDING,
                        approvingAdmin: " ",
                    }
                }
                const createNewCourseApproval:CreateCourseApprovalMutation = await callAmplifyApi(createCourseApproval, createNewCourseApprovalVariables)
                if(createNewCourseApproval.createCourseApproval.id){  
                    console.log("NEW APPROVAL CREATED: ", createNewCourseApproval)
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
            <Button variant="outlined" onClick={handleClickOpen}>
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


