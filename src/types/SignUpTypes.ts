// Regular expression for validating a full name. Requires at least two words.
// Example of valid input: John Doe
export const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)+$/

// Regular expression for validating a US zip code. Allows optional 4-digit extension.
// Examples of valid input: 12345, 12345-6789
export const zipCodePattern = /^\d{5}(-\d{4})?$/


// Regular expression for validating an email address.
// Example of valid input: example@email.com
export const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export interface handleConfirmSignUpReturnType {
    signUpComplete:boolean,
    nextStep:any,
    error?:any
}

export interface SignUpFormErrors {
    name?: string
    streetAddress?: string
    city?: string
    zipCode?: string
    email?: string
    phone?: string
    password?: string
    confirmPassword?: string
    signUp?: string
}

export interface SignUpTabItemProps {
    text: string
    waiting: boolean
    complete: boolean
}

export interface SignUpTabPanelProps {
    children: React.ReactNode
    value: number
    index: number
    [key: string]: any
}

export interface CityStateCallProps {
    City: String
    State: String
}

export interface AuthenticatedHomeProps {
    isMobile: boolean;
}

export interface SignUpHooksProps {
    id: string;
    setId: (value: string) => void;
    name: string;
    setName: (value: string) => void;
    city: string;
    setCity: (value: string) => void;
    zipCode: string;
    setZipCode: (value: string) => void;
    username: string;
    setUsername: (value: string) => void;
    state: string;
    setState: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    confirmPassword: string;
    setConfirmPassword: (value: string) => void;
    showPassword: boolean;
    setShowPassword: (value: boolean) => void;
    showConfirmPassword: boolean;
    setShowConfirmPassword: (value: boolean) => void;
    error: SignUpFormErrors;
    setError: (value: SignUpFormErrors) => void;
    age: number;
    setAge: (value: number) => void;
    status: string;
    setStatus: (value: string) => void;
    confirmSignupComplete: boolean;
    setConfirmSignupComplete: (value: boolean) => void;
    nameComplete: boolean;
    setNameComplete: (value: boolean) => void;
    locationComplete: boolean;
    setLocationComplete: (value: boolean) => void;
    emailComplete: boolean;
    setEmailComplete: (value: boolean) => void;
    passwordComplete: boolean;
    setPasswordComplete: (value: boolean) => void;
    nameWaiting: boolean;
    setNameWaiting: (value: boolean) => void;
    locationWaiting: boolean;
    setLocationWaiting: (value: boolean) => void;
    emailWaiting: boolean;
    setEmailWaiting: (value: boolean) => void;
    passwordWaiting: boolean;
    setPasswordWaiting: (value: boolean) => void;
    confirmSignupWaiting: boolean;
    setConfirmSignupWaiting: (value: boolean) => void;
    signupWaiting: boolean;
    setSignupWaiting: (value: boolean) => void;
    signupComplete: boolean;
    setSignupComplete: (value: boolean) => void;
    tabValue: number;
    setTabValue: (value: number) => void;
    formComplete: boolean;
    setFormComplete: (value: boolean) => void;
    userSignedIn: boolean;
    setUserSignedIn: (value: boolean) => void;
}

