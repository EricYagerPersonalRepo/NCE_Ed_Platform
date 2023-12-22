import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, Container, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton, Tabs, Tab, Box } from '@mui/material'
import StateSelector from '@/src/components/SignUpComponents'
import { AddressInput, CreateStudentProfileInput } from '@/src/API'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface FormErrors {
    birthday?: string;
    firstName?: string;
    lastName?: string;
    streetAddress?: string;
    city?: string;
    zipCode?: string;
    email?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
  }

  const allowedZipCodes = [
    13642,
    13630,
    13617,
    13676,
    13699
  ]

  function TabPanel(props:any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


function SignUp() {
    const [birthday, setBirthday] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [state, setstate] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<FormErrors>({});
    const [workflowType, setWorkflowType] = useState(1)
    const [age, setAge] = useState(0)
    const [birthdayComplete, setBirthdayComplete] = useState(false)

    const [tabValue, setTabValue] = useState(0);

    const handleClickShowPassword = (target:number) => {
        if(target===1) setShowPassword((show) => !show)
        if(target===2) setShowConfirmPassword((showConfirm) => !showConfirm)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    // Regex pattern for validation
    const birthdayPattern = /^\d{4}-\d{2}-\d{2}$/;
    const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/
    const streetPattern = /^[A-Za-z0-9\s,'-]*$/
    const cityPattern = /^[A-Za-z\s,'-]*$/
    const zipCodePattern = /^\d{5}(-\d{4})?$/
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/


    const fetchCityState = async (zip:any) => {
        if(zip.length===5){
            try {
                const response = await fetch(`http://api.zippopotam.us/us/${zip}`);
                if (!response.ok) throw new Error('Zip code not found');
                const data = await response.json();
                setCity(data.places[0]['place name']);
                setstate(data.places[0]['state']);
                console.log(data)
            } catch (error) {
                console.error('Failed to fetch city and state:', error);
                // Handle errors, such as clearing city and state fields
                setCity('');
                setstate('');
            }
        }
    };

    useEffect(() => {
        if (zipCodePattern.test(zipCode)) {
            fetchCityState(zipCode);
        } else{
            setCity('');
            setstate('');
        }
    }, [zipCode]);

    const handleSubmit:any = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let errors: FormErrors = {};

        if(!birthdayPattern.test(birthday)) {
            console.error('Invalid birthday')
            errors.birthday = 'Invalid birthday'
        }

        if (!namePattern.test(firstName)) {
            console.error('Invalid first name')
            errors.firstName = 'Invalid first name';
        }

        if (!namePattern.test(lastName)) {
            console.error('Invalid last name')
            errors.lastName = 'Invalid last name';
        }

        if (!streetPattern.test(streetAddress)) {
            console.error('Invalid street address')
            errors.streetAddress = 'Invalid Street Address'
        }

        if (!cityPattern.test(city)) {
            console.error('Invalid city')
            errors.streetAddress = 'Invalid City'
        }

        if (!zipCodePattern.test(zipCode)) {
            console.error('Invalid zip code')
            errors.streetAddress = 'Invalid Zip Code'
        }

        if (!phonePattern.test(phone)) {
            console.error('Invalid phone number');
            errors.phone = 'Invalid phone number'
        }

        if (password !== confirmPassword) {
            console.error('Passwords do not match')
            errors.password = 'Passwords do not match'
        }

        if (Object.keys(errors).length > 0) {
            setError(errors)
            return
        }

        // const address: AddressInput = {
        //     city: city,
        //     state: state,
        //     zipCode: zipCode,
        // }

        // const studentProfile: CreateStudentProfileInput = {
        //     firstName: firstName,
        //     email: email,
        //     phone: phone,
        //     password: password,
        // }

        //console.log(studentProfile, address) //Standing in for the actual API call for now. That will be last
    }

    const handleTabChange:any = (event:any,newValue:number) => {
        setTabValue(newValue)
    }

    const handleBirthdayInput:any = (event:any) => {
        const birthdayValue = event.target.value;
        const birthday = new Date(birthdayValue);
        const today = new Date();

        // Calculate age
        let age = today.getFullYear() - birthday.getFullYear();
        const m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }

        console.log("age: ", age)

        if(age<100){
            setBirthday(birthdayValue)
            setAge(age)
            setBirthdayComplete(true)
            if(age>=16){
                setWorkflowType(2)
            }else{
                setWorkflowType(1)
            }
        } else {
            setBirthdayComplete(false)
        }
    }



    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={3} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="/NCE Schoolhouse.jpg"
                        alt="NCE Schoolhouse"
                        style={{ maxWidth: '15%', height: 'auto', display: 'block', margin: 'auto' }}
                    />
                </Grid>
                <Grid item xs={3} md={3}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="Vertical tabs for sign up"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab 
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    Birthday
                                    {birthdayComplete && <CheckCircleIcon color="success" />}
                                </Box>
                            }
                        />
                        <Tab label="Personal Information" />
                        <Tab label="Contact Information" />
                        <Tab label= "Create Account" />
                    </Tabs>
                </Grid>
                <Grid item xs={6} md={6}>
                    <form>
                        <TabPanel value={tabValue} index={0}>
                            {/* Birthday Input */}
                            <TextField
                                fullWidth
                                type="date"
                                label="Birthday"
                                InputLabelProps={{ shrink: true }}
                                onChange={handleBirthdayInput} // Update your state hook for birthday
                            />
                            <div>{age} {birthday} {workflowType} {birthdayComplete ? "complete": "not complete"}</div>
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <Grid container spacing={2}>
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

                                <Grid item xs={12} sm={4}>
                                    <TextField 
                                        fullWidth 
                                        label="Zip code" 
                                        variant="standard" 
                                        onChange={(e) => setZipCode(e.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label = {city}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label = {state}
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
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
                        </TabPanel>
                        <TabPanel value={tabValue} index={3}>
                            <Grid item xs={6}>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={e=>handleClickShowPassword(1)}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        onChange={((e)=>setConfirmPassword(e.target.value))}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={e=>handleClickShowPassword(2)}
                                                onMouseDown={handleMouseDownPassword}
                                                >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </TabPanel>



                    </form>
                </Grid>

            </Grid>
        </Container>
    )
}

export default SignUp


/*


<Grid item xs={12} sm={4}>
    <TextField 
        fullWidth 
        label="City" 
        variant="standard"
        onChange={(e) => setCity(e.target.value)}
    />
</Grid>

<Grid item xs={12} sm={4}>
    <StateSelector 
        state={state} 
        setstate={setstate} 
    />
</Grid>



*/
