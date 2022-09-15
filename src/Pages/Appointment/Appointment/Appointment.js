import React from 'react';
import Nevigation from '../../Shared/Nevigation/Nevigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';


const Appointment = () => {
    const [date,setDate] = React.useState(new Date());
    return (
        <div>
            <Nevigation></Nevigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;