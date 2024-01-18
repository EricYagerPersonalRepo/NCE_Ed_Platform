import { ConfirmSignUpInput, ConfirmSignUpOutput, SignInInput, SignInOutput, confirmSignUp, getCurrentUser, signIn, signOut } from "aws-amplify/auth"
import { CreateStudentProfileInput } from "../API"
import { createStudentProfile } from "../graphql/mutations"
import { generateClient } from "aws-amplify/api"
import { handleConfirmSignUpReturnType } from "../types/SignUpTypes"

export const cognitoClient = generateClient()

/**
 * Asynchronously checks the authentication status of a user.
 * 
 * @returns {Promise<boolean>} A promise that resolves to true if the user is authenticated, false otherwise.
 */
export const checkAuthStatus = async () => {
    try {
        const user = await getCurrentUser()
        return !!user
    } catch (error) {
        return false
    }
}

/**
 * Asynchronously handles the confirmation of user sign-up.
 * 
 * @param {ConfirmSignUpInput} signUpInput - The input object containing username and confirmation code.
 * @returns {Promise<handleConfirmSignUpReturnType>} A promise that resolves to an object indicating if sign-up is complete and the next step.
 */
export const handleConfirmSignup = async (signUpInput: ConfirmSignUpInput): Promise<handleConfirmSignUpReturnType> => {
    try {
        const { isSignUpComplete, nextStep }:ConfirmSignUpOutput = await confirmSignUp(signUpInput)
        console.log(isSignUpComplete, nextStep)
        if(isSignUpComplete) return({signUpComplete:true, nextStep:nextStep})
        else return({signUpComplete:false,nextStep:nextStep})
    } catch (error) {
        console.error('Error confirming sign up:', error)
        return({signUpComplete:false,nextStep:null,error:error})
    }
}

/**
 * Asynchronously creates a student profile in the system.
 * 
 * @param {CreateStudentProfileInput} studentProfileInput - The input object containing user profile details.
 * @returns {Promise<{isSignedUp: boolean, userProfile: any}>} A promise that resolves to an object indicating if the profile was successfully created and the user profile data.
 */
export const handleCreateStudentProfile = async (studentProfileInput:CreateStudentProfileInput) => {
    try {
        const profileResult = await cognitoClient.graphql({
            query: createStudentProfile,
            variables: { input: studentProfileInput }
        })
        console.log('Student profile creation result:', profileResult)
        return({isSignedUp:true, userProfile:profileResult})
    } catch (signInError) {
        console.log('Error signing in:', signInError)
        return({isSignedUp:false, userProfile:null})
    }
}

/**
 * Asynchronously handles the sign-in process for a user.
 * 
 * @param {SignInInput} { username, password } - Object containing username and password.
 * @returns {Promise<{isSignedIn: boolean, nextStep: any}>} A promise that resolves to an object indicating if the user is signed in and the next step in the sign-in process.
 */
export const handleSignIn = async({ username, password }: SignInInput) => {
    try {
        const { isSignedIn, nextStep }:SignInOutput = await signIn({ username, password })
        console.log(isSignedIn, nextStep)
        if(isSignedIn){
            console.log("signed in")
            console.log(nextStep)
            return({isSignedIn:true, nextStep:nextStep})
        }else{
            console.log("not signed in")
            return({isSignedIn:false})
        }
    } catch (error) {
        console.log('error signing in', error)
        return({isSignedIn:false, nextStep:null})
    }
}

/**
 * Maps an error event string to a user-friendly error message.
 * 
 * @param {string} event - The error event string.
 * @returns {string} A user-friendly error message corresponding to the provided event.
 */
export const ThrowSignUpError = (event:string) => {
    let errorMessage = ''
    switch (event) {
        case 'NoUserPoolError':
            errorMessage = 'No user pool configured'
            break
        case 'UsernameExistsException':
            errorMessage = 'Username already exists'
            break
        case 'InvalidParameterException':
            errorMessage = 'Invalid parameters'
            break
        case 'InvalidPasswordException':
            errorMessage = 'Invalid password format'
            break
        case 'NotAuthorizedException':
            errorMessage = 'Not authorized'
            break
        case 'UserNotFoundException':
            errorMessage = 'User not found'
            break
        case 'LimitExceededException':
            errorMessage = 'Limit exceeded'
            break
        case 'CodeMismatchException':
            errorMessage = 'Invalid verification code'
            break
        case 'ExpiredCodeException':
            errorMessage = 'Verification code expired'
            break
        case 'TooManyRequestsException':
            errorMessage = 'Too many requests, try again later'
            break
        case 'TooManyFailedAttemptsException':
            errorMessage = 'Too many failed attempts'
            break
        case 'UsernameExistsException':
            errorMessage = 'User exists with provided email, use a different email'
            break
        case 'EmptySignUpUsername':
            errorMessage = 'No email address provided'
            break
        default:
            errorMessage = 'An unknown error occurred'
    }
    return(errorMessage)
}

/**
 * Asynchronously fetches city and state information based on the provided ZIP code.
 * 
 * @param {string} zip - The ZIP code for which to fetch city and state information.
 * @returns {Promise<{City: string, State: string}>} A promise that resolves to an object containing the city and state.
 */
export const fetchCityState = async(zip:string) => {
    try {
        const response = await fetch(`https://api.zippopotam.us/us/${zip}`)
        const data = await response.json()
        return({City:data.places[0]['place name'], State:data.places[0]['state']})
    } catch (error) {
        console.error('Failed to fetch city and state:', error)
        return({City:'', State:''})
    }
}

/**
 * Asynchronously signs out the currently authenticated user.
 * 
 * @returns {Promise<void>} A promise that resolves when the user is signed out.
 */
export const signUserOut = async() => {
    let signUserOut = await signOut()
    console.log(signUserOut)
}


            