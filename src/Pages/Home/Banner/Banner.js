import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import {Typography} from '@mui/material';
import {Button,Container} from '@mui/material';

const bannerbg = {
    background: `url(${bg})`,
    
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height:450
}

const Banner = () => {
    return (
        <Container style={bannerbg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...verticalCenter, textAlign:'left'}} xs={12} md={6}>
           <Box>
           <Typography variant="h3">
                Your New Smile <br/>
                Starts Here
             </Typography>
             <Typography variant="h4" sx={{fontSize:14,my:3,fontWeight:300,color:'gray'}}>
             not taking enough care over something that you are responsible for, with the result that serious mistakes are made 
             </Typography>
             <Button variant="contained" style={{ backgroundColor: '#5CE&ED'}}>Get Appointment</Button>
           </Box>
          </Grid>
          <Grid style={verticalCenter} item xs={12} md={6}>
            <img style={{width:'350px'}} src={chair} alt=""/>
          </Grid>
          
        </Grid>
      </Container>
    );
};

export default Banner;