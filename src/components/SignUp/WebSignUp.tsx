import React, { useEffect, useRef } from 'react'
import {  Grid, Container, Tabs, Tab, Modal } from '@mui/material'
import { handleConfirmSignup } from '@/src/functions/AuthFunctions'
import { useSignUpHooks } from '@/src/state/SignUpHooks'
import { BirthdayInput, EmailInput, NameInput, PasswordInput, ZipInput,  SignUpTabItem, TwoFactorAuthForm } from './Components'

/**
 * WebSignUp Component - Manages the entire sign-up process for web users through a multi-step form.
 * 
 * This component orchestrates the sign-up process using a series of tabs to navigate through different
 * sign-up steps: Age, Name, Location, Email, and Account Creation. Each step is represented by a tab item,
 * and the user progresses linearly through these steps by completing each section's requirements. The form
 * leverages the `useSignUpHooks` custom hook for state management across the steps, including tracking the
 * completion status of each step, managing user inputs, and handling two-factor authentication (TFA) as part
 * of the sign-up process.
 * 
 * Conditional rendering based on the current tab value ensures that only the relevant input component is
 * displayed to the user. The component also manages focus behavior for enhanced usability, automatically
 * focusing on the date input field when relevant. A modal for two-factor authentication is presented when
 * required during the sign-up process.
 * 
 * @returns {JSX.Element} - A containerized sign-up form with tab navigation for different sign-up steps,
 *                          integrating various input components and a TFA modal.
 */
const WebSignUp = () => {
    const signUpHooks = useSignUpHooks()
    const dateInputRef:any = useRef(null)

    const handleTabChange:any = (event:any,newValue:number) => {
        signUpHooks.setTabValue(newValue)
    }

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
        }else{
            signUpHooks.setFormComplete(false)
        }
    }, [signUpHooks.birthdayComplete, signUpHooks.nameComplete, signUpHooks.locationComplete, signUpHooks.emailComplete])


    return (
        <Container maxWidth="lg" id="sign-up">
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
                    <TwoFactorAuthForm signUpHooks={signUpHooks} handleConfirmSignup={handleConfirmSignup} />
                </Modal>
            </Container>
        </Container>
    )
}

export default WebSignUp