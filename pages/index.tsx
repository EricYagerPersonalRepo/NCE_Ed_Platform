// pages/index.tsx
import React, { useEffect, useState } from 'react'
import HomepageSplash from '../src/ui-components/HomepageSplash.jsx'
import SignUp from '../src/ui-components/SignUp.jsx';

const HomePage = ({ loggedIn }:any) => {

  // Example overrides
  const splashOverrides = {
    Heading: { style: { color: 'blue' } },
    Body: { style: { fontSize: '16px' } },
    image: { style: { width: '100px' }, src: './HomePageSplashImage.png' },
  };

  return (
    <div>
        {loggedIn ? 
            <HomepageSplash 
                mode="Dark"
                overrides={splashOverrides}
            />
            :
            <div><SignUp /></div>
        }
    </div>
  );
};

export default HomePage;

