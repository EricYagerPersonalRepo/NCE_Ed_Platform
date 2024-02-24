import React from 'react';
import { Container} from '@mui/material';
import {LogInForm} from '@/src/components/LogIn';

export default function LogIn({loggedIn}:any) {
  return (
    <Container maxWidth="sm">
      <LogInForm />
    </Container>
  )
}