import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const ID = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleContinue = () => {
    if (role === 'nurse') {
      navigate('/nurse');
    } else if (role === 'pharmacist') {
      navigate('/pharmacy');
    } else if (role === 'doctor') {
      navigate('/doctor');
    } else if (role === 'user') {
      navigate('/home');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#ffffff', // White background
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Select Your Role
      </Typography>
      <FormControl sx={{ width: 300, marginBottom: 2 }}>
        <InputLabel id="role-select-label">Role</InputLabel>
        <Select
          labelId="role-select-label"
          value={role}
          onChange={handleRoleChange}
          label="Role"
        >
          <MenuItem value="nurse">Nurse</MenuItem>
          <MenuItem value="pharmacist">Pharmacist</MenuItem>
          <MenuItem value="doctor">Doctor</MenuItem>
          <MenuItem value="user">Patient / User</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={handleContinue}
        fullWidth
        disabled={!role}
        sx={{ maxWidth: 300 }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default ID;
