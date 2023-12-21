import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';
import StateSelector from '@/src/components/SignUpComponents';

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleSubmit = async (event:any) => {
        event.preventDefault();

        // Construct the address object
        const address = {
            street: streetAddress,
            city: city,
            state: selectedState,
            zipCode: zipCode,
        };

        // Construct the student profile object
        const studentProfile = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address,
            phone: phone,
            password: password,
            // You would include phone if your model supports it
        };

        console.log(studentProfile, address)

        // Here you would call the mutation to create the StudentProfile
        // using your GraphQL API, for example:
        // await createStudentProfile(studentProfile);

        // After submission, you may want to clear the form or give feedback to the user
    };


    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={12} style={{height:"10%"}} />
                            <Typography variant="h4" gutterBottom>
                                Student Information
                            </Typography>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    fullWidth 
                                    label="First name" 
                                    variant="standard"  
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    fullWidth 
                                    label="Last name" 
                                    variant="standard" 
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    label="Street address" 
                                    variant="standard"
                                    onChange={(e) => setStreetAddress(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    fullWidth 
                                    label="City" 
                                    variant="standard"
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField 
                                    fullWidth 
                                    label="Zip code" 
                                    variant="standard" 
                                    onChange={(e) => setZipCode(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <StateSelector 
                                    selectedState={selectedState} 
                                    setSelectedState={setSelectedState} 
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    label="Email address" 
                                    variant="standard"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    fullWidth 
                                    label="Phone number" 
                                    variant="standard"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth
                                    onClick={handleSubmit}
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="/NCE Schoolhouse.jpg"
                        alt="NCE Schoolhouse"
                        style={{ maxWidth: '75%', height: 'auto', display: 'block', margin: 'auto' }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default SignUp;
