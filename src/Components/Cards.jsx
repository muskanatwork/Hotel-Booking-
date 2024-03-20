import { useState } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Link, } from "react-router-dom";
import Alert from '@mui/material/Alert';
const Cards = ({ hotelName, image, address, price, defaultValue, hotelList, hotelId, availability }) => {
  const newObj = {
    hotelId: hotelId,
    hotelList: hotelList
  }

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 2,
          display: 'flex',
          flexWrap: 'wrap',
          zIndex: 1,
        }}
      >
        <CardMedia
          component="img"
          width="100"
          height="150"
          src={image}
          sx={{
            borderRadius: '6px',
            width: { xs: '100%', sm: 150 },
          }}
        />
        <Box sx={{ alignSelf: 'center', ml: 4 }}>
          <Typography variant="h6" gutterBottom>
            {hotelName}
          </Typography>
          <Rating name="read-only" value={defaultValue} readOnly />
          <Typography variant="body2" color="text.secondary" fontWeight="regular">
            {address}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="regular">
            Availability: {availability}
          </Typography>

          <Typography variant="body2" color="text.secondary" fontWeight="regular">
            {price}
          </Typography>

          {availability === 0 ?
            <>
              <Button variant="contained" disabled>
                Disabled
              </Button>
              <Alert severity="error">Not Availability The room  </Alert>

            </>
            : <Link to={`/form`} state={newObj} ><Button variant="contained">Book</Button >
            </Link>

          }

        </Box>

      </Card>

    </div >
  )
}

export default Cards