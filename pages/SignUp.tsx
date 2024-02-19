import React, { useEffect } from 'react'
import { MobileSignUp, WebSignUp } from '@/src/components/SignUp'

/**
 * SignUp Component - Manages user sign-up process and handles redirection for authenticated users.
 *
 * This component is responsible for orchestrating the user sign-up flow. It employs custom hooks from 
 * 'useSignUpHooks' to manage local states like user input and form statuses. On component mount, it checks 
 * the user's authentication status. Authenticated users are immediately redirected to the homepage, 
 * ensuring that already logged-in users do not access the sign-up form.
 *
 * The component renders different UIs based on the screen size, providing tailored experiences for mobile 
 * and web users. The sign-up process involves multiple steps, including birthday, name, location, and email
 * entry, each managed through individual tabs. It incorporates two-factor authentication and integrates 
 * with AWS Amplify's signUp service.
 *
 * Key functionalities encompass input validation, toggling password visibility, auto-fetching city and state 
 * from zip codes, navigating through tabs, and handling the final sign-up submission. Post successful sign-up 
 * and two-factor authentication confirmation, it redirects users to their student profile page.
 *
 * @param {any} loggedIn - A flag indicating whether the user is already logged in.
 * @param {any} isMobile - A flag indicating whether the current screen size is mobile.
 * @param {any} router - Optional router prop for navigation, primarily used for testing.
 *
 * @returns {JSX.Element} - The SignUp component renders either a mobile or web version of the sign-up form, 
 * or redirects the user if already logged in.
 */
const SignUp = ({ loggedIn, isMobile, router }: any)  =>{

    //punt user if they're already logged in
    useEffect(() => {
        if (loggedIn) {
            router.push('/')
        }
    }, [loggedIn, router])

    return isMobile ? <MobileSignUp /> : <WebSignUp />
}

export default SignUp