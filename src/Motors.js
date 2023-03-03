import React from 'react'
import Grid from '@mui/material/Grid';
import banner1 from './images/source-images/banner1.jpeg'
import banner2 from './images/source-images/banner2.jpeg'
import { Box, Stack } from '@mui/system';
import { Button, Typography } from '@mui/material';
import ListOfProducts from './ListOfProducts';

const Motors = () => {
    return (
        <>
            <Grid container display={'flex'} flexDirection='row'
                alignItems={'center'}
                justifyContent={'center'}
                sx={{ backgroundColor: '#fafafa' }}>
                <Grid item md={6} display={'flex'} alignItems='center'>
                    <Box style={{ position: 'relative' }}>
                        <img src={banner1} alt='banner image' style={{
                            width: '90%', height: '100%',
                        }} />
                        <Box style={{ position: 'absolute', top: '0%' }} marginLeft={3}>
                            <h2 style={{ color: '#fadf5f' }}>MOTOR OILS</h2>
                            <Typography style={{ color: '#fff' }}>Synthetic motor oil with fee shipping<br /> Friction life guaranted</Typography>
                            <Button variant='contained' style={{ background: '#d33e32' }}>Show Now</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Box style={{ position: 'relative' }} >
                        <img src={banner2} als='banner image' style={{ width: '90%', height: '100%' }} />
                        <Box style={{ position: 'absolute', top: '0%' }} marginLeft={3}>
                            <h2 style={{ color: '#fadf5f' }}>MOTOR OILS</h2>
                            <Typography style={{ color: '#fff' }}>Synthetic motor oil with fee shipping<br /> Friction life guaranted</Typography>
                            <Button variant='contained' style={{ background: '#d33e32' }}>Show Now</Button>
                        </Box>
                    </Box>

                </Grid>
                <Grid item md={12}>
                    <ListOfProducts />
                </Grid>
            </Grid>
        </>
    )
}

export default Motors
