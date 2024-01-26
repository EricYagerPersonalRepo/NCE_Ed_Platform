import React, { useEffect, useRef } from 'react'
import {  Grid, Container, Tabs, Tab, Modal } from '@mui/material'
import { allowedZipCodes } from '@/src/functions/SignUpFunctions'
import { zipCodePattern } from '@/src/types/SignUpTypes'
import { fetchCityState, handleConfirmSignup } from '@/src/functions/AuthFunctions'
import { useSignUpHooks } from '@/src/state/SignUpHooks'
import { BirthdayInput, EmailInput, NameInput, PasswordInput, ZipInput,  SignUpTabItem, TwoFactorAuthForm } from './Components'
import { handlePostTfaWorkflow } from './Functions'

handlePostTfaWorkflow
const WebSignUp = () => {

    const signUpHooks = useSignUpHooks()
    const dateInputRef:any = useRef(null)

    // Handles tab changes in the sign-up form.
    const handleTabChange:any = (event:any,newValue:number) => {
        signUpHooks.setTabValue(newValue)
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
                    <TwoFactorAuthForm username={signUpHooks.username} signUpHooks={signUpHooks} handleConfirmSignup={handleConfirmSignup} />
                </Modal>
            </Container>
        </Container>
    )
}

export default WebSignUp