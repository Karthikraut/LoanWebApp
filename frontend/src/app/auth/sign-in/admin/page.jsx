// pages/admin-login.js
"use client";
import { useState } from 'react';
import { Box, TextField, Button, Typography, Stack, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type={showPassword ? 'text' : 'password'}
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
          <Button
            variant="contained"
            fullWidth
            color="primary"
            sx={{ mt: 2 }}
          >
            Login as Admin
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AdminLogin;
