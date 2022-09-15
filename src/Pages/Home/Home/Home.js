import React from 'react';
import Nevigation from '../../Shared/Nevigation/Nevigation';
import Appointmentbanner from '../AppointmentBanner/Appointmentbanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Nevigation></Nevigation>
            <Banner></Banner>
            <Services></Services>
            <Appointmentbanner></Appointmentbanner>
        </div>
    );
};

export default Home;