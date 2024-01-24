import React, { useEffect, useRef } from 'react'
import {  Grid, Container, Tabs, Tab, Modal } from '@mui/material'
import { allowedZipCodes } from '@/src/functions/SignUpFunctions'
import { SignUpTabItem, TwoFactorAuthForm } from '@/src/components/AuthComponents'
import { zipCodePattern } from '@/src/types/SignUpTypes'
import { fetchCityState, handleConfirmSignup, handleCreateStudentProfile, handleSignIn } from '@/src/functions/AuthFunctions'
import { useSignUpHooks } from '@/src/state/SignUpHooks'
import { BirthdayInput, EmailInput, NameInput, PasswordInput, ZipInput } from './Components'

const WebSignUp = () => {

    const signUpHooks = useSignUpHooks()
    const dateInputRef:any = useRef(null)

    // Handles tab changes in the sign-up form.
    const handleTabChange:any = (event:any,newValue:number) => {
        signUpHooks.setTabValue(newValue)
    }

/**
 * Zip Code functions
 */

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

/**
 * Amplify/Cognito Sign Up Workflow
 * Workflow handles initial sign up, TFA, sign in, and createUser
 */

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

/**
 * Component Side Effects
**/

    // If we're in tab zero and the current ref is the date input, focus on it.
    // TextField inputs contain focus functionality but date doesn't
    useEffect(() => {
        if (signUpHooks.tabValue === 0 && dateInputRef.current) {
            // Manually set the focus on the input field
            dateInputRef.current.focus()
        }
    }, [signUpHooks.tabValue])



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
                        <BirthdayInput
                            signUpHooks={signUpHooks} 
                        />
                        <NameInput 
                            signUpHooks={signUpHooks} 
                        />
                        <EmailInput
                            signUpHooks={signUpHooks} 
                        />
                        <ZipInput
                            signUpHooks={signUpHooks}
                        />
                        <PasswordInput
                            signUpHooks={signUpHooks}
                        /> 
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