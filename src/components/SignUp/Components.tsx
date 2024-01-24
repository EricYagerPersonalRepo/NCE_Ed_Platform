import React, { useEffect, useRef } from 'react'
import { TextField, Button, Grid, FormControl, InputLabel, Input, InputAdornment, IconButton, FormHelperText } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { ageCaluclatedFromInputBirthday } from '@/src/functions/SignUpFunctions'
import { ErrorOutline } from '@mui/icons-material'
import { signUp } from 'aws-amplify/auth'
import { SignUpTabPanel } from '@/src/components/AuthComponents'
import { SignUpOutput } from 'aws-amplify/auth'
import { birthdayPattern, emailPattern, namePattern, zipCodePattern } from '@/src/types/SignUpTypes'
import { ThrowSignUpError } from '@/src/functions/AuthFunctions'

export const BirthdayInput = ({signUpHooks}:any) => {

    const dateInputRef:any = useRef(null)

    // Updates the birthday state based on user input.
    const handleBirthdayInput:any = (event:any) => {
        const newBirthday = event.target.value
        signUpHooks.setBirthday(newBirthday)
    }

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

    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={0}>
            <TextField
                fullWidth
                type="date"
                label="Birthday"
                InputLabelProps={{ shrink: true }}
                onChange={handleBirthdayInput}
                value={signUpHooks.birthday}
                error={!!signUpHooks.error.birthday}
                inputRef={dateInputRef}
            />
                {signUpHooks.error.birthday && (
                <FormHelperText error>{signUpHooks.error.birthday}</FormHelperText>
            )}
        </SignUpTabPanel>
    )
}

export const NameInput = ({signUpHooks}:any) => {

    // Validates the name input and updates related states.
    const handleNameInput:any = () => {
        signUpHooks.setNameWaiting(true)
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

    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={1}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl error={!!signUpHooks.error.name} fullWidth variant="standard">
                        <InputLabel htmlFor="name-input">Name</InputLabel>
                        <Input
                            type="text"
                            fullWidth
                            id="name-input"
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
    )
}

export const ZipInput = ({signUpHooks}:any) => {
    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField 
                        id="zip-code-input"
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
                        <FormHelperText id="component-error-text" error>{signUpHooks.error.zipCode}</FormHelperText>
                    )}
                </Grid>
            </Grid>
        </SignUpTabPanel>
    )
}

export const EmailInput = ({signUpHooks}:any) => {

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

    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={3}>
            <Grid item xs={12} id="testID">
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
                    {signUpHooks.error.email && (
                        <FormHelperText id="component-email-error-text">{signUpHooks.error.email}</FormHelperText>
                    )}
                </FormControl>
            </Grid>
        </SignUpTabPanel>
    )
}

export const PasswordInput = ({signUpHooks}:any) => {

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
    
    // Toggles the visibility of the password input field.
    const handleClickShowPassword = (target:number) => {
        if(target===1) signUpHooks.setShowPassword(!signUpHooks.showPassword)
        if(target===2) signUpHooks.setShowConfirmPassword(!signUpHooks.showConfirmPassword)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    useEffect(() => {
        if(signUpHooks.passwordComplete && signUpHooks.confirmPasswordComplete){
            signUpHooks.setFormComplete(true)
            console.log("Form complete")
        }else{
            signUpHooks.setFormComplete(false)
            console.log("Form incomplete")
        }
    }, [signUpHooks.passwordComplete, signUpHooks.confirmPasswordComplete])
    
    
    return(
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
    )
}