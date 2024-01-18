// Regular expression for validating birthday. Format: YYYY-MM-DD.
// Example of valid input: 1990-12-31
export const birthdayPattern = /^(19[0-9][1-9]|20[0-9]{2})-\d{2}-\d{2}$/

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
    birthday?: string
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