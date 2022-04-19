import React, { Component } from 'react';

// MUI Component
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


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
                    
                    <h1 style={{marginTop:'5%'}}>Reject Count : </h1>
                    <Input style={{width:'500px'}} />

                    <h1>Reason</h1>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '25px' }}>{"Measurment issue"}</span>} />
                        <FormControlLabel control={<Checkbox defaultChecked />} label={<span style={{ fontSize: '25px' }}>{"Search on Product"}</span>} />
                        <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '25px' }}>{"Dent on product"}</span>} />
                        <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '25px' }}>{"Quality issue"}</span>} />
                        <FormControlLabel control={<Checkbox />} label={<span style={{ fontSize: '25px' }}>{"Other"}</span>} />
                    </FormGroup>

                    <div style={{display:'flex',float:'right'}}>
                        <Button variant="outlined" style={{width:"150px",height:"70px",marginRight:'30px'}}>Back</Button>
                        <Button variant="contained" style={{width:"150px",height:"70px"}}>Submit</Button>
                    </div>

                </Box>    
            </div>
        );
    }
}

export default Reject;