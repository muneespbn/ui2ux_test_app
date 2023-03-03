import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import CoverPic from './images/source-images/slide-1.jpeg'
import { Grid, Box, Typography, Button } from '@mui/material'

const AutoPlaySwipeableViews = SwipeableViews;
const styles = {
  slide: {
    padding: 15,
    minHeight: '68vh',
    maxHeight: '68vh',
    color: '#fff',
    overflow: 'hidden'
  },
  slide1: {
    maxHeight: '68vh'
  },
  slide2: {
    fontSize: '30px',
    color: 'black',
    fontWeight: 'bolder',
    background: 'lightBlue'
  },
  slide3: {
    color: 'black',
    fontSize: '30px',
    fontWeight: 'bolder',
    background: 'lightgrey'
  }
}

const SwipeImage = () => (
  <AutoPlaySwipeableViews enableMouseEvents style={{ marginBottom: '20px' }}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <Grid item md={12} display='flex' alignItems={'center'}>
        <Box ml={8} style={{ position: 'relative' }}>
          <img
            src={CoverPic}
            alt='banner image'
            style={{ width: '100%', height: '100%' }}
          />

          <Box style={{ position: 'absolute', top: '10%', left: "5%" }} ml={5}>
            <Typography style={{ marginBottom: "3px", fontSize: "30px", width: "80%", color: 'black', background: "yellow", fontWeight: "bolder", maxWidth: "150px" }}>30% OFF</Typography>
            <Typography mb={0} textAlign={"left"} sx={{ color: "black", fontSize: "40px", fontWeight: "bolder" }}>
              When Buying Parts
              <br /> With Installation
            </Typography>
            <Typography textAlign={"left"} mt={3} sx={{ color: "black", opacity: "50%" }}>
              Installation of parts in the services of
              <br />
              our partners
            </Typography>
            <Grid mt={2} alignItems={"flex-start"} display={"flex"}>
              <Button variant='contained' style={{ opacity: "50%", background: 'green' }}>
                Shop Now
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </div>
  </AutoPlaySwipeableViews>
)

export default SwipeImage
