import React, { useEffect } from 'react'
import { Container, Grid, Modal } from '@mui/material'
import { EmailInput, NameInput, PasswordInput, ZipInput, TwoFactorInput } from './Components'
import { useSignUpHooks } from '@/src/state/SignUpHooks'
import { handleConfirmSignup } from '@/src/functions/SignUp'

/**
 * MobileSignUp Component - Manages the sign-up process for mobile users with a step-by-step navigation approach.
 * 
 * This component leverages the `useSignUpHooks` custom hook to manage state across different steps of the sign-up
 * process, such as name, location, email, and password input. It uses a conditional rendering strategy
 * based on the current tab value to display only the relevant input component for the current step, creating a
 * linear and focused sign-up experience.
 * 
 * The useEffect hook within this component monitors the completion state of each step and automatically advances
 * the user to the next step upon completion, ensuring a smooth progression through the sign-up process without
 * manual navigation required by the user.
 * 
 * A Modal component is conditionally rendered when two-factor authentication (TFA) is required, providing an
 * additional security layer during the sign-up process. This modal presents the TwoFactorInput to the user,
 * facilitating the TFA verification.
 * 
 * @returns {JSX.Element} - A containerized sign-up form with conditional rendering based on the current sign-up
 *                          step, optimized for mobile users with automatic step advancement and a TFA modal.
 */
const MobileSignUp = () => {
    const signUpHooks = useSignUpHooks()

    // Automatically advance to the next step when the current step is completed
    useEffect(() => {
        if (signUpHooks.emailComplete && signUpHooks.tabValue === 0) {
            signUpHooks.setTabValue(1)
        }else if(signUpHooks.passwordComplete && signUpHooks.tabValue===1)
            signUpHooks.setTabValue(2)
        if (signUpHooks.nameComplete && signUpHooks.tabValue === 2) {
            signUpHooks.setTabValue(3)
        } else if (signUpHooks.locationComplete && signUpHooks.tabValue === 3) {
            signUpHooks.setTabValue(3)
        } 

    }, [signUpHooks, signUpHooks.passwordComplete, signUpHooks.emailComplete, signUpHooks.nameComplete, signUpHooks.locationComplete])

    return (
        <Container maxWidth="lg"  id="sign-up">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    {signUpHooks.tabValue === 1 && <NameInput signUpHooks={signUpHooks} />}
                    {signUpHooks.tabValue === 2 && <ZipInput signUpHooks={signUpHooks} />}
                    {signUpHooks.tabValue === 3 && <EmailInput signUpHooks={signUpHooks} />}
                    {signUpHooks.tabValue === 4 && <PasswordInput signUpHooks={signUpHooks} />}
                </Grid>
            </Grid>
            
        </Container>
    )
}

export default MobileSignUp


/**
 * <Modal
                open={signUpHooks.tfaOpen}
                onClose={() => signUpHooks.setTfaOpen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <TwoFactorInput signUpHooks={signUpHooks} handleConfirmSignup={handleConfirmSignup}/>
            </Modal>
 */
