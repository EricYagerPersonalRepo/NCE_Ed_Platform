import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, Container, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton, Tabs, Tab, Box, FormHelperText, CircularProgress, Modal } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { ageCaluclatedFromInputBirthday } from '@/src/functions/SignUpFunctions'
import { ErrorOutline } from '@mui/icons-material'
import * as mutations from '../src/API'
import { generateClient } from 'aws-amplify/api'
import { signUp } from 'aws-amplify/auth'
import TwoFactorAuthForm from '@/src/components/SignUpComponents'

const client = generateClient()
interface FormErrors {
    birthday?: string
    name?: string
    streetAddress?: string
    city?: string
    zipCode?: string
    email?: string
    phone?: string
    password?: string
    confirmPassword?: string
    signUp?: string
  }

  interface TabItemProps {
    text: string
    waiting: boolean
    complete: boolean
}

type SignUpParameters = {
    username: string
    password: string
    email: string
    address: string
  }

  type signUpParams = {
    username: string       // User's username for sign up
    password: string       // Password for the account
    email: string          // Email address of the user
    address: string        // Address of the user
    name: string           // Full name of the user (for the student profile)
    birthdate: string      // Birthdate of the user (for the student profile)
}

  const allowedZipCodes = [
    13642,
    13630,
    13617,
    13676,
    13699
  ]

  function TabPanel(props:any) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    )
}

