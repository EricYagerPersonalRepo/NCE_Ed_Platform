import React from 'react';
import { Container} from '@mui/material';
import {LogInForm} from '@/src/components/LogIn';

const LogIn = ({loggedIn}:any) => {
  return (
    <Container maxWidth="sm">
      <LogInForm />
    </Container>
  )
}

export default LogIn