import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Doctor = () => {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: "Dr. John Smith",
      speciality: "Cardiologist",
      experience: "15 years",
      contact: "123-456-7890",
      email: "john.smith@hospital.com"
    },
    {
      id: 2,
      name: "Dr. Emily Chen",
      speciality: "Dermatologist",
      experience: "8 years",
      contact: "234-567-8901",
      email: "emily.chen@hospital.com"
    },
    {
      id: 3,
      name: "Dr. Michael Lee",
      speciality: "Neurologist",
      experience: "10 years",
      contact: "345-678-9012",
      email: "michael.lee@hospital.com"
    }
  ];

  const handleLogout = () => {
    navigate('/id'); // Redirect to the login/ID page
  };

  return (
    <div style={{ padding: '20px' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" gutterBottom>
          Doctor Information
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{doctor.name}</Typography>
                <Typography variant="body1">
                  <strong>Speciality:</strong> {doctor.speciality}
                </Typography>
                <Typography variant="body1">
                  <strong>Experience:</strong> {doctor.experience}
                </Typography>
                <Typography variant="body1">
                  <strong>Contact:</strong> {doctor.contact}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {doctor.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Doctor;
