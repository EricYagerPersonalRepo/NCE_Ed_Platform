import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import amplifyconfiguration from '../src/amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { ThemeProvider } from '@aws-amplify/ui-react'
import studioTheme from '@/src/style/GlobalStyle'
import { checkAuthStatus } from '@/src/functions/AuthX'
import { Header } from '@/src/components/Header'
import { AuthProvider } from '@/src/state/AuthGlobalState'
import { useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { Hub } from 'aws-amplify/utils'
import { getCurrentUser } from 'aws-amplify/auth'
import { getPresignedUrl } from '@/src/functions/Amplify'

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

    useEffect(()=> {
        const getUserData = async() =>{
            if(loggedIn){
                const currentUser = await getCurrentUser()
                const userDataResponse = {
                    email: currentUser.signInDetails?.loginId || '',
                    cognitoID: currentUser.userId
                }
                
                setUserData(userDataResponse)
            }
        }
        getUserData()
        
    }, [loggedIn])

    useEffect(() => {
        Hub.listen('auth', (data:any) => {
            switch(data.payload.event){
                case "signedIn": 
                    setLoggedIn(true)
                    setUserData({
                        email:data.payload.data.username,
                        cognitoID:data.payload.data.id
                    })
                    break;
                case "signedOut":
                    setLoggedIn(false)
                    setUserData({email:"", cognitoID:""})
                    break;
                default:
                    break;
            }
        })
    }, [])

    useEffect(()=>{
        const avatarUrlResponse = async() => {
            try{
                const currentUser = await getCurrentUser();
                const avatarFileName = `avatars/${currentUser.userId}/avatar.png`;
                let presignedUrlResponse = await getPresignedUrl(avatarFileName)
                setAvatarUrl(presignedUrlResponse)
            }catch(error){
                console.error("Error with presignedUrlResponse call in app.tsx: ", error)
                return
            }
        }
        avatarUrlResponse()
    },[userData])

    return (
        <AuthProvider>
            <Head>
                <title>NCE Education App</title>
            </Head>
            <ThemeProvider theme={studioTheme}>
                {
                    loggedIn ? <Header loggedIn={loggedIn} avatarUrl={avatarUrl} userData={userData} isMobile={isMobile} />
                    :
                    <Header />
                }
                <Component {...pageProps} loggedIn={loggedIn} avatarUrl={avatarUrl} userData={userData} isMobile={isMobile} router={router}/>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default NCE_Education_App