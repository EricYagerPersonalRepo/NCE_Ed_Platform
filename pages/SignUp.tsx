import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, Container, Typography, FormControl, InputLabel, Input, InputAdornment, IconButton, Tabs, Tab, Box, FormHelperText, CircularProgress, Checkbox } from '@mui/material'
import StateSelector from '@/src/components/SignUpComponents'
import { CreateStudentProfileInput } from '@/src/API'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ageCaluclatedFromInputBirthday } from '@/src/functions/SignUpFunctions'
import { ErrorOutline } from '@mui/icons-material'
import StudentProfileCreateForm from '@/src/ui-components/StudentProfileCreateForm'


interface FormErrors {
    birthday?: string;
    name?: string;
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
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [state, setstate] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<FormErrors>({})
    const [age, setAge] = useState(0)
    const [birthdayComplete, setBirthdayComplete] = useState(false)
    const [nameComplete, setNameComplete] = useState(false)
    const [locationComplete, setLocationComplete] = useState(false)
    const [emailComplete, setEmailComplete] = useState(false)
    const [birthdayWaiting, setBirthdayWaiting] = useState(false)
    const [nameWaiting, setNameWaiting] = useState(false)
    const [locationWaiting, setLocationWaiting] = useState(false)
    const [emailWaiting, setEmailWaiting] = useState(false)

    const [tabValue, setTabValue] = useState(0);

    const handleClickShowPassword = (target:number) => {
        if(target===1) setShowPassword((show) => !show)
        if(target===2) setShowConfirmPassword((showConfirm) => !showConfirm)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    // Regex pattern for validation
    const birthdayPattern = /^(19[0-9][1-9]|20[0-9]{2})-\d{2}-\d{2}$/
    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)+$/
    const streetPattern = /^[A-Za-z0-9\s,'-]*$/
    const cityPattern = /^[A-Za-z\s,'-]*$/
    const zipCodePattern = /^\d{5}(-\d{4})?$/
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const fetchCityState = async(zip:any) => {
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
                setCity('');
                setstate('');
            }
        }
    }

    

    useEffect(() => {
        console.log(error)
    }, [])

    const handleSubmit:any = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let errors: FormErrors = {};

        if (!zipCodePattern.test(zipCode)) {
            console.error('Invalid zip code')
            errors.streetAddress = 'Invalid Zip Code'
            setTabValue(2)
            return
        }

        if (password !== confirmPassword) {
            console.error('Passwords do not match')
            errors.password = 'Passwords do not match'
            return
        }

        if (Object.keys(errors).length > 0) {
            setError(errors)
            return
        }

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

    const handleBirthdayChange = (event:any) => {
        const newBirthday = event.target.value
        setBirthday(newBirthday);
    }
    
    const handleNameInput:any = () => {
        setNameWaiting(true)
        if (namePattern.test(name)) {
            setTimeout(() => {
                setNameComplete(true)
                setTabValue(tabValue + 1)
                setNameWaiting(false)
            }, 1000)
        } else{
            setNameWaiting(false)
            setError({...error, name:"Please enter full name. Example: John Doe"})
        }
    }

    const handleEmailInput:any = () => {
        setEmailWaiting(true)
        if (emailPattern.test(email)) {
            setTimeout(() => {
                setEmailComplete(true)
                setTabValue(tabValue + 1)
                setEmailWaiting(false)
            }, 1000)
        } else{
            setEmailWaiting(false)
            setError({...error, email:"Please enter a valid email address. Example: joe@example.com"})
        }
    }

    useEffect(() => {
        if (zipCodePattern.test(zipCode)) {
            setLocationWaiting(true)
            if(allowedZipCodes.includes(parseInt(zipCode))){
                fetchCityState(zipCode)
                setError({...error, zipCode:""})
                setTimeout(() => {
                    setLocationComplete(true)
                    setTabValue(tabValue+1)
                    setLocationWaiting(false)
                }, 1000)
            }else{
                setLocationWaiting(false)
                setError({...error, zipCode:"Zip code outside supported area. Contact info@northcountryengineer.com for more information."})
            }
        } else{
            setCity('');
            setstate('');
        }
    }, [zipCode])

