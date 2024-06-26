import { useState } from 'react'

/**
 * Interface for defining the error states in the sign-up form.
 * 
 * This interface is used to type the errors state in the sign-up form. It can hold multiple error messages,
 * where each key corresponds to a form field and the value is the error message for that field.
 */
interface SignUpFormErrors {
    [key: string]: string
}

/**
 * Custom hook to manage state in the sign-up form.
 * 
 * This hook centralizes the state management for the sign-up form, including user inputs and validation states.
 * It provides a set of state variables and functions to update them, which can be used across the sign-up form components.
 * 
 * @returns {object} An object containing state variables and their corresponding setter functions.
 */
export const useSignUpHooks = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [username, setUsername] = useState('')
    const [state, setState] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [age, setAge] = useState(0)
    const [status,setStatus] = useState("INACTIVE")
    const [confirmSignupComplete, setConfirmSingupConplete] = useState(false)
    const [nameComplete, setNameComplete] = useState(false)
    const [locationComplete, setLocationComplete] = useState(false)
    const [emailComplete, setEmailComplete] = useState(false)
    const [passwordComplete, setPasswordComplete] = useState(false)
    const [nameWaiting, setNameWaiting] = useState(false)
    const [locationWaiting, setLocationWaiting] = useState(false)
    const [confirmSignupWaiting, setConfirmSignupWaiting] = useState(false)
    const [emailWaiting, setEmailWaiting] = useState(false)
    const [passwordWaiting,setPasswordWaiting] = useState(false)
    const [signupWaiting, setSignupWaiting] = useState(false)
    const [signupComplete, setSignupComplete] = useState(false)
    const [tabValue, setTabValue] = useState(0)
    const [formComplete, setFormComplete] = useState(false)
    const [userSignedIn, setUserSignedIn] = useState(false)
    const [error, setError] = useState<SignUpFormErrors>({})

    // You can also include any functions that update these states here.

    return {
        id, setId,
        name, setName,
        city, setCity,
        zipCode, setZipCode,
        username, setUsername,
        state, setState,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        showPassword, setShowPassword,
        showConfirmPassword, setShowConfirmPassword,
        age, setAge,
        status,setStatus,
        confirmSignupComplete, setConfirmSingupConplete,
        nameComplete, setNameComplete,
        locationComplete, setLocationComplete,
        emailComplete, setEmailComplete,
        passwordComplete, setPasswordComplete,
        nameWaiting, setNameWaiting,
        locationWaiting, setLocationWaiting,
        emailWaiting, setEmailWaiting,
        passwordWaiting,setPasswordWaiting,
        confirmSignupWaiting, setConfirmSignupWaiting,
        signupWaiting, setSignupWaiting,
        signupComplete, setSignupComplete,
        tabValue, setTabValue,
        formComplete, setFormComplete,
        userSignedIn, setUserSignedIn,
        error, setError,
    }
}
