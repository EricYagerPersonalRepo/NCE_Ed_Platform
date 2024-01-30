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

Amplify.configure(amplifyconfiguration, {ssr: true})

const NCE_Education_App = ({ Component, pageProps }:any) => {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const router = useRouter()

    const [loggedIn, setLoggedIn] = useState(false)


    useEffect(() => {
        async function checkAndSetAuthStatus() {
            try {
                const isUserLoggedIn = await checkAuthStatus();
                setLoggedIn(isUserLoggedIn);
            } catch (error) {
                console.error('Failed to check authentication status:', error);
                setLoggedIn(false);
            }
        }

        checkAndSetAuthStatus()

    }, [])

    useEffect(()=> {
        Hub.listen('auth', () => {
            window.location.reload()
        })
    }, [])

    return (
        <AuthProvider>
            <Head>
                <title>NCE Education App</title>
            </Head>
            <ThemeProvider theme={studioTheme}>
                {loggedIn ? 
                    <AuthenticatedHeader />
                    :
                    <UnauthenticatedHeader />
                }
                <Component {...pageProps} loggedIn={loggedIn} isMobile={isMobile} router={router}/>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default NCE_Education_App
