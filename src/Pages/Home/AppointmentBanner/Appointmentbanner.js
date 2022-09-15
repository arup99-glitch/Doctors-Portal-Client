import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import {Typography} from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,00.8)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop:175
}

const Appointmentbanner = () => {
    return (
        <Box style={appointmentBg}sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{width:400,marginTop:'-110px'}} src={doctor} alt=""/>
          </Grid>
          <Grid item xs={12} md={6} sx={{display: 'flex',justifyContent:'flex-start',
          textAlign:'left',
          alignItems:'center'}}>
            <Box>
            <Typography variant="h6"  sx={{mb:5}} style={{color: '#5CE7ED'}}>
                Appointment
            </Typography>
            <Typography variant="h4" style={{color:'white'}}>
               Make an Appointment Today 
            </Typography>
             <Typography variant="h6" sx={{my:5}} style={{color:'white',fontSize:14,fontWeight: 300}}>
             It is a temporary and non-pensionable appointment in the Civil Service. It is employment within a specified duration  contract agreement.
            </Typography>
            <Button variant="contained">Learn More</Button>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default Appointmentbanner;