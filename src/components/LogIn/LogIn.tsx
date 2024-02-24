import { useAuth } from "@/src/state/AuthGlobalState"
import { Button, Grid, TextField } from "@mui/material"
import { signIn } from "aws-amplify/auth"
import { useRouter } from "next/router"
import { useState } from "react"

const LogInForm = ({loggedIn}:any) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()
    const { login, avatarUrl } = useAuth()

    const handleLogin = async () => {
        try {
            await signIn({ username, password })
            login()
            router.push("/StudentProfile")
        
        } catch (error:any) {
            setError(error.message)
        }
    }

    if (loggedIn) {
        router.push("/StudentProfile")
    }

    return(
        <Grid container spacing={2} direction="column">
            <Grid item>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    id="user-name"
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
                    id="password"
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
    )
}

export default LogInForm