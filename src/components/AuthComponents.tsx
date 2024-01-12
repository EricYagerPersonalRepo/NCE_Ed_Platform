import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Grid, Paper, Typography, Container, Modal, Box, CircularProgress } from '@mui/material'
import { tfaModalStyle } from '@/styles/AuthStyles'
import { handleConfirmSignup } from '../functions/AuthFunctions';
import { SignUpTabItemProps, SignUpTabPanelProps } from '../types/SignUpTypes';
import { CheckCircle } from '@mui/icons-material';

export function TwoFactorAuthForm({ username, onTfaSuccess }: { username: string, onTfaSuccess: () => void }) {
    const [confirmationCode, setConfirmationCode] = useState('')

    const handleSubmit = async () => {
        const result = await handleConfirmSignup({ username, confirmationCode });
        if (result.signUpComplete) {
            onTfaSuccess()
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

export const AuthenticationHeaderImage = () => {
    return(
        <img
            src="/NCE Schoolhouse.jpg"
            alt="NCE Schoolhouse"
            style={{ maxWidth: '15%', height: 'auto', display: 'block', margin: 'auto' }}
        />
    )
}

