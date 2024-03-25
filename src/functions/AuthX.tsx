import { ConfirmSignUpInput, ConfirmSignUpOutput, SignInInput, SignInOutput, confirmSignUp, getCurrentUser, signIn, signOut } from "aws-amplify/auth"
import { CreateNCEStudentProfileInput, CreateNCEUserSettingsInput, StudentStatus } from "../API"
import { createNCEStudentProfile, createNCEUserSettings, createStudentProfile } from "../graphql/mutations"
import { handleConfirmSignUpReturnType, SignUpHooksProps } from "../types/SignUpTypes"
import { generateClient } from "aws-amplify/api"

export const amplifyApiClient = generateClient()

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
 * Asynchronously creates a student profile in the system.
 * 
 * @param {CreateNCEStudentProfileInput} studentProfileInput - The input object containing user profile details.
 * @returns {Promise<{isSignedUp: boolean, userProfile: any}>} A promise that resolves to an object indicating if the profile was successfully created and the user profile data.
 */
export const handleCreateStudentProfile = async (studentProfileInput:CreateNCEStudentProfileInput) => {
    console.log("handleCreateStudentProfile: ", studentProfileInput)
    try {
        const profileResult = await amplifyApiClient.graphql({
            query: createStudentProfile,
            variables: { input: studentProfileInput }
        })

        console.log("Tried to create student profile: ", profileResult)
        return({isSignedUp:true, userProfile:profileResult})
    } catch (signInError) {
        console.log('Error creating student profile:', signInError)
        return({isSignedUp:false, userProfile:null})
    }
}

// export const handleCreateInitialUserSettings = async(userID:string) => {
//     const userSettingsInput: CreateUserSettingsInput = {
//         id: userID,
//         studentProfileID: userID,
//         notificationsEnabled: true, 
//         darkModeEnabled: false, 
//         language: 'en',
//         isAdmin: false,
//     }

//     try{
//         const userSettingsCall = await amplifyApiClient.graphql({
//             query: createUserSettings,
//             variables: { input: userSettingsInput }
//         })
//         console.log("Tried to create user settings: ", userSettingsCall)
//         return({hasUserSettings:true, userSettings:userSettingsCall})
//     }
//     catch(error){
//         console.error(error)
//     }
// }
/**
 * Asynchronously handles the sign-in process for a user.
 * 
 * @param {SignInInput} { username, password } - Object containing username and password.
 * @returns {Promise<{isSignedIn: boolean, nextStep: any}>} A promise that resolves to an object indicating if the user is signed in and the next step in the sign-in process.
 */
export const handleSignIn = async({ username, password }: SignInInput) => {
    try {
        const { isSignedIn, nextStep }:SignInOutput = await signIn({ username, password })

        console.log("HandleSignIn: ", isSignedIn, nextStep)

        if(isSignedIn){
            return({isSignedIn:true, nextStep:nextStep})
        }else{
            return({isSignedIn:false})
        }

    } catch (error) {
        console.log('error signing in', error)
        return({isSignedIn:false, nextStep:null})
    }
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
    return(signUserOut)
}


            