import React, { useState } from 'react';
// import { Container, Input, Label, Textarea, Button } from 'flowbite-react';
import { AppBar, Typography, Box, TextField, Button, Avatar} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AnnouncementBoard from './AnnouncementBoard';
import AssignmentCardComponent from './AssignmentCardComponent';
const Announcement = () => {
  const [announcement, setAnnouncement] = useState('');

  const handleChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to submit the announcement
    console.log('Announcement submitted:', announcement);
    // Clear the input field after submission
    setAnnouncement('');
  };
//   const backgroundImageUrl = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3V8DNtvNqpn56lI2LYh_qqLfqEm9kRNfVVA&usqp=CAU")'
  const styles = {
    appBar: {
    //   backgroundImage: backgroundImageUrl,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
        backgroundColor:'#0284c7',
      backgroundPosition: 'center',
      borderRadius: '20px',
      marginTop: '30px',
      width: '80%',
      height: '200px',
      marginRight: '50px',
    },
    title: {
      mt: '30px',
      ml:'40px'
    },
    title2:{
        mt:'20px',
        ml:'50px'
    }
  };
  return (
    <div className='container mx-auto ml-20'>
        <div>
          <AppBar
        position="fixed"
        sx={styles.appBar}
      >
        
        <Typography variant="h1" noWrap component="div" sx={styles.title}>
            Database Management System    
          </Typography>
          <Typography variant="h4" noWrap component="div" sx={styles.title}>
            Mr. Basit Ali Jasani    
          </Typography>
          <Typography variant="h4" noWrap component="div" sx={styles.title2}>
            BSSE-B   
          </Typography>
      </AppBar>
      </div>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '70%',
        marginTop: '250px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Avatar sx={{ mr: 2, mb:13, backgroundColor:'#0284c7' }}>
        <AccountCircleIcon />
      </Avatar>
      <Box sx={{ flexGrow: 1 }}>
        
        <form onSubmit={handleSubmit} style={{color:'black'}}>
          <TextField
            fullWidth
            id="announcement"
            placeholder="Announce something to your class"
            multiline
            rows={3}
            variant="filled"
            value={announcement}
            onChange={handleChange}
            sx={{ marginBottom: '20px', backgroundColor:'white' }}
          />
          
        </form>
        <Button type="submit" variant="contained" style={{ backgroundColor: '#0284c7' }}>
  Post
</Button>

      </Box>
     
    </Box>
    {
        <AnnouncementBoard/>
        // <AssignmentCardComponent/>
    }
    </div>
  );
};

export default Announcement;
