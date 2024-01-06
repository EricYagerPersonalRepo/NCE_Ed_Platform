import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, Checkbox, Grid, Paper, Typography } from '@mui/material';

function TwoFactorAuthForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usePhone, setUsePhone] = useState(false);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        // Form submit logic here
        console.log({ password, confirmPassword, usePhoneFor2FA: usePhone });
    };

    return (
        <Paper style={{ padding: 20 }}>
            <Typography variant="h6">Sign Up Form</Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="Confirm Password"
                            type="password"
                            fullWidth
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Grid>
                    <Grid item>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={usePhone}
                                    onChange={(e) => setUsePhone(e.target.checked)}
                                />
                            }
                            label="Opt-in for phone 2FA"
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default TwoFactorAuthForm;

