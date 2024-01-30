import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { Button, TextField, Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useAuth } from '@/src/state/AuthGlobalState';

export default function LogIn({loggedIn}:any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter()
  const { login } = useAuth()

  const handleLogin = async () => {
    try {
      await signIn({ username, password })
      login()
      router.push("/StudentProfile")
      
    } catch (error:any) {
      setError(error.message);
    }
  };

  if (loggedIn) {
    // Redirect or show a message if already logged in
    return <div>You are already logged in!</div>;
  }

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        {error && (
          <Grid item>
            <div style={{ color: 'red' }}>{error}</div>
          </Grid>
        )}
        <Grid item>
          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Log In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}