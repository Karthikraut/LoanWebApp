"use client";
import { useState } from 'react';
import { Box, TextField, Button, Typography, Stack, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Cookies from 'js-cookie'; // For setting cookies on the client

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }) // Send email and password to the backend
      });

      const data = await response.json();

      if (data.success) {
        // Store the token in a cookie using js-cookie
        Cookies.set('token', data.data, { expires: 7 }); // Token is stored for 7 days
        console.log("Login successful", data.data);

        // Redirect to the admin dashboard or handle login success as needed
        window.location.href = '/admin-dashboard'; // Example of redirect after successful login
      } else {
        setErrorMessage(data.message || "Failed to sign in");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          padding: 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h4" textAlign="center" gutterBottom>
          Admin Login
        </Typography>
        <Stack spacing={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Controlled input for email
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Controlled input for password
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errorMessage && (
            <Typography color="error" variant="body2">
              {errorMessage}
            </Typography>
          )}
          <Button
            variant="contained"
            fullWidth
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleLogin} // Call the login function when button is clicked
          >
            Login as Admin
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdminLogin;