function SignUp() {
    const [birthday, setBirthday] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')
    const [state, setstate] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<FormErrors>({})
    const [age, setAge] = useState(0)
    const [birthdayComplete, setBirthdayComplete] = useState(false)
    const [nameComplete, setNameComplete] = useState(false)
    const [locationComplete, setLocationComplete] = useState(false)
    const [emailComplete, setEmailComplete] = useState(false)
    const [birthdayWaiting, setBirthdayWaiting] = useState(false)
    const [nameWaiting, setNameWaiting] = useState(false)
    const [locationWaiting, setLocationWaiting] = useState(false)
    const [emailWaiting, setEmailWaiting] = useState(false)
    const [signupWaiting, setSigupWaiting] = useState(false)
    const [signupComplete, setSignupComplete] = useState(false)
    const [tfaOpen, setTfaOpen] = useState(false)
    const [tabValue, setTabValue] = useState(0)
    const [formComplete, setFormComplete] = useState(false)

    const handleClickShowPassword = (target:number) => {
        if(target===1) setShowPassword((show) => !show)
        if(target===2) setShowConfirmPassword((showConfirm) => !showConfirm)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    // Regex pattern for validation
    const birthdayPattern = /^(19[0-9][1-9]|20[0-9]{2})-\d{2}-\d{2}$/
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)+$/
    const zipCodePattern = /^\d{5}(-\d{4})?$/
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const fetchCityState = async(zip:any) => {
        if(zip.length===5){
            try {
                const response = await fetch(`https://api.zippopotam.us/us/${zip}`)
                if (!response.ok) throw new Error('Zip code not found')
                const data = await response.json()
                setCity(data.places[0]['place name'])
                setstate(data.places[0]['state'])
                console.log(data)
            } catch (error) {
                console.error('Failed to fetch city and state:', error)
                setCity('')
                setstate('')
            }
        }
    }

    const handleTabChange:any = (event:any,newValue:number) => {
        setTabValue(newValue)
    }

    const handleBirthdayChange = (event:any) => {
        const newBirthday = event.target.value
        setBirthday(newBirthday)
    }
    

    const TabItem: React.FC<TabItemProps> = ({ text, waiting, complete }) => {
        return (
            <Box textAlign="left" sx={{ display: 'flex', gap: 0.5 }}>
                <Grid container>
                    <Grid item xs={10} container>
                        <Typography variant="caption">{text}</Typography>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
                        {waiting && <CircularProgress size={15} />}
                        {complete && <CheckCircleIcon color="success" fontSize="small" />}
                    </Grid>
                </Grid>
            </Box>
        )
    }

    useEffect(()=> {
        if(birthdayComplete && nameComplete && locationComplete && emailComplete){
            setFormComplete(true)
            console.log("Form complete")
        }else{
            setFormComplete(false)
            console.log("Form incomplete")
        }
    }, [birthdayComplete, nameComplete, locationComplete, emailComplete])

    useEffect(() => {
        if(birthdayPattern.test(birthday)){
            console.log(birthday)
            let age = ageCaluclatedFromInputBirthday(birthday)
            setBirthdayWaiting(true)
            if (age < 16) {
                setError({ ...error, birthday: "You must be at least 16 years old to sign up." })
                setBirthdayComplete(false)
            } else if (age < 100) {
                setAge(age)
                setError({...error, birthday: ""})
                setTimeout(() => {
                    setBirthdayComplete(false)
                    setTabValue(1)
                    setBirthdayWaiting(false)
                    setBirthdayComplete(true)
                }, 1000)
            } else {
                setBirthdayComplete(false)
            }
        }
    }, [birthday])

    const handleNameInput:any = () => {
        setNameWaiting(true)
        if (namePattern.test(name)) {
            setTimeout(() => {
                setNameComplete(true)
                setTabValue(2)
                setNameWaiting(false)
            }, 1000)
        } else{
            setNameWaiting(false)
            setError({...error, name:"Please enter full name. Example: John Doe"})
        }
    }

    useEffect(() => {
        if (zipCodePattern.test(zipCode)) {
            setLocationWaiting(true)
            if(allowedZipCodes.includes(parseInt(zipCode))){
                fetchCityState(zipCode)
                setError({...error, zipCode:""})
                setTimeout(() => {
                    setLocationComplete(true)
                    setTabValue(3)
                    setLocationWaiting(false)
                }, 1000)
            }else{
                setLocationWaiting(false)
                setError({...error, zipCode:"Zip code outside supported area. Contact info@northcountryengineer.com for more information."})
            }
        } else{
            setCity('')
            setstate('')
        }
    }, [zipCode])


    const handleEmailInput:any = () => {
        setEmailWaiting(true)
        if (emailPattern.test(email)) {
            setTimeout(() => {
                setEmailComplete(true)
                setTabValue(4)
                setEmailWaiting(false)
            }, 1000)
        } else{
            setEmailWaiting(false)
            setError({...error, email:"Please enter a valid email address. Example: joe@example.com"})
        }
    }

    async function handleSignUp() {
        try {
            const signUpResponse = await signUp({
                username: email,
                password: password,
            })
            console.log('Sign up successful', signUpResponse)
            if (signUpResponse.nextStep && signUpResponse.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
                setTfaOpen(true)
                console.log("tfa is open")
            }



        } catch (e:any) {
            console.log(e.name)
            let errorMessage = ''
            switch (e.name) {
                case 'NoUserPoolError':
                    errorMessage = 'No user pool configured'
                    break
                case 'UsernameExistsException':
                    errorMessage = 'Username already exists'
                    break
                case 'InvalidParameterException':
                    errorMessage = 'Invalid parameters'
                    break
                case 'InvalidPasswordException':
                    errorMessage = 'Invalid password format'
                    break
                case 'NotAuthorizedException':
                    errorMessage = 'Not authorized'
                    break
                case 'UserNotFoundException':
                    errorMessage = 'User not found'
                    break
                case 'LimitExceededException':
                    errorMessage = 'Limit exceeded'
                    break
                case 'CodeMismatchException':
                    errorMessage = 'Invalid verification code'
                    break
                case 'ExpiredCodeException':
                    errorMessage = 'Verification code expired'
                    break
                case 'TooManyRequestsException':
                    errorMessage = 'Too many requests, try again later'
                    break
                case 'TooManyFailedAttemptsException':
                    errorMessage = 'Too many failed attempts'
                    break
                case 'UsernameExistsException':
                    errorMessage = 'User exists with provided email, use a different email'
                    break
                case 'EmptySignUpUsername':
                    errorMessage = 'No email address provided'
                    break
                default:
                    errorMessage = 'An unknown error occurred'
            }
            setError({ ...error, signUp: errorMessage })
            console.log(error)
        }
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        outline: 'none',
    }
    

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={3} md={12} 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}
                >                   
                <img
                    src="/NCE Schoolhouse.jpg"
                    alt="NCE Schoolhouse"
                    style={{ maxWidth: '15%', height: 'auto', display: 'block', margin: 'auto' }}
                />
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Tabs
                        orientation="horizontal"
                        variant="scrollable"
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="Vertical tabs for sign up"
                        sx={{ borderRight: 1, borderColor: 'divider', '.MuiTabs-flexContainer': { alignItems: 'flex-start' } }}
                    >

                        <Tab
                            label={<TabItem text="Age" waiting={birthdayWaiting} complete={birthdayComplete} />}
                        />
                        <Tab
                            label={<TabItem text="Name" waiting={nameWaiting} complete={nameComplete} />}
                        />
                        <Tab
                            label={ <TabItem text="Location" waiting={locationWaiting} complete={locationComplete} /> }
                        />
                        <Tab
                            label={<TabItem text="Email" waiting={emailWaiting} complete={emailComplete} /> }
                        />    
                        <Tab
                            label={ <TabItem text="Create Account" waiting={signupWaiting} complete={signupComplete} /> }
                        />
                    </Tabs>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <form>
                        <TabPanel value={tabValue} index={0}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Birthday"
                                InputLabelProps={{ shrink: true }}
                                onChange={handleBirthdayChange}
                                value={birthday}
                                error={!!error.birthday}
                            />

                            {error.birthday && (
                                <FormHelperText error>{error.birthday}</FormHelperText>
                            )}
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {error.name ? 
                                        <FormControl error fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-noerror">Name</InputLabel>
                                            <Input
                                                fullWidth
                                                id="standard-adornment-name-noerror"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                aria-describedby="component-error-text"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleNameInput}
                                                        >
                                                            Done
                                                        </Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                    :

                                        <FormControl fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-error">Name</InputLabel>
                                            <Input
                                                id="standard-adornment-name-error"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleNameInput}
                                                        >Done</Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        
                                        </FormControl>
                                    }
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField 
                                        fullWidth 
                                        label="Zip code" 
                                        variant="standard" 
                                        onChange={(event) => setZipCode(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label={city+", "+state}
                                        variant="standard"
                                        error={!!error.zipCode}
                                        InputProps={{
                                            endAdornment: error.zipCode && (
                                                <InputAdornment position="end">
                                                    <ErrorOutline color="error" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {error.zipCode && (
                                        <FormHelperText error>{error.zipCode}</FormHelperText>
                                    )}
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={3}>
                            <Grid item xs={12}>
                            {error.name ? 
                                        <FormControl error fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-noerror">Email</InputLabel>
                                            <Input
                                                id="standard-adornment-name-noerror"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                aria-describedby="component-error-text"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleEmailInput}
                                                        >
                                                            Done
                                                        </Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                    :

                                        <FormControl fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-error">Email</InputLabel>
                                            <Input
                                                id="standard-adornment-name-error"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleEmailInput}
                                                        >Done</Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        
                                        </FormControl>
                                    }
                            </Grid>
                        </TabPanel>

                        <TabPanel value={tabValue} index={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={e => handleClickShowPassword(1)}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel htmlFor="standard-adornment-confirm-password">Confirm Password</InputLabel>
                                    <Input
                                        id="standard-adornment-confirm-password"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={e => handleClickShowPassword(2)}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        fullWidth
                                    />
                                </FormControl> 
                            </Grid>
                            <Grid item xs={12}>
                                { formComplete ?
                                    <Button onClick={handleSignUp} fullWidth>Test</Button>
                                    :
                                    <Button disabled fullWidth>Form not complete</Button>

                                }
                            </Grid>
                        </Grid>

                        </TabPanel>
                    </form>
                </Grid>
            </Grid>
            <Modal
                open={tfaOpen}
                onClose={() => setTfaOpen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2">
                        Two-Factor Authentication
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        {/* Your content for two-factor authentication */}
                    </Typography>
                    {/* Add buttons or other elements as needed */}
                </Box>
            </Modal>
        </Container>
    )
}

export default SignUp


/*


<Grid item xs={12} sm={4}>
    <TextField 
        fullWidth 
        label="City" 
        variant="standard"
        onChange={(e) => setCity(e.target.value)}
    />
</Grid>

<Grid item xs={12} sm={4}>
    <StateSelector 
        state={state} 
        setstate={setstate} 
    />
</Grid>



*/
