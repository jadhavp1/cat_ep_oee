//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

import Production from './pages/production';
import Downtime from './pages/downtime';
import Reject from './pages/reject';
import Setting from './pages/setting';
import Production1 from './pages/productionnew';
import Login from './pages/userlogin';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function App(props: Props) {
  // usestate for setting a javascript
	// object for storing and using data
	const [getuser, setdata] = useState({
    username:"",
  });

  
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		setInterval(() => {
		fetch("http://localhost:3000/getuser").then((res) =>
			res.json().then((getuser) => {
				// Setting a data from api

                    // code to refresh your component.
					console.log("dataata",getuser)
					setdata({
                        username:getuser.User_Name,
					});


			})

		);
	},500)
	}, []);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
     {/* <Toolbar /> */}
     {/* <Divider /> */}

      <div style={{padding:"20%"}}>	
      	<AccountCircleIcon style= {{width:"128px",height:"128px"}}/>
	<div style={{textAlign:"center"}}> Welcome {getuser.username}</div>
      </div>
    <div>
      <form action = "http://localhost:5000/logout" > 
	<Button variant="outlined" style={{width:'100%', color:'#000', marginTop:'-25%', backgroundColor:'#fff'}}  value="logout" name="logout" type="submit">Logout</Button>
      </form>
    </div> 
      <List>
        {[{title:'OEE Dashboard',path:'/production'},{title:'Downtime Log',path:'/downtime'},{title:'Reject',path:'/reject'},{title:'Setting',path:'/setting'}, {title:'Production Job',path:'/production1'},{title:'Login',path:'/userlogin'}].map((text, index) => (
          <ListItem button key={text.title} style={{textAlign:"center"}}>
	    <Link to={text.path} style={{textDecoration:"none"}}>
            	<ListItemText primary={text.title} style={{color:"#fff"}} />
            </Link>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
     <Router>
      <CssBaseline />
      <AppBar
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
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" noWrap component="div">
             OEE Monitoring System 
           
          </Typography>
        </Toolbar>
      </AppBar>

       
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >


        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
        
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'#1976d2', color:'#fff' }
          }}
        >
          {drawer}
          
          
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor:'#1976d2', color:'#fff' }
          }}
          open
        >
          {drawer}
        </Drawer>
       
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
         <Routes>
        <Route path="/production" element={<Production />} />
	      <Route path="/downtime" element={<Downtime />} />
	      <Route path="/reject" element={<Reject />} />
	      <Route path="/setting" element={<Setting />} />
        <Route path="/production1" element={<Production1 />} />
        <Route path="/userlogin" element={<Login />} />
         </Routes>
      </Box>
     </Router>
    </Box>
  );
}

export default App;
