import React from 'react';
import Head from 'next/head';

function NCE_Education_App({ Component, pageProps }:any) {
  return (
    <>
      <Head>
        <title>NCE Education App</title>
        <link rel="icon" href="/favicon.ico" /> {/* Favicon reference */}
        {/* Other head elements like meta tags can also be added here */}
      </Head>
      {/* You can add a global layout or header/footer components here */}
      <Component {...pageProps} />
      {/* Footer or other components that should render on every page can be added here */}
    </>
  );
}

export default NCE_Education_App;
