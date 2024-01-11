// pages/index.tsx
import React, { useEffect, useState } from 'react'
import { getCurrentUser } from 'aws-amplify/auth'
import { Box, Container, Grid, Modal, Typography } from '@mui/material';
import { tfaModalStyle } from '@/styles/AuthStyles';

const LogIn = () => {
  const [tfaOpen, setTfaOpen] = useState(false)

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

  const splashOverrides = {
    Heading: { style: { color: 'blue' } },
    Body: { style: { fontSize: '16px' } },
    image: { style: { width: '100px' }, src: './HomePageSplashImage.png' },
  };

  return (
    <div></div>
  );
};

export default LogIn;

