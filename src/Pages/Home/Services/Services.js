import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {

        name: 'Fluoride Trearment',
        description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities',
        img: fluoride

    },
    {
        name: 'Cavity Filling',
        description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities',
        img: cavity

    },
    {
        name: 'Teeth Withening',
        description:'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities',
        img: whitening

    }
]

  
  const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
     <Container>
     <Typography sx={{ fontWeight:500, mb:3, color:'success.main'}} variant="h6" component="div">
          OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight:600,m:2}} variant="h5" component="div">
          Services We Provide
        </Typography>

     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           services.map(service => <Service
           key={service.name}
           service={service}
           ></Service>)
           
       }
      </Grid>
     </Container>
    </Box>
        </div>
    );
};

export default Services;