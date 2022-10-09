import React, { Component } from 'react';
// MUI Component
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
// CSS
import './page.css';
class Reject extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{marginTop:'50px'}}>
                <div style={{fontSize:'40px', fontWeight:600}}>Rejected</div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div style={{display:'flex'}}>
                                <h1 style={{fontWeight:600}}>Plant Name :</h1>
                                <Paper className='small-box' style={{backgroundColor:'#cdcdcd',marginTop:'30px'}}>East peoria</Paper>
                            </div>
                            <div style={{display:'flex'}}>
                                <h2 style={{fontWeight:600}}>Shift :</h2>
                                <Paper className='small-box' style={{backgroundColor:'#cdcdcd',marginTop:'20px'}}>Shift 1 (6:00 AM to 3:00 PM)</Paper>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                <Paper style={{backgroundColor:'#cdcdcd',fontSize:'50px',textAlign:'center',padding:'35px',width:'80%'}}>Rejected</Paper>
                            </div> */}
                        </Grid>
                    </Grid>
                    <form  action = "http://localhost:5000/reject" method = "POST">
                    <h1 style={{marginTop:'5%'}}>Reject Count : </h1>
                    <Input style={{width:'500px'}}  name="count"/>
                    <h1>Reason</h1>
                    <Grid container>
                    <FormControl sx={{ width: '400px' }}>
                            <InputLabel disabled id="demo-multiple-name-label" >Down Time Reason</InputLabel>
                            <Select labelId="demo-simple-select-filled-label" id="Rreason" input={<OutlinedInput label="Name" />} name="reason">
                                <MenuItem value={'Measurment issue'}>Measurment issue</MenuItem>
                                <MenuItem value={'Dent on product'}>Dent on product</MenuItem>
                                <MenuItem value={'Search on Product'}> Search on Product </MenuItem>
                                <MenuItem value={'Quality issue'}> Quality issue </MenuItem>
                                <MenuItem value={'Other'}> Other </MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                    <div style={{display:'flex',float:'right'}}>
                        <Button variant="outlined" style={{width:"150px",height:"70px",marginRight:'30px'}}>Back</Button>
                        <Button variant="contained" style={{width:"150px",height:"70px"}} type="Submit" value="Running"  name="rstart" >Submit</Button>
                    </div>
                    </form>
                </Box>    
            </div>
        );
    }
}
export default Reject;