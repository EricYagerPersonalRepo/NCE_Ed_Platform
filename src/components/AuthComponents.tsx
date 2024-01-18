import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Grid, Paper, Typography, Container, Modal, Box, CircularProgress } from '@mui/material'
import { tfaModalStyle } from '@/styles/AuthStyles'
//import { handleConfirmSignup } from '../functions/AuthFunctions';
import { SignUpTabItemProps, SignUpTabPanelProps } from '../types/SignUpTypes';
import { CheckCircle } from '@mui/icons-material';

/**
 * Component for handling two-factor authentication (TFA).
 * 
 * This component presents a form for users to enter their TFA code. It takes
 * the username, a callback function 'onTfaSuccess', and a function to handle
 * the confirmation of the signup process. On successful verification of the 
 * TFA code, it triggers the 'onTfaSuccess' callback.
 * 
 * @param {Object} props - Component props
 * @param {string} props.username - The username of the user
 * @param {Function} props.onTfaSuccess - Callback function to execute on successful TFA
 * @param {Function} props.handleConfirmSignup - Function to confirm user signup
 */
export function TwoFactorAuthForm({ username, onTfaSuccess, handleConfirmSignup }: { username: string, onTfaSuccess: () => void, handleConfirmSignup:any }) { //export function TwoFactorAuthForm({ username, onTfaSuccess, handleConfirmSignup }) {
    const [confirmationCode, setConfirmationCode] = useState('')

    const handleSubmit = async () => {
        const result = await handleConfirmSignup({ username, confirmationCode });
        if (result.signUpComplete) {
          onTfaSuccess();
        }
    }

    return (
        <Box sx={tfaModalStyle}>
            <Typography id="modal-title" variant="h6" component="h2">
                Two-Factor Authentication
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextField 
                            fullWidth 
                            label="TFA Code" 
                            variant="standard" 
                            onChange={(event) => setConfirmationCode(event.target.value)}
                        />
                    </Grid>
                </Grid>
            </Typography>
            <Button onClick={handleSubmit}>Submit</Button>
        </Box>
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

