// src/Notification.js

import React from 'react';
import { Card, CardContent, Typography, Grid, Container, Alert } from '@mui/material';

// Notification Component
const Notification = () => {
  // Static notification data
  const notifications = [
    {
      id: 1,
      time: "6:00 AM",
      message: "It's 6am, time to do yoga for a healthy start!"
    },
    {
      id: 2,
      time: "8:00 AM",
      message: "Don't forget to take your morning medications!"
    },
    {
      id: 3,
      time: "12:00 PM",
      message: "It's noon! Make sure to have a healthy lunch."
    },
    {
      id: 4,
      time: "3:00 PM",
      message: "It's 3pm, time for a short break and some water!"
    },
    {
      id: 5,
      time: "9:00 PM",
      message: "It's 9pm, prepare for bed and relax!"
    }
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>
      <Grid container spacing={3}>
        {notifications.map((notification) => (
          <Grid item xs={12} sm={6} md={4} key={notification.id}>
            <Card variant="outlined">
              <CardContent>
                <Alert severity="info">
                  <Typography variant="h6" component="div">
                    {notification.time}
                  </Typography>
                  <Typography variant="body2">
                    {notification.message}
                  </Typography>
                </Alert>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notification;