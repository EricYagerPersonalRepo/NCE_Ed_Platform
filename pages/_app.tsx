import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import amplifyconfiguration from '../src/amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from 'aws-amplify'
import { ThemeProvider } from '@aws-amplify/ui-react'
import studioTheme from '../src/ui-components/studioTheme'
import AuthenticatedHeader from '@/src/ui-components/AuthenticatedHeader'
import { checkAuthStatus } from '@/src/functions/AuthFunctions'
import { Header } from '@/src/components/Header'

Amplify.configure(amplifyconfiguration, {ssr: true})

function NCE_Education_App({ Component, pageProps }:any) {
    const [loggedIn, setLoggedIn] = useState(false)

    async function handleAuthStatusCheck(){
        let authStatus = await checkAuthStatus()
        console.log("authStatus: " + authStatus)
        setLoggedIn(authStatus)
    }

    useEffect(() => {
        handleAuthStatusCheck()
        console.log("loggedIn: " + loggedIn)
    }, [])

    return (
        <>
            <Head>
                <title>NCE Education App</title>
            </Head>
            <ThemeProvider theme={studioTheme}>
                {loggedIn ? 
                    <AuthenticatedHeader />
                    :
                    <Header />
                }
                <Component {...pageProps} loggedIn={loggedIn}/>
            </ThemeProvider>
        </>
    )
}

export default NCE_Education_App
