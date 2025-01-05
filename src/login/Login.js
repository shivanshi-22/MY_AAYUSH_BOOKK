import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    if (email === 'test@gmail.com' && password === '123456') {
      navigate('/home'); // Navigate to the home page
    } else {
      setError('Invalid credentials. Please sign up or try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0f7fa, #ffffff)', // Example gradient background
        padding: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Login
      </Typography>
      <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: 400 }}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" sx={{ mt: 3 }}>
        Don't have an account?{' '}
        <Link href="/signup" underline="hover">
          Sign up
        </Link>
      </Typography>
    </Box>
  );
}

export default Login;
