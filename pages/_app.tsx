import React from 'react';
import Head from 'next/head';
import amplifyconfiguration from '../src/amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css';

import { Amplify } from 'aws-amplify';
import { ThemeProvider } from '@aws-amplify/ui-react';
import studioTheme from '../src/ui-components/studioTheme';
import AuthenticatedHeader from '@/src/ui-components/AuthenticatedHeader';


Amplify.configure(amplifyconfiguration, {ssr: true});

function NCE_Education_App({ Component, pageProps }:any) {
  return (
    <>
      <Head>
        <title>NCE Education App</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" /> {/* Favicon reference */}
      </Head>
      <ThemeProvider theme={studioTheme}>
        <AuthenticatedHeader />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default NCE_Education_App;
