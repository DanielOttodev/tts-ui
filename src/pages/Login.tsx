import { FormEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { useAuth } from '../hooks/useAuth';
import theme from '../assets/themes/index'
import { useState } from 'react';
import { LinearProgress } from '@mui/material';
const url = import.meta.env.VITE_AUTH_URL
export default function Login() {
  const { onLogin } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const submitBody = {
      username: data.get('email'),
      password: data.get('password'),
    };
    // Attempt a login
    try {
      const request = await fetch(url, {
        method: "POST",
        body: JSON.stringify(submitBody),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const response = await request.json();
      const token: string = await response.AuthenticationResult.IdToken;
      setLoading(false);
      onLogin(token);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email / Username"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"

                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            {loading && <LinearProgress />}
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Link href="/signUp" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}