import React from "react";

import HomeIcon from "../images/HomeIcon";
import AboutUs from "../images/about";
import BorderIcon from "../images/border";
import Burger from "../images/burger";
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Home from "../pages/Home";
import AboutUsPage from "../pages/AboutUs";
import RoutedPage from "../pages/RotedPages"


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KingBedIcon from '../images/bedIcon';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const drawerWidth = 230;
const styles = {
  paperContainer: {
      background:"#f3e1d5"
  }
};
const AppbarStyles = {
  paperContainer: {
      backgroundImage: `url(https://res.cloudinary.com/dehmdybij/image/upload/v1640960678/carving_gibp9m.jpg)`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
  }
};

const DrawerStyle={
  paperContainer:{
    backgroundColor:"#d95e47",
    color:"#f4e2d3",
    height:"100%",
   
  }
}
const ToolbarStyle={
  MuiPaperRoot:{
    backgroundColor:"#f3e1d5"
  }
}
function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={DrawerStyle.paperContainer} >
      <Toolbar style={ToolbarStyle.MuiPaperRoot}> <img src="https://res.cloudinary.com/dehmdybij/image/upload/v1640964158/logo_fon02z.jpg" alt="RWC" height="100%" width="100%"/></Toolbar>
      <Divider />
      <List>
          <ListItem button key="Home" component={Link} to="/">
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
      </List>
	  <List>
          <ListItem button key="Beds" component={Link} to="/bed">
            <ListItemIcon>
              <KingBedIcon/>
            </ListItemIcon>
            <ListItemText primary="beds" />
          </ListItem>
      </List>
      <List>
          <ListItem button key="door" component={Link} to="/door">
            <ListItemIcon>
              <DoorFrontIcon sx={{color:"#f3e1d5"}}/>
            </ListItemIcon>
            <ListItemText primary="doors" />
          </ListItem>
      </List>
      <List>
          <ListItem button key="border" component={Link} to="/border">
            <ListItemIcon>
              <BorderIcon/>
            </ListItemIcon>
            <ListItemText primary="borders" />
          </ListItem>
      </List>
      <List>
          <ListItem button key="About Us" component={Link} to="/aboutus">
            <ListItemIcon>
              <AboutUs/>
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
	  	  style={AppbarStyles.paperContainer}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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
            <Burger />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          style={DrawerStyle.MuiPaperRoot}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
        
        style={{backgroundColor:"#f3e1d5"}}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
      className="routeArea"
      style={styles.paperContainer}
        component="main"
        sx={{ flexDirection:"column",display: 'flex',
        minHeight: "100vh", width:"100%"}}
      >
        <Toolbar />
        
        <Box
            
            sx={{ flexGrow: 1 }}
            style={{padding:"2vh"}}
            >
              <br/>
            <Routes>
              <Route path='/' exact  element={<Home/>}/>
              <Route path='/aboutus' element={<AboutUsPage/>}/>
              <Route path="/bed"     element={<RoutedPage    prefix="bed"     widthmobile="290vw" widthsm="240vw" width1="250vh" width2="270vh" width3="370vh" width4="370vh" width5="475" heightmobile="270vh" heightsm="240vh" height1="250vh" height2="270vh" height3="370vh" height4="370vh" height5="475"/>}/>
              <Route path="/door"    element={<RoutedPage    prefix="door"    widthmobile="230vw" widthsm="210vw" width1="210vh" width2="220vh" width3="280vh" width4="300vh" width5="280" heightmobile="350vh" heightsm="350vh" height1="350vh" height2="400vh" height3="420vh" height4="510vh" height5="510"/>}/>
              <Route path="/border"  element={<RoutedPage    prefix="border"  widthmobile="290vw" widthsm="240vw" width1="250vh" width2="270vh" width3="370vh" width4="370vh" width5="475" heightmobile="270vh" heightsm="240vh" height1="250vh" height2="270vh" height3="370vh" height4="370vh" height5="475"/>}/>
            </Routes>
            </Box>
            
          
            <br/>

            <Box sx={{minHeight:"10vh",width:"95vw",margin:"0"}}className="footer" style={{fontWeight:"800",backgroundColor:"#e99c84",width:"100%",textAlign:"center"}}>
                
                <br/>
                Developed by Yogeshwaran <br/>
                Contact us at  <br/>
                <a href="https://www.instagram.com/noobmaster__27/"><InstagramIcon sx={{color:"#000"}} />   </a>
                <a href="https://www.facebook.com/yogeshwaran.pandian.96"><FacebookIcon sx={{color:"#000"}}/></a><br/>
                Feel free to call us at<br/>
                +918122601901 , +919655213757
            </Box> 
                 
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;
