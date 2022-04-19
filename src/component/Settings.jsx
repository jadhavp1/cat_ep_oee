import React, { Component } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import { borderRadius } from '@mui/system';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';

class Settings extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={1}>
                    <Grid container>
                        <Grid item >
                            <h1 style={{ fontSize: '3rem' }}>Setting</h1>
                        </Grid>
                    </Grid>
                    <Grid container direction={'column'}>
                        <Grid item alignItems={'center'} sx={{ display: 'flex', height: '30px' }}>
                            <h1 style={{ fontSize: '2rem' }}>Plant Name: </h1>
                            {/* <Box style={{marginTop:'30px',fontSize:'25px'}}> */}
                            <p style={{ fontSize: '1.5rem', paddingTop: '8px' }}>East peoria</p>
                            {/* </Box> */}
                        </Grid>
                        <Grid item alignItems={'center'} sx={{ display: 'flex', height: '30px' }}>
                            <h1 style={{ fontSize: '2rem' }}>Shift:</h1>
                            {/* <Box style={{marginTop:'5px',fontSize:'25px'}}> */}
                            <p style={{ fontSize: '1.5rem', paddingTop: '8px' }}>Shift 1 (6:00 AM to 3:00 PM)</p>
                            {/* </Box> */}
                        </Grid>
                    </Grid>


                </Grid>
                <Grid container spacing={1} style={{ marginTop: '40px' }} >
                    <Grid container sm={8}>
                        <Grid container direction={'column'}>
                            <label style={{ fontSize: '25px', }}>Plant Name</label>
                            <TextField id="standard-basic" label="Standard" variant="standard" style={{ width: '95%' }} />
                            <label style={{ fontSize: '25px', marginTop: '30px' }}>Company</label>
                            <TextField id="standard-basic" label="Standard" variant="standard" style={{ width: '95%' }} />
                            <label style={{ fontSize: '25px', marginTop: '30px' }}>Location</label>
                            <TextField id="standard-basic" label="Standard" variant="standard" style={{ width: '95%' }} />
                        </Grid>
                        <Grid container>
                            <FormControl variant="filled" sx={{ mt: 5, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-filled-label">Shift</InputLabel>
                                <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled">
                                    <MenuItem value={10}><label style={{ backgroundColor: 'grey', border: '1px solid black', height: '35px', width: '80px', fontSize: '20px' }}>Shift1</label>Shift 1 (6:00 AM to 3:00 PM)</MenuItem>
                                    <MenuItem value={20}><label style={{ backgroundColor: 'grey', border: '1px solid black', height: '35px', width: '80px', fontSize: '20px' }}>Shift2</label>Shift 2 (6:00 AM to 3:00 PM)</MenuItem>
                                    <MenuItem value={30}><label style={{ backgroundColor: 'grey', border: '1px solid black', height: '35px', width: '80px', fontSize: '20px' }}>Shift3</label>Shift 2 (6:00 AM to 3:00 PM)</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container direction={'column'} mt={7} sm={4}>
                        <label style={{ fontSize: '25px' }}>Downtime Reason:</label>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel disabled id="demo-multiple-name-label" >Down</InputLabel>
                            <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" input={<OutlinedInput label="Name" />}>
                                <MenuItem value={10}>national holiday</MenuItem>
                                <MenuItem value={20}>bank holiday</MenuItem>
                                <MenuItem value={30}>lunch</MenuItem>
                            </Select>
                        </FormControl>
                        <label style={{ fontSize: '25px', marginTop: '30px' }}>Weekly Off:</label>
                        <FormControl sx={{ width: '300px' }}>
                            <InputLabel disabled id="demo-multiple-name-label" >0</InputLabel>
                            <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" input={<OutlinedInput label="Name" />}>
                                <MenuItem disabled value="">
                                    <em>Placeholder</em>
                                </MenuItem>
                                <MenuItem>0</MenuItem>
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={8}>
                    <Grid item sm={8}>
                        <Button variant="contained" color={'primary'} style={{ marginRight: '10px', width: "150px", height: "70px" }}>Submit</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" style={{ marginRight: '10px', width: "150px", height: "70px" }}>Back</Button>
                        <Button variant="contained" color={'primary'} style={{ marginRight: '10px', width: "150px", height: "70px" }}>Submit</Button>
                    </Grid>
                </Grid>

            </div >
        )
    }
}
export default Settings;