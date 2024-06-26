import React, { useEffect, useRef, useState } from 'react'
import { TextField, Button, Grid, FormControl, InputLabel, Input, InputAdornment, IconButton, FormHelperText, Typography, Box, CircularProgress  } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { allowedZipCodes, handleConfirmSignup } from '@/src/functions/SignUp'
import { ErrorOutline, CheckCircle } from '@mui/icons-material'
import { emailPattern, namePattern, SignUpTabItemProps, SignUpTabPanelProps, zipCodePattern } from '@/src/types/SignUpTypes'
import { fetchCityState } from '@/src/functions/AuthX'
import { handleSignIn } from '../../functions/AuthX'
import { useSignUpHooks } from '@/src/state/SignUpHooks'
import { handleSignUp } from '@/src/functions/SignUp'

/**
 * EmailInput Component - Manages the input and validation of a user's email address during the sign-up process.
 * 
 * This component provides a field for users to enter their email address as part of signing up. Utilizing the
 * `signUpHooks` prop, the component integrates with the broader sign-up form's state management, including validation,
 * error handling, and navigation between sign-up steps. The email input is validated against a predefined pattern
 * to ensure it meets standard email format requirements. If the validation fails, an error message guides the user
 * to enter a valid email address format. Upon successful validation, the user is advanced to the next step of the
 * sign-up process.
 * 
 * The component leverages Material-UI components such as FormControl, InputLabel, Input, and FormHelperText to
 * provide a user-friendly interface. The `Done` button within the input's end adornment triggers the validation
 * and state update logic.
 * 
 * @param {Object} props - Component props.
 * @param {any} props.signUpHooks - An object containing various hooks related to the sign-up process,
 *                                  including methods to set the email, handle errors, and manage sign-up steps.
 * 
 * @returns {JSX.Element} - A controlled input field for the user's email with integrated validation and
 *                          dynamic feedback provided via FormHelperText.
 */
