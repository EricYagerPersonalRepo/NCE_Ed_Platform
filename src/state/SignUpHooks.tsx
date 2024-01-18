// src/hooks/useSignUpHooks.tsx
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
    const [birthday, setBirthday] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [username, setUsername] = useState('')
    const [state, setState] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [error, setError] = useState<SignUpFormErrors>({})
    const [age, setAge] = useState(0)
    const [birthdayComplete, setBirthdayComplete] = useState(false)
    const [nameComplete, setNameComplete] = useState(false)
    const [locationComplete, setLocationComplete] = useState(false)
    const [emailComplete, setEmailComplete] = useState(false)
    const [birthdayWaiting, setBirthdayWaiting] = useState(false)
    const [nameWaiting, setNameWaiting] = useState(false)
    const [locationWaiting, setLocationWaiting] = useState(false)
    const [emailWaiting, setEmailWaiting] = useState(false)
    const [signupWaiting, setSignupWaiting] = useState(false)
    const [signupComplete, setSignupComplete] = useState(false)
    const [tfaOpen, setTfaOpen] = useState(false)
    const [tabValue, setTabValue] = useState(0)
    const [formComplete, setFormComplete] = useState(false)
    const [cognitoUserID, setCognitoUserID] = useState('')
    const [userSignedIn, setUserSignedIn] = useState(false)

    // You can also include any functions that update these states here.

    return {
        birthday, setBirthday,
        name, setName,
        city, setCity,
        zipCode, setZipCode,
        username, setUsername,
        state, setState,
        password, setPassword,
        confirmPassword, setConfirmPassword,
        showPassword, setShowPassword,
        showConfirmPassword, setShowConfirmPassword,
        error, setError,
        age, setAge,
        birthdayComplete, setBirthdayComplete,
        nameComplete, setNameComplete,
        locationComplete, setLocationComplete,
        emailComplete, setEmailComplete,
        birthdayWaiting, setBirthdayWaiting,
        nameWaiting, setNameWaiting,
        locationWaiting, setLocationWaiting,
        emailWaiting, setEmailWaiting,
        signupWaiting, setSignupWaiting,
        signupComplete, setSignupComplete,
        tfaOpen, setTfaOpen,
        tabValue, setTabValue,
        formComplete, setFormComplete,
        cognitoUserID, setCognitoUserID,
        userSignedIn, setUserSignedIn,
    }
}
