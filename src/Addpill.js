import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Select,
  MenuItem,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import MedicationReminderIcon from '@mui/icons-material/Medication';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function AddDrugPage() {
  const navigate = useNavigate();
  const [drugName, setDrugName] = useState('');
  const [drugType, setDrugType] = useState('Pill');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [directions, setDirections] = useState(''); // Updated to use dropdown
  const [pillsPerDose, setPillsPerDose] = useState('');
  const [pillStrength, setPillStrength] = useState('');
  const [pillsRemaining, setPillsRemaining] = useState('');
  const [pillsPerRefill, setPillsPerRefill] = useState('');
  const [refillAlert, setRefillAlert] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [expirationAlert, setExpirationAlert] = useState('');
  const [value, setValue] = useState(0);

  const handleSave = () => {
    const pill = {
      name: drugName,
      type: drugType,
      startDate,
      endDate,
      directions,
      pillsPerDose,
      pillStrength,
      pillsRemaining,
      pillsPerRefill,
      refillAlert,
      expirationDate,
      expirationAlert,
    };

    if (!drugName || !startDate || !endDate || !directions) {
      alert('Please fill out all required fields.');
      return;
    }

    navigate('/pill-reminder', { state: { pill } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: 400,
        mx: 'auto',
        mt: 5,
        p: 2,
        mb: 12, // Ensures content isn't overlapped by the fixed bottom bar
      }}
    >
      {/* Form Section */}
      <Typography variant="h6" color="primary" gutterBottom>
        Required
      </Typography>
      <Divider sx={{ width: '100%' }} />

      <TextField
        label="Drug Name"
        variant="outlined"
        size="small"
        fullWidth
        value={drugName}
        onChange={(e) => setDrugName(e.target.value)}
        sx={{ my: 2 }}
      />

      <Select
        label="Drug Type"
        value={drugType}
        onChange={(e) => setDrugType(e.target.value)}
        fullWidth
        size="small"
        sx={{ my: 2 }}
      >
        <MenuItem value="Pill">Pill</MenuItem>
        <MenuItem value="Injection">Injection</MenuItem>
        <MenuItem value="Liquid">Liquid</MenuItem>
      </Select>

      <TextField
        label="Starting Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{ my: 2 }}
      />

      <TextField
        label="Ending Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{ my: 2 }}
      />

      {/* Directions Dropdown */}
      <Select
        label="Directions"
        value={directions}
        onChange={(e) => setDirections(e.target.value)}
        fullWidth
        size="small"
        sx={{ my: 2 }}
      >
        <MenuItem value="Post Lunch/Dinner">Post Lunch/Dinner</MenuItem>
        <MenuItem value="Pre Lunch/Dinner">Pre Lunch/Dinner</MenuItem>
        <MenuItem value="With Lunch/Dinner">With Lunch/Dinner</MenuItem>
      </Select>

      {/* Optional Section */}
      <Typography variant="h6" color="primary" gutterBottom sx={{ mt: 3 }}>
        Optional
      </Typography>
      <Divider sx={{ width: '100%' }} />

      <TextField
        label="Pills per Dose"
        variant="outlined"
        size="small"
        fullWidth
        value={pillsPerDose}
        onChange={(e) => setPillsPerDose(e.target.value)}
        sx={{ my: 2 }}
      />

      <TextField
        label="Pill Strength (mg)"
        variant="outlined"
        size="small"
        fullWidth
        value={pillStrength}
        onChange={(e) => setPillStrength(e.target.value)}
        sx={{ my: 2 }}
      />

      <TextField
        label="Pills Remaining"
        variant="outlined"
        size="small"
        fullWidth
        value={pillsRemaining}
        onChange={(e) => setPillsRemaining(e.target.value)}
        sx={{ my: 2 }}
      />

      <TextField
        label="Pills per Refill"
        variant="outlined"
        size="small"
        fullWidth
        value={pillsPerRefill}
        onChange={(e) => setPillsPerRefill(e.target.value)}
        sx={{ my: 2 }}
      />

      <TextField
        label="Refill Alert (days)"
        variant="outlined"
        size="small"
        fullWidth
        value={refillAlert}
        onChange={(e) => setRefillAlert(e.target.value)}
        sx={{ my: 2 }}
      />

      <TextField
        label="Expiration Date"
        type="date"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        fullWidth
        InputLabelProps={{ shrink: true }}
        sx={{ my: 2 }}
      />

      <TextField
        label="Expiration Alert (days)"
        variant="outlined"
        size="small"
        fullWidth
        value={expirationAlert}
        onChange={(e) => setExpirationAlert(e.target.value)}
        sx={{ my: 2 }}
      />

      <Box sx={{ width: '100%', my: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ImageIcon fontSize="large" />
        <Box display="flex" justifyContent="center" my={1}>
          <Button variant="outlined" size="small">Choose Image</Button>
          <Button variant="outlined" size="small" sx={{ ml: 1 }}>Clear</Button>
        </Box>
      </Box>

      <Button variant="contained" color="primary" sx={{ width: '100%', mt: 3 }} onClick={handleSave}>
        Save
      </Button>

      {/* Bottom Navigation Bar */}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue === 0) navigate('/'); // Navigate to Home page
          if (newValue === 1) navigate('/pill-reminder'); // Navigate to Pill Reminder page
          if (newValue === 2) navigate('/account'); // Navigate to Account page
        }}
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
    </Box>
  );
}

export default AddDrugPage;
