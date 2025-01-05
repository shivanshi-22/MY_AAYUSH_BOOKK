import React, { useState, useEffect } from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
  Typography,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Box,
} from '@mui/material';
import { Add, Delete, Done, Schedule, Upload } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MedicationReminderIcon from '@mui/icons-material/Medication';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const PillReminder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pills, setPills] = useState([]);
  const [value, setValue] = useState(1); // Set initial value to Pill Reminder page

  // On mount, check if there's pill data passed and add it to the pills state
  useEffect(() => {
    if (location.state && location.state.pill) {
      setPills((prevPills) => [...prevPills, { ...location.state.pill, imageUploaded: false }]);
    }
  }, [location.state]);

  const handleToggle = (index) => {
    setPills((prevPills) =>
      prevPills.map((pill, i) =>
        i === index ? { ...pill, taken: !pill.taken } : pill
      )
    );
  };

  const removePill = (index) => {
    setPills((prevPills) => prevPills.filter((pill, i) => i !== index));
  };

  const navigateToAddPill = () => {
    navigate('/add-pill');
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      // Add logic here for image processing if needed
      setPills((prevPills) =>
        prevPills.map((pill, i) =>
          i === index ? { ...pill, imageUploaded: true, imageName: file.name } : pill
        )
      );
    }
  };

  // Bottom navigation handler
  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/home'); // Navigate to Home page
    if (newValue === 1) navigate('/pill-reminder'); // Stay on Pill Reminder page
    if (newValue === 2) navigate('/account'); // Navigate to Account page
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Pill Reminder
      </Typography>
      <List>
        {pills.map((pill, index) => (
          <ListItem key={index} divider>
            <Box sx={{ width: '100%' }}>
              <Checkbox
                edge="start"
                checked={pill.taken}
                onChange={() => handleToggle(index)}
                icon={<Schedule />}
                checkedIcon={<Done />}
              />
              <ListItemText
                primary={`${pill.name} - ${pill.dose || 'No dose specified'}`}
                secondary={pill.time || 'No specific time'}
                style={{ textDecoration: pill.taken ? 'line-through' : 'none' }}
              />
              <Box mt={1}>
                <Button variant="outlined" component="label" startIcon={<Upload />} fullWidth>
                  Upload Food Image
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleImageUpload(index, e)}
                  />
                </Button>
              </Box>
              {pill.imageUploaded && (
                <Box mt={2} p={2} sx={{ bgcolor: '#f9f9f9', borderRadius: '8px' }}>
                  <Typography variant="h6">Food Analysis</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Image uploaded: {pill.imageName}
                  </Typography>
                  <Typography variant="body1">Calories: 250 kcal</Typography>
                  <Typography variant="body1">Protein: 15g</Typography>
                  <Typography variant="body1">Fat: 8g</Typography>
                  <Typography variant="body1">Carbohydrates: 30g</Typography>
                  
                </Box>
              )}
            </Box>
            <ListItemSecondaryAction>
              <IconButton edge="end" color="secondary" onClick={() => removePill(index)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={navigateToAddPill}
        fullWidth
        style={{ marginTop: '10px' }}
      >
        Add Pill
      </Button>

      {/* Bottom Navigation Bar */}
      <BottomNavigation
        value={value}
        onChange={handleNavigationChange}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'white',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.2)',
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Pill Reminder" icon={<MedicationReminderIcon />} />
        <BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Container>
  );
};

export default PillReminder;
