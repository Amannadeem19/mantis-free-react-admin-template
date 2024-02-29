// src/components/Sidebar.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import { IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// N53352523A
const Sidebar = () => {
  return (


    <>
    {/* <IconButton
    //  onClick={toggleDrawer}
     edge="start"
     color="inherit"
     aria-label="menu"
     sx={{ mr: 2 }}
    >
        <MenuIcon/>
    </IconButton> */}
    <Drawer
        sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
    //   open={isOpen}
    //   onClose={toggleDrawer}
    >
      <List>
     
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Assignments" />
        </ListItem>
        
        {/* Add more sidebar items as needed */}
      </List>
    </Drawer>
    </>

  );
};

export default Sidebar;
