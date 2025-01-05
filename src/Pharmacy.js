// src/Pharmacy.js

import React from 'react';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

// PharmacyInfo Component
const Pharmacy = () => {
  // Static pharmacy personnel data
  const pharmacyPersonnel = [
    {
      id: 1,
      name: "Pharmacist Sarah Green",
      speciality: "Clinical Pharmacist",
      experience: "9 years",
      contact: "789-012-3456",
      email: "sarah.green@pharmacy.com"
    },
    {
      id: 2,
      name: "Pharmacist Tom Harris",
      speciality: "Community Pharmacist",
      experience: "6 years",
      contact: "890-123-4567",
      email: "tom.harris@pharmacy.com"
    },
    {
      id: 3,
      name: "Pharmacist Laura White",
      speciality: "Hospital Pharmacist",
      experience: "11 years",
      contact: "901-234-5678",
      email: "laura.white@pharmacy.com"
    }
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Pharmacy Personnel Information
      </Typography>
      <Grid container spacing={3}>
        {pharmacyPersonnel.map((person) => (
          <Grid item xs={12} sm={6} md={4} key={person.id}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="div">
                  {person.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Speciality:</strong> {person.speciality}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Experience:</strong> {person.experience}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Contact:</strong> {person.contact}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <strong>Email:</strong> {person.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pharmacy;