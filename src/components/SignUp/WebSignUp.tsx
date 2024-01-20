import React, { useEffect, useRef } from 'react'
import { TextField, Button, Grid, Container, FormControl, InputLabel, Input, InputAdornment, IconButton, Tabs, Tab, FormHelperText, Modal } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { ageCaluclatedFromInputBirthday, allowedZipCodes } from '@/src/functions/SignUpFunctions'
import { ErrorOutline } from '@mui/icons-material'
import { signUp } from 'aws-amplify/auth'
import { AuthenticationHeaderImage, SignUpTabItem, SignUpTabPanel, TwoFactorAuthForm } from '@/src/components/AuthComponents'
import { SignUpOutput } from 'aws-amplify/auth'
import { birthdayPattern, emailPattern, namePattern, zipCodePattern } from '@/src/types/SignUpTypes'
import { ThrowSignUpError, fetchCityState, handleConfirmSignup, handleCreateStudentProfile, handleSignIn, checkAuthStatus } from '@/src/functions/AuthFunctions'
import { SignUpImageGridStyle } from '@/src/style/SignUpComponentStyle'
import { useSignUpHooks } from '@/src/state/SignUpHooks'

const WebSignUp = () => {

    const signUpHooks = useSignUpHooks()

    const dateInputRef:any = useRef(null)

    // Toggles the visibility of the password input field.
    const handleClickShowPassword = (target:number) => {
        if(target===1) signUpHooks.setShowPassword((show) => !show)
        if(target===2) signUpHooks.setShowConfirmPassword((showConfirm) => !showConfirm)
    }

    // Prevents the default behavior on mousedown for password fields.
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }
    
    // Fetches city and state information based on the provided zip code.
    const fetchCityStateCall = async(zip:any) => {
        if(zip.length===5){
            try {
                const cityStateCall = await fetchCityState(zip)
                signUpHooks.setCity(cityStateCall.City)
                signUpHooks.setState(cityStateCall.State)
            } catch (error) {
                console.error('Failed to fetch city and state:', error)
                signUpHooks.setCity('') //Reassigs error inputs to null string
                signUpHooks.setState('') //Reassigs error inputs to null string
            }
        }
    }

    // Handles tab changes in the sign-up form.
    const handleTabChange:any = (event:any,newValue:number) => {
        signUpHooks.setTabValue(newValue)
    }

    // Updates the birthday state based on user input.
    const handleBirthdayChange = (event:any) => {
        const newBirthday = event.target.value
        signUpHooks.setBirthday(newBirthday)
    }
    
    // Updates the form's completion status based on the completion of individual steps.
    useEffect(()=> {
        if(signUpHooks.birthdayComplete && signUpHooks.nameComplete && signUpHooks.locationComplete && signUpHooks.emailComplete){
            signUpHooks.setFormComplete(true)
            console.log("Form complete")
        }else{
            signUpHooks.setFormComplete(false)
            console.log("Form incomplete")
        }
    }, [signUpHooks.birthdayComplete, signUpHooks.nameComplete, signUpHooks.locationComplete, signUpHooks.emailComplete])

    // Validates the birthday input and updates related states.
    useEffect(() => {
        if(birthdayPattern.test(signUpHooks.birthday)){
            console.log(signUpHooks.birthday)
            let age = ageCaluclatedFromInputBirthday(signUpHooks.birthday)
            signUpHooks.setBirthdayWaiting(true)
            if (age < 16) {
                signUpHooks.setError({ ...signUpHooks.error, birthday: "You must be at least 16 years old to sign up." })
                signUpHooks.setBirthdayComplete(false)
            } else if (age < 100) {
                signUpHooks.setAge(age)
                signUpHooks.setError({...signUpHooks.error, birthday: ""})
                setTimeout(() => {
                    signUpHooks.setBirthdayComplete(false)
                    signUpHooks.setTabValue(1)
                    signUpHooks.setBirthdayWaiting(false)
                    signUpHooks.setBirthdayComplete(true)
                }, 1000)
            } else {
                signUpHooks.setBirthdayComplete(false)
            }
        }
    }, [signUpHooks.birthday])

    // Validates the name input and updates related states.
    const handleNameInput:any = () => {
        signUpHooks. setNameWaiting(true)
        if (namePattern.test(signUpHooks.name)) {
            setTimeout(() => {
                signUpHooks.setNameComplete(true)
                signUpHooks.setTabValue(2)
                signUpHooks.setNameWaiting(false)
            }, 1000)
        } else{
            signUpHooks.setNameWaiting(false)
            signUpHooks.setError({...signUpHooks.error, name:"Please enter full name. Example: John Doe"})
        }
    }

    useEffect(() => {
        if (signUpHooks.tabValue === 0 && dateInputRef.current) {
            // Manually set the focus on the input field
            dateInputRef.current.focus();
        }
    }, [signUpHooks.tabValue]);

    // Validates the zip code input and updates related states.
    useEffect(() => {
        if (zipCodePattern.test(signUpHooks.zipCode)) {
            signUpHooks.setLocationWaiting(true)
            if(allowedZipCodes.includes(parseInt(signUpHooks.zipCode))){
                fetchCityStateCall(signUpHooks.zipCode)
                signUpHooks.setError({...signUpHooks.error, zipCode:""})
                setTimeout(() => {
                    signUpHooks.setLocationComplete(true)
                    signUpHooks.setTabValue(3)
                    signUpHooks.setLocationWaiting(false)
                }, 1000)
            }else{
                signUpHooks.setLocationWaiting(false)
                signUpHooks.setError({...signUpHooks.error, zipCode:"Zip code outside supported area. Contact info@northcountryengineer.com for more information."})
            }
        } else{
            signUpHooks.setCity('')
            signUpHooks.setState('')
        }
    }, [signUpHooks.zipCode])


    // Validates the email input and updates related states.
    const handleEmailInput:any = () => {
        signUpHooks.setEmailWaiting(true)
        if (emailPattern.test(signUpHooks.username)) {
            setTimeout(() => {
                signUpHooks.setEmailComplete(true)
                signUpHooks.setTabValue(4)
                signUpHooks.setEmailWaiting(false)
            }, 1000)
        } else{
            signUpHooks.setEmailWaiting(false)
            signUpHooks.setError({...signUpHooks.error, email:"Please enter a valid email address. Example: joe@example.com"})
        }
    }

    // Handles the sign-up submission to AWS Amplify.
    async function handleSignUp() {
        try {
            const response:SignUpOutput = await signUp({
                username: signUpHooks.username,
                password: signUpHooks.password,
            })

            if (response.nextStep && response.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
                console.log(response)
                signUpHooks.setTfaOpen(true)
            }

            if(response.userId){
                signUpHooks.setCognitoUserID(response.userId)
            }
        } catch (e:any) {
            let errorMessage = ThrowSignUpError(e.name)
            signUpHooks.setError({ ...signUpHooks.error, signUp: errorMessage })
            console.error(signUpHooks.error)
        }
    }

    // Manages the post-two-factor-authentication workflow.
    const handlePostTfaWorkflow = async () => {
        let {username,password} = {username:signUpHooks.username, password:signUpHooks.password}
        try {
            const signInResult = await handleSignIn({ username,password })

            if (signInResult.isSignedIn) {
                const profileInput= { cognitoUserID:signUpHooks.cognitoUserID, name:signUpHooks.name, email:signUpHooks.username, birthdate:signUpHooks.birthday }
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
                <Grid item xs={12} container justifyContent="center">
                    <Tabs
                        orientation="horizontal"
                        variant="scrollable"
                        value={signUpHooks.tabValue}
                        onChange={handleTabChange}
                        aria-label="Vertical tabs for sign up"
                        sx={{ borderRight: 1, borderColor: 'divider', '.MuiTabs-flexContainer': { alignItems: 'flex-start' } }}
                    >

                        <Tab
                            label={<SignUpTabItem text="Age" 
                                waiting={signUpHooks.birthdayWaiting} 
                                complete={signUpHooks.birthdayComplete} 
                            />}
                            disabled
                        />
                        <Tab
                            label={<SignUpTabItem text="Name" 
                                waiting={signUpHooks.nameWaiting} 
                                complete={signUpHooks.nameComplete} 
                            />}
                            disabled
                        />
                        <Tab
                            label={ <SignUpTabItem text="Location" 
                                waiting={signUpHooks.locationWaiting} 
                                complete={signUpHooks.locationComplete} 
                            /> }
                            disabled
                        />
                        <Tab
                            label={<SignUpTabItem text="Email" 
                                waiting={signUpHooks.emailWaiting} 
                                complete={signUpHooks.emailComplete} 
                            /> }
                            disabled
                        />    
                        <Tab
                            label={ <SignUpTabItem text="Create Account" 
                                waiting={signUpHooks.signupWaiting} 
                                complete={signUpHooks.signupComplete} 
                            /> }
                            disabled
                        />
                    </Tabs>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <form>
                        <SignUpTabPanel value={signUpHooks.tabValue} index={0}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Birthday"
                                InputLabelProps={{ shrink: true }}
                                onChange={handleBirthdayChange}
                                value={signUpHooks.birthday}
                                error={!!signUpHooks.error.birthday}
                                inputRef={dateInputRef} // Assign the ref to the input
                            />
                                {signUpHooks.error.birthday && (
                                <FormHelperText error>{signUpHooks.error.birthday}</FormHelperText>
                            )}
                        </SignUpTabPanel>
                        <SignUpTabPanel value={signUpHooks.tabValue} index={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl error={!!signUpHooks.error.name} fullWidth variant="standard">
                                        <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
                                        <Input
                                            fullWidth
                                            id="standard-adornment-name"
                                            onChange={(e) => signUpHooks.setName(e.target.value)}
                                            value={signUpHooks.name}
                                            aria-describedby="component-error-text"
                                            autoFocus={signUpHooks.tabValue === 1}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <Button onClick={handleNameInput}>Done</Button>
                                                </InputAdornment>
                                            }
                                        />
                                        {signUpHooks.error.name && (
                                            <FormHelperText id="component-error-text">{signUpHooks.error.name}</FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </SignUpTabPanel>
                        <SignUpTabPanel value={signUpHooks.tabValue} index={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField 
                                        fullWidth 
                                        label="Zip code" 
                                        variant="standard" 
                                        placeholder="Zip Code"
                                        autoFocus={signUpHooks.tabValue === 2}
                                        onChange={(event) => signUpHooks.setZipCode(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label={signUpHooks.city+", "+signUpHooks.state}
                                        variant="standard"
                                        error={!!signUpHooks.error.zipCode}
                                        InputProps={{
                                            endAdornment: signUpHooks.error.zipCode && (
                                                <InputAdornment position="end">
                                                    <ErrorOutline color="error" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {signUpHooks.error.zipCode && (
                                        <FormHelperText error>{signUpHooks.error.zipCode}</FormHelperText>
                                    )}
                                </Grid>
                            </Grid>
                        </SignUpTabPanel>
                        <SignUpTabPanel value={signUpHooks.tabValue} index={3}>
                            <Grid item xs={12} id="testID">
                                {signUpHooks.error.name ? 
                                        <FormControl error fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-noerror">Email</InputLabel>
                                            <Input
                                                id="standard-adornment-name-noerror"
                                                onChange={(e) => signUpHooks.setUsername(e.target.value)}
                                                value={signUpHooks.username}
                                                aria-describedby="component-error-text"
                                                autoFocus={signUpHooks.tabValue === 3}
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
                                                onChange={(e) => signUpHooks.setUsername(e.target.value)}
                                                value={signUpHooks.username}
                                                autoFocus={signUpHooks.tabValue === 3}
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

                        <SignUpTabPanel value={signUpHooks.tabValue} index={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={signUpHooks.showPassword ? 'text' : 'password'}
                                        onChange={(e) => signUpHooks.setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        autoFocus={signUpHooks.tabValue === 4}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={e => handleClickShowPassword(1)}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {signUpHooks.showPassword ? <VisibilityOff /> : <Visibility />}
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
                                        type={signUpHooks.showConfirmPassword ? 'text' : 'password'}
                                        onChange={(e) => signUpHooks.setConfirmPassword(e.target.value)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={e => handleClickShowPassword(2)}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {signUpHooks.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        fullWidth
                                    />
                                </FormControl> 
                            </Grid>
                            <Grid item xs={12}>
                                { signUpHooks.formComplete ?
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
                    open={signUpHooks.tfaOpen}
                    onClose={() => signUpHooks.setTfaOpen(false)}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <TwoFactorAuthForm username={signUpHooks.username} onTfaSuccess={handlePostTfaWorkflow} handleConfirmSignup={handleConfirmSignup} />
                </Modal>
            </Container>
        </Container>
    )
}

export default WebSignUp