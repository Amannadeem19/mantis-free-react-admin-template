// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static" sx={{height:'250px'}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          My Classroom
        </Typography>
        {/* Add any additional header content here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