    useEffect(() => {
        if(birthdayPattern.test(birthday)){
            console.log(birthday)
            let age = ageCaluclatedFromInputBirthday(birthday)
            setBirthdayWaiting(true)
            if (age < 16) {
                setError({ ...error, birthday: "You must be at least 16 years old to sign up." })
                setBirthdayComplete(false);
            } else if (age < 100) {
                setAge(age)
                setTimeout(() => {
                    setBirthdayComplete(false)
                    setTabValue(tabValue + 1)
                    setBirthdayWaiting(false)
                    setBirthdayComplete(true)
                }, 1000)
            } else {
                setBirthdayComplete(false)
            }
        }
    }, [birthday])

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={3} md={12} 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center'
                    }}
                >                   
                <img
                    src="/NCE Schoolhouse.jpg"
                    alt="NCE Schoolhouse"
                    style={{ maxWidth: '15%', height: 'auto', display: 'block', margin: 'auto' }}
                />
                </Grid>
                <Grid item xs={3}>
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
                                    Age
                                    {birthdayWaiting && <CircularProgress size={20} />}
                                    {birthdayComplete && <CheckCircleIcon color="success" />}
                                </Box>
                            }
                        />
                        <Tab
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5}}>
                                    Name
                                    {nameWaiting && <CircularProgress size={20} />}
                                    {nameComplete && <CheckCircleIcon color="success" />}
                                </Box>
                            }
                        />
                        <Tab 
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5}}>
                                    Location
                                    {locationWaiting && <CircularProgress size={20} />}
                                    {locationComplete && <CheckCircleIcon color="success" />}
                                </Box>
                            }
                            
                        />

                        <Tab 
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5}}>
                                    Email Address
                                    {emailWaiting && <CircularProgress size={20} />}
                                    {emailComplete && <CheckCircleIcon color="success" />}
                                </Box>
                            }
                            
                        />
                        <Tab label="Create Account" />
                    </Tabs>
                </Grid>
                <Grid item xs={9}>
                    <form>
                        <TabPanel value={tabValue} index={0}>
                            <TextField
                                fullWidth
                                type="date"
                                label="Birthday"
                                InputLabelProps={{ shrink: true }}
                                onChange={handleBirthdayChange}
                                value={birthday}
                                error={!!error.birthday}
                            />

                            {error.birthday && (
                                <FormHelperText error>{error.birthday}</FormHelperText>
                            )}
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {error.name ? 
                                        <FormControl error fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-noerror">Name</InputLabel>
                                            <Input
                                                id="standard-adornment-name-noerror"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                aria-describedby="component-error-text"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleNameInput}
                                                        >
                                                            Done
                                                        </Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                    :

                                        <FormControl fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-error">Name</InputLabel>
                                            <Input
                                                id="standard-adornment-name-error"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleNameInput}
                                                        >Done</Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        
                                        </FormControl>
                                    }
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <TextField 
                                        fullWidth 
                                        label="Zip code" 
                                        variant="standard" 
                                        onChange={(event) => setZipCode(event.target.value)}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label={city+", "+state}
                                        variant="standard"
                                        error={!!error.zipCode}
                                        InputProps={{
                                            endAdornment: error.zipCode && (
                                                <InputAdornment position="end">
                                                    <ErrorOutline color="error" />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {error.zipCode && (
                                        <FormHelperText error>{error.zipCode}</FormHelperText>
                                    )}
                                </Grid>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={tabValue} index={3}>
                            <Grid item xs={12}>
                            {error.name ? 
                                        <FormControl error fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-noerror">Email</InputLabel>
                                            <Input
                                                id="standard-adornment-name-noerror"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                aria-describedby="component-error-text"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleEmailInput}
                                                        >
                                                            Done
                                                        </Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                    :

                                        <FormControl fullWidth variant="standard">
                                            <InputLabel htmlFor="standard-adornment-name-error">Email</InputLabel>
                                            <Input
                                                id="standard-adornment-name-error"
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <Button
                                                            onClick={handleEmailInput}
                                                        >Done</Button>
                                                    </InputAdornment>
                                                }
                                            />
                                        
                                        </FormControl>
                                    }
                            </Grid>
                        </TabPanel>

                        <TabPanel value={tabValue} index={4}>
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
