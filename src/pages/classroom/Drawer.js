import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ClassCard from './ClassCard';
import ClassDetails from './ClassDetails';

const drawerWidth = 240;
const classesData = [
  { className: 'BSSE', teacher: 'Mr. Basit Ali', subject: 'Maths' },
  { className: 'BSCS', teacher: 'Dr. Zulfiqar Ali Memon', subject: 'Database' },
  { className: 'BSAI', teacher: 'Dr. Rafi', subject: 'Data Structure' },
  { className: 'BSSE', teacher: 'Mr. Basit Ali', subject: 'Maths' },
  { className: 'BSCS', teacher: 'Dr. Zulfiqar Ali Memon', subject: 'Database' },
  { className: 'BSAI', teacher: 'Dr. Rafi', subject: 'Data Structure' }
];


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function TemporaryDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [showClasses, setShowClasses] = React.useState(true);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    if(index == 0){
      setShowClasses(true);
    }else{
      setShowClasses(false);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Courses','Announcements'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{marginBottom:'15px'}}>
            <ListItemButton 
            selected = {selectedItem === index}
            onClick={() => handleItemClick(index)}
            >
              <ListItemIcon sx={{color : selectedItem == index ? '#1677FF': 'black' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{color : selectedItem == index ? '#1677FF': 'black' }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider/>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box style={{display:'flex'}}>
    <Box
    component="main"
    sx={{flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
  >
    <Toolbar />
      {
        showClasses && (
        <Grid container spacing={2}> 
       
        {classesData.map((data, index)=>(
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <ClassCard key={index} 
            classname={data.className} 
            subject={data.subject}
            teacher={data.teacher} 
            
            />
          </Grid>
        ))}
        </Grid>
        )
      }
  </Box> 
  </Box>    
      )
   
 
}


    // <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          height:'120px'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap component="div" sx={{ mt: '30px'}}>
            EduClassroom     
          </Typography>
        </Toolbar>
      </AppBar> */}
      {/* <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        > */}
          {/* {drawer} */}
        {/* </Drawer> */}
      {/* </Box> */} 