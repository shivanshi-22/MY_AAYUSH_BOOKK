import React from 'react';
import {
  Box,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  IconButton,
} from '@mui/material';
import MedicationReminderIcon from '@mui/icons-material/Medication';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        position: 'relative', // To allow absolute positioning of Account icon
      }}
    >
      {/* Account Icon at the top-right */}
      <IconButton
        onClick={() => navigate('/account')}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          bgcolor: '#ffffff',
          boxShadow: 2,
          padding: 1,
          borderRadius: '50%',
        }}
      >
        <AccountCircleIcon />
      </IconButton>

      {/* Centered Title */}
      <Typography
        variant="h4"
        component="div"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem' },
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        My Aayush Book
      </Typography>

      {/* Bottom Navigation Bar */}
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue === 0) navigate('/home');
          if (newValue === 1) navigate('/pill-reminder');
          if (newValue === 2) navigate('/id');
          if (newValue === 3) navigate('/notification');
          if (newValue === 4) navigate('/cart');
        }}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          bgcolor: '#ffffff',
          boxShadow: '0 -1px 10px rgba(0,0,0,0.2)',
          padding: { xs: '5px 0', sm: '10px 0' },
          zIndex: 10,
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          sx={{
            minWidth: 0,
            maxWidth: '80px',
            fontSize: '0.8rem',
          }}
        />
        <BottomNavigationAction
          label="Pill Reminder"
          icon={<MedicationReminderIcon />}
          sx={{
            minWidth: 0,
            maxWidth: '80px',
            fontSize: '0.8rem',
          }}
        />
        <BottomNavigationAction
          label="Logout"
          icon={<LogoutIcon />}
          sx={{
            minWidth: 0,
            maxWidth: '80px',
            fontSize: '0.8rem',
          }}
        />
        {/* New Buttons: Notifications and Cart */}
        <BottomNavigationAction
          label="Notifications"
          icon={<NotificationsIcon />}
          sx={{
            minWidth: 0,
            maxWidth: '80px',
            fontSize: '0.8rem',
          }}
        />
        <BottomNavigationAction
          label="Cart"
          icon={<ShoppingCartIcon />}
          sx={{
            minWidth: 0,
            maxWidth: '80px',
            fontSize: '0.8rem',
          }}
        />
      </BottomNavigation>
    </Box>
  );
}

export default HomePage;
