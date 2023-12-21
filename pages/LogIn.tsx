// pages/index.tsx
import React, { useEffect } from 'react'
import { getCurrentUser } from 'aws-amplify/auth'

const LogIn = () => {
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const user = await getCurrentUser();
      console.log('User is signed in:', user);
    } catch (error) {
      console.error('User is not signed in:', error);
    }
  };

  // Example overrides
  const splashOverrides = {
    Heading: { style: { color: 'blue' } },
    Body: { style: { fontSize: '16px' } },
    image: { style: { width: '100px' }, src: './HomePageSplashImage.png' },
  };

  return (
    <div>
      Login
    </div>
  );
};

export default LogIn;

