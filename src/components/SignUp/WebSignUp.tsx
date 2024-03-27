import React, { useEffect, useState } from 'react'
import {  Grid, Container, Tabs, Tab, Modal, Button } from '@mui/material'
import { useSignUpHooks } from '@/src/state/SignUpHooks'
import { EmailInput, NameInput, PasswordInput, ZipInput,  SignUpTabItem, TwoFactorInput } from './Components'
import { handleCreateStudentProfile } from '@/src/functions/AuthX'
import { CreateNCEStudentProfileInput, StudentStatus } from '@/src/API'

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
const WebSignUp = ({router}) => {
    const signUpHooks = useSignUpHooks()
    const [signUpButtonVisible, setSignUpButtonVisible] = useState(false)

    const handleTabChange:any = (event:any) => {
        console.log(event)
        String(event.target.innerHTML).includes("Email") && signUpHooks.setTabValue(0)
        String(event.target.innerHTML).includes("Set Password") && signUpHooks.setTabValue(1)
        String(event.target.innerHTML).includes("Confirm Signup") && signUpHooks.setTabValue(2)
        String(event.target.innerHTML).includes("Name") && signUpHooks.setTabValue(3)
        String(event.target.innerHTML).includes("Location") && signUpHooks.setTabValue(4)
    }

    // Updates the form's completion status based on the completion of individual steps.
    useEffect(()=> {
        if(signUpHooks.nameComplete && signUpHooks.locationComplete){
            signUpHooks.setFormComplete(true)
        }else{
            signUpHooks.setFormComplete(false)
        }
    }, [signUpHooks.nameComplete, signUpHooks.locationComplete])

    useEffect(()=>{
        if(signUpHooks.formComplete){
            setSignUpButtonVisible(true)
        }
    }, [signUpHooks.formComplete])

    const onSignUpButtonClick = async() => {
        const studentProfileInput: CreateNCEStudentProfileInput = {
            id: signUpHooks.id,
            name: signUpHooks.name,
            email: signUpHooks.username,
            status: StudentStatus.ACTIVE,
            notificationsEnabled: true,
            darkModeEnabled: false,
            language: "en",
            isAdmin: false,
        }
        
        console.log(studentProfileInput)

        try{

            let studentProfileCreateCall = await handleCreateStudentProfile(studentProfileInput)

            if(studentProfileCreateCall.isSignedUp === true){
                router.push('/')
            }
        }
        catch(error){
            console.error(error)
        }
    }


    return (
        <Container maxWidth="lg" id="sign-up">
            <Grid container spacing={2}>
                <Grid item xs={12} container justifyContent="center">
                    <Tabs
                        orientation="horizontal"
                        variant="scrollable"
                        value={signUpHooks.tabValue}
                        onChange={(event)=>handleTabChange(event)}
                        aria-label="Vertical tabs for sign up"
                        sx={{ borderRight: 1, borderColor: 'divider', '.MuiTabs-flexContainer': { alignItems: 'flex-start' } }}
                    >
                        <Tab
                            label={<SignUpTabItem text="Email" 
                                waiting={signUpHooks.emailWaiting} 
                                complete={signUpHooks.emailComplete} 
                            /> }
                        />    
                        <Tab
                            label={ <SignUpTabItem text="Set Password" 
                                waiting={signUpHooks.signupWaiting} 
                                complete={signUpHooks.signupComplete} 
                            /> }
                            id="SignUp_Password_Input_Web"
                        />
                        <Tab
                            label={ <SignUpTabItem text="Confirm Signup" 
                                waiting={signUpHooks.confirmSignupWaiting } 
                                complete={signUpHooks.confirmSignupComplete}
                            /> }
                        />
                        <Tab
                            label={<SignUpTabItem text="Name" 
                                waiting={signUpHooks.nameWaiting} 
                                complete={signUpHooks.nameComplete} 
                            />}
                        />
                        <Tab
                            label={ <SignUpTabItem text="Location" 
                                waiting={signUpHooks.locationWaiting} 
                                complete={signUpHooks.locationComplete} 
                            /> }
                        />
                    </Tabs>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <form>
                        <EmailInput
                            signUpHooks={signUpHooks} 
                        />
                        <PasswordInput
                            signUpHooks={signUpHooks}
                        /> 
                        <TwoFactorInput 
                            signUpHooks={signUpHooks} 
                        />
                        <NameInput 
                            signUpHooks={signUpHooks} 
                        />
                        <ZipInput
                            signUpHooks={signUpHooks}
                        />
                    </form>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    {signUpButtonVisible && <Button onClick={onSignUpButtonClick}>Sign Up</Button>}
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default WebSignUp