import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import amplifyconfiguration from '../src/amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { ThemeProvider } from '@aws-amplify/ui-react'
import studioTheme from '../src/ui-components/studioTheme'
import { checkAuthStatus } from '@/src/functions/AuthFunctions'
import { AuthenticatedHeader, UnauthenticatedHeader } from '@/src/components/Header'
import { AuthProvider } from '@/src/state/AuthGlobalState'
import { useMediaQuery, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { Hub } from 'aws-amplify/utils'
import { getCurrentUser } from 'aws-amplify/auth'

Amplify.configure(amplifyconfiguration, {ssr: true})

const NCE_Education_App = ({ Component, pageProps }:any) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const router = useRouter()

    const [loggedIn, setLoggedIn] = useState(false)
    const [userData, setUserData] = useState({email:"", cognitoID:""})


    useEffect(() => {
        async function checkAndSetAuthStatus() {
            try {
                const isUserLoggedIn = await checkAuthStatus()
                setLoggedIn(isUserLoggedIn)
            } catch (error) {
                console.error('Failed to check authentication status:', error)
                setLoggedIn(false)
            }
        }

        checkAndSetAuthStatus()

    }, [])

    useEffect(()=> {
        Hub.listen('auth', () => {
            window.location.reload()
        })
    }, [])

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

    return (
        <AuthProvider>
            <Head>
                <title>NCE Education App</title>
            </Head>
            <ThemeProvider theme={studioTheme}>
                {loggedIn ? 
                    <AuthenticatedHeader userData={userData}/>
                    :
                    <UnauthenticatedHeader />
                }
                <Component {...pageProps} loggedIn={loggedIn} userData={userData} isMobile={isMobile} router={router}/>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default NCE_Education_App
