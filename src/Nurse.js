import React from 'react';
import { Card, CardContent, Typography, Grid, Container, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// NurseInfo Component
const Nurse = () => {
  const navigate = useNavigate();

  // Static nurse data
  const nurses = [
    {
      id: 1,
      name: "Nurse Amy Johnson",
      speciality: "Pediatrics",
      experience: "12 years",
      contact: "456-789-0123",
      email: "amy.johnson@hospital.com"
    },
    {
      id: 2,
      name: "Nurse Karen Brown",
      speciality: "Geriatrics",
      experience: "10 years",
      contact: "567-890-1234",
      email: "karen.brown@hospital.com"
    },
    {
      id: 3,
      name: "Nurse Peter Williams",
      speciality: "Emergency Care",
      experience: "7 years",
      contact: "678-901-2345",
      email: "peter.williams@hospital.com"
    }
  ];

  const handleLogout = () => {
    navigate('/id'); // Redirect to the login/ID page
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" gutterBottom>
          Nurse Information
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
      <Grid container spacing={3}>
        {nurses.map((nurse) => (
          <Grid item xs={12} sm={6} md={4} key={nurse.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="div">
                  {nurse.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Speciality:</strong> {nurse.speciality}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Experience:</strong> {nurse.experience}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Contact:</strong> {nurse.contact}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Email:</strong> {nurse.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Nurse;
