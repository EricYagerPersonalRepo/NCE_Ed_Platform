import React from 'react';
import { Container} from '@mui/material';
import {LogInForm} from '@/src/components/LogIn';

const LogIn = () => {
  return (
    <Container maxWidth="sm">
      <LogInForm />
    </Container>
  )
}

export default LogIn