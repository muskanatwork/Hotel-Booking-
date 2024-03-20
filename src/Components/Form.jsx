import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
const Form = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const hotelList = location.state.hotelList
    const hotelId = location.state.hotelId

    console.log(hotelId);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        room: '',
        checkin: '',
        ckeckout:''

    });
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        if (form.checkValidity()) {
            let updatedData = {}
            hotelList.forEach(element => {
                if (element.id === hotelId) {
                    element.availability -= formData.room
                    updatedData = { ...element }
                }
            });
            console.log(updatedData)
            fetch(`http://localhost:3001/data/${parseInt(hotelId)}`, {
                method: "PUT",
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(updatedData)
            })
            navigate('/BookingDetails', { state: formData })
        }
    };

    return (
        <div>
            {/* <Typography variant="h4" component="h2">
                Name: {location.state.hotelName}
            </Typography> */}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                onSubmit={handleSubmit}
            >
                <div className='container'>
                    <div>
                        <TextField
                            label="First Name"
                            id="firstName"
                            size="small"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Last Name"
                            id="lastName"
                            size="small"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <TextField
                            label="Phone Number"
                            id="phoneNumber"
                            type="number"
                            size="small"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            label="Email"
                            id="email"
                            size="small"
                            type="email"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            onChange={handleChange}
                            id="checkin"
                            label="Check-in"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            onChange={handleChange}
                            id="checkout"
                            label="Check-out"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="room"
                            label="Room"
                            type="number"
                            size="small"
                            onChange={handleChange}
                            required
                        />
                        <div className='button'>
                            <Button variant="contained" type='submit'>Submit</Button>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default Form;
