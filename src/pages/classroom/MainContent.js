// src/components/MainContent.js
import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MainContent = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Classroom!
        </Typography>
        {/* Add your main content here */}
      </Box>
    </Container>
  );
};

export default MainContent;
