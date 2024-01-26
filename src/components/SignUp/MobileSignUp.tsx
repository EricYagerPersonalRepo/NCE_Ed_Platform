import React, { useEffect } from 'react'
import { Container, Grid, Modal } from '@mui/material'
import { BirthdayInput, EmailInput, NameInput, PasswordInput, ZipInput, TwoFactorAuthForm } from './Components'
import { useSignUpHooks } from '@/src/state/SignUpHooks'
import { handleConfirmSignup } from '@/src/functions/AuthFunctions'

const MobileSignUp = () => {
    const signUpHooks = useSignUpHooks()

    // Automatically advance to the next step when the current step is completed
    useEffect(() => {
        if (signUpHooks.birthdayComplete && signUpHooks.tabValue === 0) {
            signUpHooks.setTabValue(1)
        } else if (signUpHooks.nameComplete && signUpHooks.tabValue === 1) {
            signUpHooks.setTabValue(2)
        } else if (signUpHooks.locationComplete && signUpHooks.tabValue === 2) {
            signUpHooks.setTabValue(3)
        } else if (signUpHooks.emailComplete && signUpHooks.tabValue === 3) {
            signUpHooks.setTabValue(4)
        }
        // Add any other conditions as needed for further steps
    }, [signUpHooks, signUpHooks.birthdayComplete, signUpHooks.nameComplete, signUpHooks.locationComplete, signUpHooks.emailComplete])

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    {signUpHooks.tabValue === 0 && <BirthdayInput signUpHooks={signUpHooks} />}
                    {signUpHooks.tabValue === 1 && <NameInput signUpHooks={signUpHooks} />}
                    {signUpHooks.tabValue === 2 && <ZipInput signUpHooks={signUpHooks} />}
                    {signUpHooks.tabValue === 3 && <EmailInput signUpHooks={signUpHooks} />}
                    {signUpHooks.tabValue === 4 && <PasswordInput signUpHooks={signUpHooks} />}
                </Grid>
            </Grid>
            <Modal
                open={signUpHooks.tfaOpen}
                onClose={() => signUpHooks.setTfaOpen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <TwoFactorAuthForm username={signUpHooks.username} signUpHooks={signUpHooks} handleConfirmSignup={handleConfirmSignup}/>
            </Modal>
        </Container>
    )
}

export default MobileSignUp
