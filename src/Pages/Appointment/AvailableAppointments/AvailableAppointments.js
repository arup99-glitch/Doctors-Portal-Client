import { Container, Grid, Typography,Alert } from '@mui/material';
import React ,{useState} from 'react';
import Booking from '../Booking/Booking';

const bookings = [
{
    id:1,
    name: 'Teeth Orthodonics',
    time: '08.00 AM - 09.00AM',
    space: 10,
},
{
    id:2,
    name: 'Cosmetic Dentistry',
    time: '08.00 AM - 09.00AM',
    space: 8,
},
{
    id:3,
    name: 'Teeth Cleaning',
    time: '10.00 AM - 11.00AM',
    space: 7,
},
{
    id:4,
    name: 'Cavity Protection',
    time: '11.00 AM - 12.00pM',
    space: 5,
},
{
    id:5,
    name: 'Pediatric Dental',
    time: '06.00 AM - 07.00AM',
    space: 10,
},
{
    id:6,
    name: 'Oral Surgery',
    time: '07.00 AM - 08.00AM',
    space: 10,
},
]

const AvailableAppointments = ({date}) => {
    const [bookingSuccess,setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{color: 'info.main', mb:2}}>Available Appointsment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
            <Grid container spacing={2}>
            {
                bookings.map(booking => <Booking
                key={booking.id}
                booking={booking}
                date={date}
                setBookingSuccess={setBookingSuccess}
                >
                    

                </Booking>)
            }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;