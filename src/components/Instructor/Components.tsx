
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { Fragment, useEffect, useState } from 'react'
import { CourseSubject } from '@/src/API'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { amplifyApiClient } from '@/src/functions/AuthX'
import { createCourse } from '@/src/graphql/mutations'

const CreateNewCourseDialog = ( { userData }:any ) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [subject, setSubject] = useState<CourseSubject | ''>('')
    const [difficulty, setDifficulty] = useState('')
    const [open, setOpen] = useState(false)
    const [userDatum, setUserDatum] = useState({cognitoId:"",email:""})

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

        if (subject === '') {
            alert('Please select a subject')
            return
        }

        const courseData = {
            title,
            description,
            subject,
            difficulty,
            creator: userData.cognitoID,
        }

        try {
            const response = await amplifyApiClient.graphql({
                query: createCourse,
                variables: { input: courseData }
            })
            console.log('Course creation response:', response)
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

    return (
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

export default CreateNewCourseDialog