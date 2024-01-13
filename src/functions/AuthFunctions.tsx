import { ConfirmSignUpInput, ConfirmSignUpOutput, SignInInput, SignInOutput, confirmSignUp, getCurrentUser, signIn, signOut } from "aws-amplify/auth"
import { CreateStudentProfileInput } from "../API"
import { createStudentProfile } from "../graphql/mutations"
import { generateClient } from "aws-amplify/api"
import { handleConfirmSignUpReturnType } from "../types/SignUpTypes"

export const cognitoClient = generateClient()

export const checkAuthStatus = async () => {
    try {
        const user = await getCurrentUser()
        return !!user
    } catch (error) {
        return false
    }
}

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

export const signUserOut = async() => {
    let signUserOut = await signOut()
    console.log(signUserOut)
}


            