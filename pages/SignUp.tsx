import React, { useEffect } from 'react'
import { WebSignUp } from '@/src/components/SignUp'
import { useRouter } from 'next/router'

/**
 * SignUp Component - Manages the user sign-up process and redirects authenticated users.
 *
 * The SignUp component is responsible for handling the user sign-up flow. It utilizes custom
 * hooks from 'useSignUpHooks' to manage local state, including user input and form status. This
 * component checks the user's authentication status on mount. If the user is already authenticated,
 * it redirects them to the homepage. Otherwise, it renders a sign-up form, tailored to the screen size.
 * The sign-up process includes multiple steps such as entering birthday, name, location, and email,
 * each managed by separate tabs. It also incorporates two-factor authentication and integrates with
 * AWS Amplify's signUp service.
 *
 * Major functionalities include input validation, password visibility toggling, fetching city and state
 * based on zip code, tab navigation, and handling the sign-up submission. If the sign-up is successful
 * and confirmed through two-factor authentication, the user is redirected to their student profile page.
 * 
 * @param {any} loggedIn - Boolean indicating if the user is already authenticated.
 * @param {any} isMobile - Boolean indicating if the current screen size is mobile.
 * 
 * @returns {JSX.Element} - Renders a mobile or web version of the sign-up form, or redirects if already logged in.
 */
const SignUp = ({ loggedIn, isMobile }: any)  =>{
    const router = useRouter()

    useEffect(() => {
        if (loggedIn) {
            router.push('/')
        }
    }, [loggedIn, router])

    return isMobile ? <div>mobile</div> : <WebSignUp />
}

export default SignUp