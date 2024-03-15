/**
 * Array of allowed ZIP codes for the signup process.
 *
 * This array 'allowedZipCodes' contains a list of specific ZIP codes that are permitted
 * in the signup process. It serves as a filter to restrict signups to users from
 * certain geographical areas, defined by these ZIP codes. This can be used in the 
 * validation process to check if a user's provided ZIP code matches one of the
 * allowed values, thereby determining their eligibility to complete the signup process.
 *
 * This array is intended to be used in conjunction with other functions that handle
 * signup data validation and processing. The specific ZIP codes listed here are examples,
 * and can be modified or extended based on the application's requirements.
 */
export const allowedZipCodes = [
    13642,
    13630,
    13617,
    13676,
    13699
]

/**
 * Calculates the age based on the provided birthday.
 * 
 * This function computes the age by comparing the current date with the birthday date.
 * It accounts for the month and day of the month to ensure accurate calculation of age.
 * 
 * @param {any} event - The event containing the birthday date.
 * @returns {number} The calculated age.
 */
export const ageCaluclatedFromInputBirthday = (event:any) => {
    const birthday = new Date(event)
    const today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()
    const m = today.getMonth() - birthday.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--
    }

    return(age)
}

import { handleCreateStudentProfile, handleSignIn } from "@/src/functions/AuthX"
import { SignUpHooks, handleConfirmSignUpReturnType } from "@/src/types/SignUpTypes"
import { ConfirmSignUpInput, ConfirmSignUpOutput, SignUpOutput, confirmSignUp, signUp } from "aws-amplify/auth"

// Manages the post-two-factor-authentication workflow.
export const handlePostTfaWorkflow = async ({signUpHooks}:any) => {
    let {username,password} = {username:signUpHooks.username, password:signUpHooks.password}
    try {
        const signInResult = await handleSignIn({ username,password })

        if (signInResult.isSignedIn) {
            const profileInput= { id:signUpHooks.id, name:signUpHooks.name, email:signUpHooks.username, birthdate:signUpHooks.birthday, status: signUpHooks.status }
            const profileResult = await handleCreateStudentProfile(profileInput)
            if (profileResult.isSignedUp) {
                console.log("Signed up!")//window.location.href = '/StudentProfile'
            }
        }
    } catch (error) {
        console.error('Error in post-TFA workflow:', error)
    }
}

export async function handleSignUpCall(username:any,password:any){
    try{
        const response:SignUpOutput = await signUp({
            username,
            password,
            options: {
                autoSignIn: true,
                userAttributes: {}
            }
        })
        return(response)
    }catch(error:any){
        let errorResponse:SignUpOutput = {isSignUpComplete:false, userId:"", nextStep:{signUpStep: 'DONE'}}
        console.error(error)
        return(errorResponse)
    }
}


export async function handleSignUp(signUpHooks:SignUpHooks) {
    const username = signUpHooks.username
    const password = signUpHooks.password

    try {
        const response:SignUpOutput = await handleSignUpCall(username, password)

        if (response.nextStep && response.nextStep.signUpStep === "CONFIRM_SIGN_UP") {
            signUpHooks.setTfaOpen(true)
        }

        if(response.userId){
            signUpHooks.setId(response.userId)
        }
    } catch (e:any) {
        let errorMessage = ThrowSignUpError(e.name)
        signUpHooks.setError({ ...signUpHooks.error, signUp: errorMessage })
        console.error(signUpHooks.error)
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
        console.log("HandleConfirmSignup: ", isSignUpComplete, nextStep)
        if(isSignUpComplete) return({signUpComplete:true, nextStep:nextStep})
        else return({signUpComplete:false,nextStep:nextStep})
    } catch (error) {
        console.error('Error confirming sign up:', error)
        return({signUpComplete:false,nextStep:null,error:error})
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