import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, Container, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton, Tabs, Tab, Box, FormHelperText, CircularProgress, Modal } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { ageCaluclatedFromInputBirthday } from '@/src/functions/SignUpFunctions'
import { ErrorOutline } from '@mui/icons-material'
import { signUp } from 'aws-amplify/auth'
import { AuthenticationHeaderImage, SignUpTabItem, SignUpTabPanel, TwoFactorAuthForm } from '@/src/components/AuthComponents'
import { SignUpOutput } from 'aws-amplify/auth'
import { SignUpFormErrors, SignUpTabItemProps, SignUpTabPanelProps, birthdayPattern, emailPattern, namePattern, zipCodePattern } from '@/src/types/SignUpTypes'
import { ThrowSignUpError, fetchCityState, handleConfirmSignup, handleCreateStudentProfile, handleSignIn } from '@/src/functions/AuthFunctions'
import { SignUpImageGridStyle } from '@/src/style/SignUpComponentStyle'

const allowedZipCodes = [
    13642,
    13630,
    13617,
    13676,
    13699
]

export default function SignUp() {
    const [birthday, setBirthday] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [username, setUsername] = useState('')
    const [state, setstate] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<SignUpFormErrors>({})
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
    const [cognitoUserID, setCognitoUserID] = useState('')
    const [confirmationCode, setConfirmationCode] = useState('')
    const [progressModalOpen, setProgressModalOpen] = useState(false)
    const [userSignedIn, setUserSignedIn] = useState(false)
    const [studentProfileCreated, setStudentProfileCreated] = useState(false)

    const handleClickShowPassword = (target:number) => {
        if(target===1) setShowPassword((show) => !show)
        if(target===2) setShowConfirmPassword((showConfirm) => !showConfirm)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    
    const fetchCityStateCall = async(zip:any) => {
        if(zip.length===5){
            try {
                const cityStateCall = await fetchCityState(zip)
                setCity(cityStateCall.City)
                setstate(cityStateCall.State)
            } catch (error) {
                console.error('Failed to fetch city and state:', error)
                setCity('') //Reassigs error inputs to null string
                setstate('') //Reassigs error inputs to null string
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
                fetchCityStateCall(zipCode)
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
        if (emailPattern.test(username)) {
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
            const response:SignUpOutput = await signUp({
                username: username,
                password: password,
            })

            if (response.nextStep && response.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
                console.log(response)
                setTfaOpen(true)
            }

            if(response.userId){
                setCognitoUserID(response.userId)
            }
        } catch (e:any) {
            let errorMessage = ThrowSignUpError(e.name)
            setError({ ...error, signUp: errorMessage })
            console.error(error)
        }
    }

    const handlePostTfaWorkflow = async () => {
        try {
            const signInResult = await handleSignIn({ username, password })
            let birthdate = birthday
            let email = username

            if (signInResult.isSignedIn) {
                const profileInput = { cognitoUserID, name, email, birthdate }
                const profileResult = await handleCreateStudentProfile(profileInput)
                if (profileResult.isSignedUp) {
                    window.location.href = '/StudentProfile'
                }
            }
        } catch (error) {
            console.error('Error in post-TFA workflow:', error)
        }
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={3} md={12} style={SignUpImageGridStyle()}>                   
                    <AuthenticationHeaderImage />
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
                            label={<SignUpTabItem text="Age" 
                                waiting={birthdayWaiting} 
                                complete={birthdayComplete} 
                            />}
                            disabled
                        />
                        <Tab
                            label={<SignUpTabItem text="Name" 
                                waiting={nameWaiting} 
                                complete={nameComplete} 
                            />}
                            disabled
                        />
                        <Tab
                            label={ <SignUpTabItem text="Location" 
                                waiting={locationWaiting} 
                                complete={locationComplete} 
                            /> }
                            disabled
                        />
                        <Tab
                            label={<SignUpTabItem text="Email" 
                                waiting={emailWaiting} 
                                complete={emailComplete} 
                            /> }
                            disabled
                        />    
                        <Tab
                            label={ <SignUpTabItem text="Create Account" 
                                waiting={signupWaiting} 
                                complete={signupComplete} 
                            /> }
                            disabled
                        />
                    </Tabs>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <form>
                        <SignUpTabPanel value={tabValue} index={0}>
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
                        </SignUpTabPanel>
                        <SignUpTabPanel value={tabValue} index={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl error={!!error.name} fullWidth variant="standard">
                                        <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                                        <Input
                                            fullWidth
                                            id="standard-adornment-name"
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                            aria-describedby="component-error-text"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <Button onClick={handleNameInput}>Done</Button>
                                                </InputAdornment>
                                            }
                                        />
                                        {error.name && (
                                            <FormHelperText id="component-error-text">{error.name}</FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </SignUpTabPanel>
                        <SignUpTabPanel value={tabValue} index={2}>
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
                        </SignUpTabPanel>
                        <SignUpTabPanel value={tabValue} index={3}>
                            <Grid item xs={12}>
                            {error.name ? 
                                        <FormControl error fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-noerror">Email</InputLabel>
                                            <Input
                                                id="standard-adornment-name-noerror"
                                                onChange={(e) => setUsername(e.target.value)}
                                                value={username}
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
                                                onChange={(e) => setUsername(e.target.value)}
                                                value={username}
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
                        </SignUpTabPanel>

                        <SignUpTabPanel value={tabValue} index={4}>
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
                                    <Button onClick={handleSignUp} fullWidth>Sign Up</Button>
                                    :
                                    <Button disabled fullWidth>Form not complete</Button>

                                }
                            </Grid>
                        </Grid>
                        </SignUpTabPanel>
                    </form>
                </Grid>
            </Grid>
            <Container maxWidth="lg">
                <Modal
                    open={tfaOpen}
                    onClose={() => setTfaOpen(false)}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <TwoFactorAuthForm username={username} onTfaSuccess={handlePostTfaWorkflow} handleConfirmSignup={handleConfirmSignup} />
                </Modal>
            </Container>

        </Container>
    )
}