import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import amplifyconfiguration from '../src/amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { ThemeProvider } from '@aws-amplify/ui-react'
import studioTheme from '../src/ui-components/studioTheme'
import { checkAuthStatus } from '@/src/functions/AuthFunctions'
import { AuthenticatedHeader, UnauthenticatedHeader } from '@/src/components/Header'
import { AuthProvider, useAuth } from '@/src/state/AuthGlobalState'
import { useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { Hub } from 'aws-amplify/utils'
import { getCurrentUser } from 'aws-amplify/auth'
import { getPresignedUrl } from '@/src/functions/AmplifyFunctions'

Amplify.configure(amplifyconfiguration, {ssr: true})

/**
 * NCE_Education_App - The main application component in _app.tsx for the NCE Education App.
 * 
 * This component acts as the root of the NCE Education App, wrapping all page components to provide
 * global states and functionalities such as theme settings, user authentication status, user data,
 * and responsive design handling. It utilizes several `useEffect` hooks for initializing and managing
 * the authentication state, user data, and avatar URL based on the user's login status. It also listens
 * for authentication events to refresh the application state as needed.
 * 
 * The application dynamically renders either an AuthenticatedHeader or UnauthenticatedHeader based on
 * the user's login status. It passes down essential props like `loggedIn`, `avatarUrl`, `userData`, and
 * `isMobile` to all page components for consistent access to these states across the application.
 * 
 * @param {Object} props - Contains `Component`, the active page component, and `pageProps`, the props
 *                         to pass to the page component.
 * 
 * @returns {JSX.Element} - The main application structure, including headers conditional on authentication
 *                          status and theme provider wrapping the active page component with necessary props.
 */
const NCE_Education_App = ({ Component, pageProps }:any) => {
    
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const router = useRouter()
    const [userData, setUserData] = useState({email:"", cognitoID:""})
    const [loggedIn, setLoggedIn] = useState(false)
    const [avatarUrl, setAvatarUrl] = useState('')


    /**
     * Initializes the application by checking the user's authentication status once when the app loads.
     * It attempts to verify if the user is logged in through `checkAuthStatus`. If successful, `setLoggedIn` updates
     * the state to reflect the user's status. Any errors during this process result in the user being set to logged out.
     * 
     * Dependencies: None
    */
    useEffect(() => {
        async function validateAuthState() {
            try {
                const isUserLoggedIn = await checkAuthStatus()
                setLoggedIn(isUserLoggedIn)
            } catch (error) {
                console.error('Failed to check authentication status:', error)
                setLoggedIn(false)
            }
        }

        validateAuthState()

    }, [])

    /**
     * Sets up a listener for authentication events using AWS Amplify's Hub module. Whenever an authentication event occurs,
     * such as sign-in or sign-out, it triggers a page reload to reflect changes in the user's authentication state across
     * the application. This useEffect hook ensures the listener is registered once when the app component mounts.
     * 
     * Dependencies: None
    */
    useEffect(()=> {
        Hub.listen('auth', () => {
            window.location.reload()
        })
    }, [])

    /**
     * This effect fetches and sets the user's data upon a change in their logged-in status. 
     * If the user is logged in, it calls `getCurrentUser` to retrieve the user's details,
     * such as email and cognitoID, and updates the application's state with this information.
     * It runs every time the `loggedIn` state changes, ensuring the user data is always current.
     * 
     * Dependencies: loggedIn - The effect triggers in response to changes in the user's logged-in status.
    */
    useEffect(()=> {
        const getUserData = async() =>{
            if(loggedIn){
                const currentUser = await getCurrentUser()
                const userDataResponse = {
                    email: currentUser.signInDetails?.loginId || '', // Fallback to an empty string if undefined
                    cognitoID: currentUser.userId
                }
                setUserData(userDataResponse)
            }
        }
        getUserData()
        
    }, [loggedIn])

    /**
     * Initializes the application's authentication state and fetches the user's avatar if logged in. 
     * On app start, it checks the user's authentication status. If authenticated, it retrieves the 
     * user's details to fetch and set their avatar URL. In case of errors during initialization,
     * it logs the error, and resets both the loggedIn and avatarUrl states. A cleanup function 
     * revokes the avatar URL to free resources when the component unmounts or the avatar changes.
     * 
     * Dependencies: None
     */
    useEffect(() => {
        async function initializeAuth() {
            try {
                const isUserLoggedIn = await checkAuthStatus();
                setLoggedIn(isUserLoggedIn);

                if (isUserLoggedIn) {
                    const currentUser = await getCurrentUser();
                    if (currentUser && currentUser.userId) {
                        const avatarFileName = `avatars/${currentUser.userId}/avatar.png`;
                        const url = await getPresignedUrl(avatarFileName);
                        const response = await fetch(url);
                        const imageBlob = await response.blob();
                        const localUrl = URL.createObjectURL(imageBlob);
                        setAvatarUrl(localUrl);
                    }
                }

            } catch (error) {
                console.error('Initialization error:', error);
                setLoggedIn(false);
                setAvatarUrl('');
            }
        }
        initializeAuth();

        // Cleanup function to revoke the avatar URL
        return () => {
            if (avatarUrl) URL.revokeObjectURL(avatarUrl);
        };
    }, []);

    return (
        <AuthProvider>
            <Head>
                <title>NCE Education App</title>
            </Head>
            <ThemeProvider theme={studioTheme}>
                {loggedIn ? 
                    <AuthenticatedHeader userData={userData} avatarUrl={avatarUrl}/>
                    :
                    <UnauthenticatedHeader />
                }
                <Component {...pageProps} loggedIn={loggedIn} avatarUrl={avatarUrl} userData={userData} isMobile={isMobile} router={router}/>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default NCE_Education_App