export const EmailInput = ({signUpHooks}:any) => {

    // Validates the email input and updates related states.
    const handleEmailInput:any = () => {
        signUpHooks.setEmailWaiting(true)
        if (emailPattern.test(signUpHooks.username)) {
            setTimeout(() => {
                signUpHooks.setEmailComplete(true)
                signUpHooks.setTabValue(1)
                signUpHooks.setEmailWaiting(false)
            }, 1000)
        } else{
            signUpHooks.setEmailWaiting(false)
            signUpHooks.setError({...signUpHooks.error, email:"Please enter a valid email address. Example: joe@example.com"})
        }
    }

    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={0}>
            <Grid item xs={12} id="testID">
                <FormControl fullWidth variant="standard">
                    <InputLabel htmlFor="standard-adornment-name-noerror">Email</InputLabel>
                    <Input
                        id="standard-adornment-name-noerror"
                        onChange={(e) => signUpHooks.setUsername(e.target.value)}
                        value={signUpHooks.username}
                        aria-describedby="component-error-text"
                        autoFocus
                        endAdornment={
                            <InputAdornment position="end">
                                <Button
                                    id="email-input-done"
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

/**
 * PasswordInput Component - Manages the password input fields during the sign-up process.
 * 
 * This component provides two input fields for users to enter and confirm their password as part of signing up.
 * It leverages the `signUpHooks` prop for state management, including showing or hiding passwords, handling user
 * input, and submitting the sign-up form to AWS Amplify. The component implements validation logic to ensure
 * the form is complete and both password fields match before allowing the user to submit the form. Upon successful
 * validation and submission, it triggers the next step in the sign-up process or displays errors as necessary.
 * 
 * The component also includes an effect hook that monitors the completion state of the password inputs to enable
 * or disable the sign-up button accordingly. The `handleSignUp` function encapsulates the sign-up logic, invoking
 * the provided `signUp` function with user credentials and handling any errors that occur during the process.
 * 
 * @param {Object} props - Component props.
 * @param {any} props.signUpHooks - An object containing various hooks and state management functions for the sign-up
 *                                  process, such as setting passwords, toggling password visibility, and handling
 *                                  sign-up submission.
 * 
 * @returns {JSX.Element} - A form section allowing users to input and confirm their password, with a sign-up button
 *                          that is enabled only when the form is correctly completed.
 */
export const PasswordInput = ({signUpHooks}:any) => {
    // Toggles the visibility of the password input field.
    const handleClickShowPassword = (target:number) => {
        if(target===1) signUpHooks.setShowPassword(!signUpHooks.showPassword)
        if(target===2) signUpHooks.setShowConfirmPassword(!signUpHooks.showConfirmPassword)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    const handleSignUpButtonClick = async() => {
        if(signUpHooks.password === signUpHooks.confirmPassword){
            console.log("Password click")
            if ('signUpError' in signUpHooks.error) {
                const newError = { ...signUpHooks.error };
                delete newError.signUpError;
                signUpHooks.setError(newError);
            }

            await handleSignUp(signUpHooks)
        }else{
            signUpHooks.setError({...signUpHooks.error, signUpError: "Passwords do not match"})
        }
    }

    /**
     * Monitors the password and confirmPassword completion states. If both are complete, it marks the form as complete;
     * otherwise, it sets the form as incomplete. This useEffect is triggered by changes to either `passwordComplete` 
     * or `confirmPasswordComplete` states.
     * 
     * Dependencies: signUpHooks.passwordComplete, signUpHooks.confirmPasswordComplete
    */
    useEffect(() => {
        signUpHooks.setPasswordWaiting(true)
        setTimeout(() => {
            if(signUpHooks.signUpComplete){
                signUpHooks.setPasswordComplete(true)
                signUpHooks.setPasswordWaiting(false)
                signUpHooks.setTabValue(2)
            }
        }, 1000)
    }, [signUpHooks.signUpComplete])
    
    
    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={1}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={signUpHooks.showPassword ? 'text' : 'password'}
                            onChange={(e) => signUpHooks.setPassword(e.target.value)}
                            autoComplete="current-password"
                            autoFocus={signUpHooks.tabValue === 1}
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
                    <Button onClick={()=>handleSignUpButtonClick()} fullWidth>Sign Up</Button>
                </Grid>
            </Grid>
        </SignUpTabPanel>
    )
}   

/**
 * TwoFactorInput Component - Manages the submission of a two-factor authentication code during sign-up.
 * 
 * This component provides a form for users to enter their two-factor authentication (TFA) code as part of
 * the sign-up process. It leverages `signUpHooks` for accessing user input data (e.g., username, password) and
 * uses `handleConfirmSignup` for submitting the TFA code. Upon successful TFA code verification, it initiates
 * the post-TFA workflow, which includes signing in the user and creating their profile based on the provided
 * information in `signUpHooks`.
 * 
 * @param {Object} props - Component props.
 * @param {ReturnType<typeof useSignUpHooks>} props.signUpHooks - Hooks containing user input data from the sign-up form.
 * @param {Function} props.handleConfirmSignup - Function to handle the submission of the TFA code for verification.
 * 
 * @returns {JSX.Element} - A form for users to submit their two-factor authentication code, with error handling
 *                          and redirection upon successful sign-up and TFA verification.
 */
export function TwoFactorInput({ signUpHooks }: { signUpHooks:ReturnType<typeof useSignUpHooks> }) {
    const [confirmationCode, setConfirmationCode] = useState('')
    let {username,password} = {username:signUpHooks.username, password:signUpHooks.password}

    const handleSubmit = async() => {
        signUpHooks.setConfirmSignupWaiting(true)
        const result = await handleConfirmSignup({ username, confirmationCode })
        console.log("Result from handleSubmit in Components.tsx: ", result)

        if (result.signUpComplete) {
            try {
                const signInResult = await handleSignIn({ username,password })
                console.log("signInResult from TwoFactorInput: ", signInResult)
                if(signInResult){
                    setTimeout(() => {
                        signUpHooks.setTabValue(3)
                        signUpHooks.setConfirmSignupWaiting(false)
                        signUpHooks.setConfirmSingupConplete(true)
                    },1000)
                }
            } catch (error) {
                console.error('Error in post-TFA workflow:', error)
            }
        }
    }

    

    return (
        <SignUpTabPanel value={signUpHooks.tabValue} index={2}>
            <TextField 
                fullWidth 
                label="TFA Code" 
                variant="standard" 
                autoFocus={signUpHooks.tabValue === 2}
                onChange={(event) => setConfirmationCode(event.target.value)}
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </SignUpTabPanel>
    )
}

/**
 * NameInput Component - Manages the input and validation of a user's full name during the sign-up process.
 * 
 * This component provides an input field for users to enter their full name as part of the sign-up process.
 * Utilizing the `signUpHooks` prop, the component integrates with the broader sign-up form's state management,
 * including validation, error handling, and navigation between sign-up steps. The name input is validated
 * against a predefined pattern to ensure it meets the application's requirements for a full name. If the
 * validation fails, an error message guides the user to enter a valid name format. Upon successful validation,
 * the user is advanced to the next step of the sign-up process.
 * 
 * The component leverages Material-UI components such as FormControl, InputLabel, Input, FormHelperText,
 * and Button to provide a user-friendly interface. The `Done` button within the input's end adornment triggers
 * the validation and state update logic.
 * 
 * @param {Object} props - Component props.
 * @param {any} props.signUpHooks - An object containing various hooks for managing the sign-up process,
 *                                  such as setting the user's name, handling validation errors, and controlling
 *                                  the active tab in the sign-up form.
 * 
 * @returns {JSX.Element} - A controlled input field for the user's full name with integrated validation and
 *                          dynamic feedback provided via FormHelperText.
 */
export const NameInput = ({signUpHooks}:any) => {

    // Validates the name input and updates related states.
    const handleNameInput:any = () => {
        signUpHooks.setNameWaiting(true)
        if (namePattern.test(signUpHooks.name)) {
            setTimeout(() => {
                signUpHooks.setNameComplete(true)
                signUpHooks.setTabValue(4)
                signUpHooks.setNameWaiting(false)
            }, 1000)
        } else{
            signUpHooks.setNameWaiting(false)
            signUpHooks.setError({...signUpHooks.error, name:"Please enter full name. Example: John Doe"})
        }
    }

    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={3}>
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
                            autoFocus={signUpHooks.tabValue === 3}
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

/**
 * ZipInput Component - Manages the input and validation of a user's zip code during the sign-up process.
 * 
 * This component provides a text field for users to input their zip code as part of the sign-up process.
 * It leverages the `signUpHooks` prop for state management, including setting the city and state based on
 * the zip code, displaying loading states, and handling validation errors. The zip code input is validated
 * against a predefined pattern and a list of allowed zip codes to ensure it meets the application's service
 * area requirements. Upon successful validation, city and state information is fetched and displayed, and
 * the user is advanced to the next step of the sign-up process. If the zip code is outside the supported
 * area or if an error occurs during the city/state fetch, an appropriate error message is displayed.
 * 
 * @param {Object} props - Component props.
 * @param {any} props.signUpHooks - An object containing various hooks for managing the sign-up process,
 *                                  such as setting the zip code, city, state, handling validation errors,
 *                                  and controlling the active tab in the sign-up form.
 * 
 * @returns {JSX.Element} - A form section allowing users to input their zip code, with integrated
 *                          validation and dynamic feedback based on the inputted value.
 */
export const ZipInput = ({signUpHooks}:any) => {

    // Fetches city and state information based on the provided zip code.
    const fetchCityStateCall = async(zip:any) => {
        if(zip.length===5){
            try {
                const cityStateCall = await fetchCityState(zip)
                signUpHooks.setCity(cityStateCall.City)
                signUpHooks.setState(cityStateCall.State)
            } catch (error) {
                console.error('Failed to fetch city and state:', error)
                signUpHooks.setCity('')
                signUpHooks.setState('') 
            }
        }
    }

    // Validates the zip code input and updates related states.
    useEffect(() => {  
        if (zipCodePattern.test(signUpHooks.zipCode)) {
            signUpHooks.setLocationWaiting(true)
            if(allowedZipCodes.includes(parseInt(signUpHooks.zipCode))){
                fetchCityStateCall(signUpHooks.zipCode)
                signUpHooks.setError({...signUpHooks.error, zipCode:""})
                setTimeout(() => {
                    signUpHooks.setLocationComplete(true)
                    signUpHooks.setLocationWaiting(false)
                    if(signUpHooks.emailComplete && signUpHooks.passwordComplete && signUpHooks.NameComplete){
                        signUpHooks.setFormComplete(true)  
                    }else{
                        signUpHooks.setFormComplete(false)
                    }
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

    return(
        <SignUpTabPanel value={signUpHooks.tabValue} index={4}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <TextField 
                        id="zip-code-input"
                        fullWidth 
                        label="Zip code" 
                        variant="standard" 
                        placeholder="Zip Code"
                        autoFocus={signUpHooks.tabValue === 4}
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

/**
 * Component representing a tab panel for the SignUp process.
 * 
 * This component displays content based on the current selected tab index. It
 * uses the 'value' prop to determine if it should be visible or hidden.
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components or elements to be rendered within the tab panel
 * @param {number} props.value - The index of the currently active tab
 * @param {number} props.index - The index of this particular tab panel
 */
export function SignUpTabPanel(props:SignUpTabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="SignUpTabPanel"
            hidden={value !== index}
            id={`vertical-SignUpTabPanel-${index}`}
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

/**
 * Component representing an individual item in the SignUp tab.
 * 
 * Displays the tab item with text and optional icons for waiting or completion status.
 * If 'waiting' is true, shows a CircularProgress icon. If 'complete' is true, shows 
 * a CheckCircle icon.
 * 
 * @param {Object} props - Component props
 * @param {string} props.text - Text to display in the tab item
 * @param {boolean} props.waiting - If true, indicates a waiting state
 * @param {boolean} props.complete - If true, indicates a completed state
 */
export const SignUpTabItem: React.FC<SignUpTabItemProps> = ({ text, waiting, complete }) => {
    return (
        <Box textAlign="left" sx={{ display: 'flex', gap: 0.5 }}>
            <Grid container>
                <Grid item xs={10} container>
                    <Typography variant="caption">{text}</Typography>
                </Grid>
                <Grid item xs={2} container justifyContent="flex-end">
                    {waiting && <CircularProgress size={15} />}
                    {complete && <CheckCircle color="success" fontSize="small" />}
                </Grid>
            </Grid>
        </Box>
    )
}

/**
 * Component for displaying the authentication header image.
 * 
 * This is a simple component that renders an image, specifically used in the 
 * authentication header. It has a predefined style for size and display properties.
 */
export const AuthenticationHeaderImage = () => {
    return(
        <img
            src="/NCE Schoolhouse.jpg"
            alt="NCE Schoolhouse"
            style={{ maxWidth: '15%', height: 'auto', display: 'block', margin: 'auto' }}
        />
    )
}
