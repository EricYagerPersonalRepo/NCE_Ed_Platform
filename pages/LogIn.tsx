import React, { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { Button, TextField, Container, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { useAuth } from '@/src/state/AuthGlobalState';

/**
 * LogIn Component - Handles user login functionality.
 * 
 * This component provides a form for users to input their username and password to log into the application.
 * It utilizes state hooks to manage form inputs and error messages. On form submission, it attempts to authenticate
 * the user using the `signIn` function. Successful authentication triggers a login action and redirects the user
 * to the StudentProfile page. If the user is already logged in, it displays a message indicating so.
 * 
 * The component also integrates with the custom `useAuth` hook to access the application's authentication state
 * and actions, allowing it to conditionally render content based on the user's authentication status and perform
 * the login action upon successful authentication.
 * 
 * @param {any} loggedIn - A boolean indicating whether the user is currently logged in. If true, the component
 *                         redirects the user or shows a logged-in message instead of the login form.
 * 
 * @returns {JSX.Element} - A container with a form for username and password input, along with a login button
 *                          and error message display. Redirects or shows a message if the user is already logged in.
 */
export default function LogIn({loggedIn}:any) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter()
  const { login, avatarUrl } = useAuth()

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