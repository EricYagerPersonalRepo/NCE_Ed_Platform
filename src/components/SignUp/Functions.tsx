/**
 * Amplify/Cognito Sign Up Workflow
 * Workflow handles initial sign up, TFA, sign in, and createUser
 */

import { handleCreateStudentProfile, handleSignIn } from "@/src/functions/AuthFunctions"

// Manages the post-two-factor-authentication workflow.
export const handlePostTfaWorkflow = async ({signUpHooks}:any) => {
    let {username,password} = {username:signUpHooks.username, password:signUpHooks.password}
    try {
        const signInResult = await handleSignIn({ username,password })

        if (signInResult.isSignedIn) {
            const profileInput= { cognitoUserID:signUpHooks.cognitoUserID, name:signUpHooks.name, email:signUpHooks.username, birthdate:signUpHooks.birthday }
            const profileResult = await handleCreateStudentProfile(profileInput)
            if (profileResult.isSignedUp) {
                window.location.href = '/StudentProfile'
            }
        }
    } catch (error) {
        console.error('Error in post-TFA workflow:', error)
    }
}