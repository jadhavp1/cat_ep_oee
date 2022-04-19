import React, { Component } from 'react';

// MUI Component
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

// CSS
import './page.css';

class Production extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div style={{marginTop:'50px'}} className="production">
                <div style={{fontSize:'40px', fontWeight:600}}>Production</div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div style={{display:'flex'}}>
                            <h1 style={{ marginBottom: 1 }}>Plant Name :</h1>
                                <Paper className='small-box' style={{backgroundColor:'#cdcdcd',marginTop:'30px'}}>East peoria</Paper>
                            </div>
                            <div style={{display:'flex'}}>
                                <h2>Shift :</h2>
                                <Paper className='small-box' style={{backgroundColor:'#cdcdcd',marginTop:'20px'}}>Shift 1 (6:00 AM to 3:00 PM)</Paper>
                            </div>
                            <div style={{display:'flex',marginTop:'30px'}}>
                                <div style={{fontSize:'20px'}}>Machine Connectivity :</div>
                                <Paper className='small-box' style={{backgroundColor:'#04951d', color:'#fff'}}>Good</Paper>
                            </div>
                            <div style={{display:'flex',marginTop:'20px'}}>
                                <div style={{fontSize:'20px'}}>Machine Status :</div>
                                <Paper className='small-box' style={{backgroundColor:'#04951d', color:'#fff'}}>Running</Paper>
                            </div>
                            <div style={{display:'flex',marginTop:'30px'}}>
                                <div style={{fontSize:'20px'}}>Part Name :</div>
                                <Paper className='small-box' style={{backgroundColor: '#ffb225'}}>abcd</Paper>
                                <div style={{fontSize:'20px',marginLeft:'40px'}}>Part Number :</div>
                                <Paper className='small-box' style={{backgroundColor: '#ffb225'}}>1234</Paper>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                {/* <Button style={{backgroundColor:'#04951d', color:'#fff',fontSize:'30px',textAlign:'center',padding:'10px',width:'80%'}}>Start Production</Button> */}
                                {/* <Paper style={{backgroundColor:'#04951d', color:'#fff',fontSize:'30px',textAlign:'center',padding:'10px',width:'80%'}}>Start Production</Paper> */}
                            </div>
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                {/* <Paper style={{backgroundColor:'#cdcdcd',fontSize:'25px',padding:'15px',width:'40%',textAlign:'center',fontWeight:600, border:'1px solid'}}>Resume Production</Paper> */}
                                <Button style={{backgroundColor:'#cdcdcd', color:'#000',fontSize:'40px',padding:'20px',textAlign:'center',fontWeight:600, border:'1px solid'}} startIcon={<PlayCircleFilledWhiteIcon style={{width:'32px',height:'32px'}} />} >Start</Button>
                                <Button style={{backgroundColor:'#cdcdcd', color:'#000',fontSize:'40px',padding:'20px',textAlign:'center',fontWeight:600, border:'1px solid'}} startIcon={<RestartAltIcon style={{width:'32px',height:'32px'}} />} >Resume</Button>
                                {/* <Paper style={{backgroundColor:'#cdcdcd',fontSize:'25px',padding:'15px',textAlign:'center',fontWeight:600, border:'1px solid'}}>Stop Production</Paper> */}
                                <Button style={{backgroundColor:'#cdcdcd', color:'#000',fontSize:'40px',padding:'20px',textAlign:'center',fontWeight:600, border:'1px solid'}} startIcon={<StopCircleIcon style={{width:'32px',height:'32px'}} />}>Stop</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                    <table style={{width:'100%',marginTop:'40px'}}>
                        <tr>
                            <th>Total Count</th>
                            <th>Current Count</th>
                            <th>Good Count</th>
                            <th>Rejected</th>   
                        </tr>
                        <tr>
                            <td>450</td>
                            <td>50</td>
                            <td>40</td>
                            <td>10</td>   
                        </tr>
                    </table>
                    <div style={{display:'flex',marginTop:'30px'}}>
                        <div style={{fontSize:'25px',fontWeight:600}}>Idle Cycle Time :</div>
                        <Paper className='small-box' style={{backgroundColor:'#3fffed'}}>450 min</Paper>
                        <div style={{fontSize:'25px',fontWeight:600,marginLeft:'25%'}}>Current Cycle Time :</div>
                        <Paper className='small-box' style={{backgroundColor:'#a3d8f7'}}>150 min</Paper>
                    </div>
                    <div style={{display:'flex',marginTop:'15px'}}>
                        <div style={{fontSize:'25px',fontWeight:600}}>Down Time Till Now :</div>
                        <Paper className='small-box' style={{backgroundColor:'#eddb00'}}>50 min</Paper>
                    </div>
                    <table style={{width:'100%',marginTop:'40px'}}>
                        <tr>
                            <th>OEE</th>
                            <th>Availability</th>
                            <th>Performance</th>
                            <th>Quality</th>   
                        </tr>
                        <tr>
                            <td>84%</td>
                            <td>97%</td>
                            <td>87%</td>
                            <td>100%</td>   
                        </tr>
                    </table>
                </Box>
            </div>
        );
    }
}


export default Production;