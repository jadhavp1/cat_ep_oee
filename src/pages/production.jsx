import React, { useState, useEffect } from 'react';

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

function Production() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
        
		plantname: "",
		shift: "",
		machineconnectivity: "",
		machinestatus: "",
        partname: "",
        partnumber:"",

        idealcyletime:"",
        currentcyletime:"",
        downtime:"",
        t_count:"",
        c_count:"",
        g_count:"",
        r_count:"",
        Oee: "",
        Availability:"",
        Performance:"",
        Quality:"",

	});

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		setInterval(() => {
		fetch("http://localhost:3000/getmasterdata").then((res) =>
			res.json().then((data) => {
				// Setting a data from api

                    // code to refresh your component.
					console.log("dataata",data)
					setdata({
                        
                        plantname: data.Plant_Name,
                        shift: data.Shift,
                        machineconnectivity: data.Machine_connectivity,
                        machinestatus: data.Machine_Status,
                        partname: data.Part_Name,
                        partnumber:data.Part_Number,
                        idealcyletime: data.I_CycleTime,
                        currentcyletime:data.C_Cycletime,
                        downtime:data.Down_time,
                        t_count: data.Total_count,
                        c_count:data.Current_count,
                        g_count:data.Good_count,
                        r_count: data.R_count,
                        Oee: data.oee,
                        Availability:data.availablity,
                        Performance:data.performance,
                        Quality:data.quality,
					});


			})

		);
	},6000)
	}, []);
        return (
            <div style={{marginTop:'50px'}} className="production">
                <div style={{fontSize:'40px', fontWeight:600}}>Production</div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <div style={{display:'flex'}}>
                            <h1 style={{ marginBottom: 1 }}>Plant Name :</h1>
                                <Paper className='small-box' style={{backgroundColor:'#cdcdcd',marginTop:'30px'}}>{data.plantname}</Paper>
                            </div>
                            <div style={{display:'flex'}}>
                                <h2>Shift :</h2>
                                <Paper className='small-box' style={{backgroundColor:'#cdcdcd',marginTop:'20px'}}>{data.shift}</Paper>
                            </div>
                            <div style={{display:'flex',marginTop:'30px'}}>
                                <div style={{fontSize:'20px'}}>Machine Connectivity :</div>
                                <Paper className='small-box' style={{backgroundColor:'#04951d', color:'#fff'}}>{data.machineconnectivity}</Paper>
                            </div>
                            <div style={{display:'flex',marginTop:'20px'}}>
                                <div style={{fontSize:'20px'}}>Machine Status :</div>
                                <Paper className='small-box' style={{backgroundColor:'#04951d', color:'#fff'}}>{data.machinestatus}  </Paper>
                            </div>
                            <div style={{display:'flex',marginTop:'30px'}}>
                                <div style={{fontSize:'20px'}}>Part Name :</div>
                                <Paper className='small-box' style={{backgroundColor: '#ffb225'}}>{data.partname}</Paper>
                                <div style={{fontSize:'20px',marginLeft:'40px'}}>Part Number :</div>
                                <Paper className='small-box' style={{backgroundColor: '#ffb225'}}>{data.partnumber}</Paper>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                {/* <Button style={{backgroundColor:'#04951d', color:'#fff',fontSize:'30px',textAlign:'center',padding:'10px',width:'80%'}}>Start Production</Button> */}
                                {/* <Paper style={{backgroundColor:'#04951d', color:'#fff',fontSize:'30px',textAlign:'center',padding:'10px',width:'80%'}}>Start Production</Paper> */}
                            </div>
                            <form  action = "http://localhost:5000/production" method = "POST">
                            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            {/* <Paper style={{backgroundColor:'#cdcdcd',fontSize:'25px',padding:'15px',width:'40%',textAlign:'center',fontWeight:600, border:'1px solid'}}>Resume Production</Paper> */}
                            <Button style={{backgroundColor:'#cdcdcd', color:'#000',fontSize:'40px',padding:'20px',textAlign:'center',fontWeight:600, border:'1px solid'}} startIcon={<PlayCircleFilledWhiteIcon style={{width:'32px',height:'32px'}} />} value="Running" name="start" type="submit" >Start</Button>
                                <Button style={{backgroundColor:'#cdcdcd', color:'#000',fontSize:'40px',padding:'20px',textAlign:'center',fontWeight:600, border:'1px solid'}} startIcon={<RestartAltIcon style={{width:'32px',height:'32px'}} />} value="Resumed" name="resume" type="submit" >Resume</Button>
                                {/* <Paper style={{backgroundColor:'#cdcdcd',fontSize:'25px',padding:'15px',textAlign:'center',fontWeight:600, border:'1px solid'}}>Stop Production</Paper> */}
                                <Button style={{backgroundColor:'#cdcdcd', color:'#000',fontSize:'40px',padding:'20px',textAlign:'center',fontWeight:600, border:'1px solid'}} startIcon={<StopCircleIcon style={{width:'32px',height:'32px'}} />} value="Stopped" name="stop" type="submit" >Stop</Button>    
                           
                            </ButtonGroup>
                            </form>
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
                            <td> {data.t_count}</td>
                            <td> {data.c_count} </td>
                            <td> {data.g_count} </td>
                            <td> {data.r_count} </td>   
                        </tr>
                    </table>
                    <div style={{display:'flex',marginTop:'30px'}}>
                        <div style={{fontSize:'25px',fontWeight:600}}>Idle Cycle Time :</div>
                        <Paper className='small-box' style={{backgroundColor:'#3fffed'}}>{data.idealcyletime}</Paper>
                        <div style={{fontSize:'25px',fontWeight:600,marginLeft:'25%'}}>Current Cycle Time :</div>
                        <Paper className='small-box' style={{backgroundColor:'#a3d8f7'}}>{data.currentcyletime}</Paper>
                    </div>
                    <div style={{display:'flex',marginTop:'15px'}}>
                        <div style={{fontSize:'25px',fontWeight:600}}>Down Time Till Now :</div>
                        <Paper className='small-box' style={{backgroundColor:'#eddb00'}}> {data.downtime}</Paper>
                    </div>
                    <table style={{width:'100%',marginTop:'40px'}}>
                        <tr>
                            <th>OEE</th>
                            <th>Availability</th>
                            <th>Performance</th>
                            <th>Quality</th>   
                        </tr>
                        <tr>
                            <td>{data.Oee}%</td>
                            <td>{data.Availability}%</td>
                            <td>{data.Performance}%</td>
                            <td>{data.Quality}%</td>   
                        </tr>
                    </table>
                </Box>
            </div>
        );
    }



export default Production;