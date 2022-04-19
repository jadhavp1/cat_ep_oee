import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';





function createData(StartTime, DownTime, Duration, Reason,) {
  return { StartTime, DownTime, Duration, Reason };
}



function Downtimelog() {
  return (
    <div style={{marginTop:'50px'}}>
      <div style={{fontSize:'40px', fontWeight:600, marginLeft:'-10px'}}>Production</div>
      <Grid container spacing={1}>
        <Grid container direction={'column'} sm={8}>
          <Grid item alignItems={'center'} sx={{ display: 'flex' }}>
            <h1 style={{ marginBottom: 1 }}>Plant Name:</h1>
            {/* <Box sx={{ width: 300, height: 35, border: '2px solid black', borderRadius: '8px', marginTop: '16px', alignItems: 'center' }}>
              <h4 style={{ margin: '2px auto', width: '100px' }}>East peoria</h4>
            </Box> */}
            <Paper className='small-box' style={{backgroundColor:'#cdcdcd',marginTop:'15px'}}>East peoria</Paper>
          </Grid>
          <Grid item alignItems={'center'} sx={{ display: 'flex' }}>
            <h2>Shift:</h2>
            {/* <Box sx={{ width: 450, height: 35, border: '2px solid black', borderRadius: '8px', alignItems: 'center' }}>
              <h4 style={{ margin: '2px auto', width: '260px' }}>Shift 1 (6:00 AM to 3:00 PM)</h4>
            </Box> */}
            <Paper className='small-box' style={{backgroundColor:'#cdcdcd'}}>Shift 1 (6:00 AM to 3:00 PM)</Paper>
          </Grid>
        </Grid>
        <Grid container sm={4}>
          <Grid item sx={{ marginTop: '10px' }}>
          <Button style={{ width: 350, height: 100, border: '2px solid black',borderRadius:'20px'}}>
            {/* <Box sx={{ width: 350, height: 100, border: '2px solid black', borderRadius: '10px' }}> */}
              <h1>Start Production</h1>
            {/* </Box> */}
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={1} style={{ marginTop: '40px', marginLeft:'8px' }} >
                    <Grid container sm={8}>
                        <Grid container direction={'column'}>
                            <label style={{ fontSize: '1.5rem' }}>Part Name</label>
                            <TextField id="standard-basic" label="ABC" variant="standard" style={{ width: '95%' }} />
                            <label style={{ fontSize: '1.5rem', marginTop:'25px'}}>Part Number</label>
                            <TextField id="standard-basic" label="12345" variant="standard" style={{ width: '95%' }} />
                            <label style={{ fontSize: '1.5rem', marginTop:'25px' }}>Loading Unloading Time (mins)</label>
                            <TextField id="standard-basic" label="15" variant="standard" style={{ width: '95%' }} />
                            <label style={{ fontSize: '1.5rem', marginTop:'25px' }}>Target Count</label>
                            <TextField id="standard-basic" label="100" variant="standard" style={{ width: '95%' }} />
                            <label style={{ fontSize: '1.5rem', marginTop:'25px' }}>Ideal Cycle Time(mins)</label>
                            <TextField id="standard-basic" label="450" variant="standard" style={{ width: '95%' }} />
                        </Grid>
                    </Grid>
                    <Grid container direction={'column'} mt={7} sm={4}>
                    <label style={{ fontSize: '1.5rem' }}>Planned Shutdown Time(mins)</label>
                            <TextField id="standard-basic" label="60" variant="standard" style={{ width: '95%' }} />
                       
                    </Grid>
                </Grid>
        {/* <Grid container sm={12} direction='row'justifyContent={'flex-end'} mt={6}>
          <Button variant="contained" size={'large'} style={{ backgroundColor: '#9e9e9e', marginRight:'10px' }}>Back</Button>
          <Button variant="contained" size={'large'}>Submit</Button>
        </Grid> */}
      </Grid>
      <div style={{display:'flex',float:'right'}}>
          <Button variant="outlined" style={{width:"150px",height:"70px",marginRight:'30px'}}>Back</Button>
          <Button variant="contained" style={{width:"150px",height:"70px"}}>Submit</Button>
      </div>

    </div>
  )
}
export default Downtimelog;