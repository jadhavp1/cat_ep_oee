import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
// import {
//   randomCreatedDate,
//   randomTraderName,
//   randomUpdatedDate,
// } from '@mui/x-data-grid-generator';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';




function Downtimelog() {



  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div>
      <Grid container spacing={1}>
        <Grid container>
          <Grid item sx={{ marginTop: '10px' }}>
            <h1 style={{fontSize:'3rem'}}>Downtime Log</h1>
          </Grid>
        </Grid>
        <Grid container direction={'column'}>
          <Grid item alignItems={'center'} sx={{ display: 'flex',height:'50px' }}>
            <h1 style={{ fontSize:'2rem' }}>Plant Name: </h1>
            {/* <Box style={{marginTop:'30px',fontSize:'25px'}}> */}
              <p style={{fontSize:'1.5rem',paddingTop:'8px'}}>East peoria</p>
            {/* </Box> */}
          </Grid>
          <Grid item alignItems={'center'} sx={{ display: 'flex',height:'50px' }}>
            <h1 style={{fontSize:'2rem'}}>Shift:</h1>
            {/* <Box style={{marginTop:'5px',fontSize:'25px'}}> */}
              <p style={{fontSize:'1.5rem',paddingTop:'8px'}}>Shift 1 (6:00 AM to 3:00 PM)</p>
            {/* </Box> */}
          </Grid>
        </Grid>

        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            columns={[{ field: 'Downtime Start time', headerName: 'Downtime Start time', width: 400 },
            { field: 'Downtime end time', headerName: 'Downtime end time', width: 400 },
            { field: 'Duration', headerName: 'Duration', width: 300 },
            {
              field: "Reason",width:300 ,renderCell: (cellValues) => {
                return (
                  <div>
                    <Button aria-describedby={id} variant="contained" onClick={handleClick}>Edit</Button>
                    <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} style={{boxShadow:'none'}} anchorOrigin={{ vertical:'center',horizontal: 'right', }}>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="lunch" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="meeting" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary="fault" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Popover>
                  </div>
                );
              }
            }]}
            rows={[
              {
                id: 1,
                'Downtime Start time':'11-05-2020 14:56:05:00',
                'Downtime end time':'11-05-2020 14:58:05:00',
                'Duration' : '2mints'
              },
              {
                id: 2,
                'Downtime Start time':'11-05-2020 14:56:05:00',
                'Downtime end time':'11-05-2020 14:58:05:00',
                'Duration' : '2mints'
              },
              {
                id: 3,
                'Downtime Start time':'11-05-2020 14:56:05:00',
                'Downtime end time':'11-05-2020 14:58:05:00',
                'Duration' : '2mints'
              },
              {
                id: 4,
                'Downtime Start time':'11-05-2020 14:56:05:00',
                'Downtime end time':'11-05-2020 14:58:05:00',
                'Duration' : '2mints'
              },
            ]}
          />
        </div>
      </Grid>

      <div style={{display:'flex',float:'right', marginTop:'30px'}}>
          <Button variant="outlined" style={{width:"150px",height:"70px",marginRight:'30px'}}>Back</Button>
          <Button variant="contained" style={{width:"150px",height:"70px"}}>Submit</Button>
      </div>
      

    </div>
  )
}
export default Downtimelog;