import React from 'react'
import { Stack } from '@mui/system';
import { Box, Card, Grid, Typography } from '@mui/material';
import axios from 'axios';

const topics = [
    {
        name: 'Top Rated Products'
    },
    {
        name: 'Special Offers'
    },
    {
        name: 'Bestsellers'
    }
]

const ListOfProducts = () => {
    const [topRatedProducts, setTopRatedProducts] = React.useState([])
    const [specialProducts, setSpecialProducts] = React.useState([])

    React.useEffect(() => {
        gettopRatedProducts()
        getSpecialRatedProducts()

    }, [])

    const gettopRatedProducts = async () => {
        const topResponse = await axios.get("http://localhost:4000/products/getTopRated")
        if (topResponse.data.header.code === 600) {
            setTopRatedProducts(topResponse.data.data.value)
        } else {
            setTopRatedProducts([])
        }
    }

    const getSpecialRatedProducts = async () => {
        const specialResponse = await axios.get("http://localhost:4000/products/getRandomProducts")
        if (specialResponse.data.header.code === 600) {
            setSpecialProducts(specialResponse.data.data.value)
        } else {
            setSpecialProducts([])
        }
    }

    return (
        <>

            <Grid container display={'flex'} justifyContent={'space-around'} alignItems={'center'} >
                {topics.map((prod) => {
                    return (
                        <Grid item display={'flex'} justifyContent='space-between' md={4} mt={4} >
                            <Typography fontWeight={'bold'} fontSize={'18px'} mx={2}>
                                {prod.name}
                            </Typography>
                        </Grid>

                    )
                })}

                <Grid container md={4} direction={'row'}>
                    {topRatedProducts.slice(0, 3).map((e, i) => {
                        return (
                            <Card >
                                <Grid container >
                                    <Grid item md={4} display={'flex'} >
                                        <img src={`http://localhost:4000${e.images[0]}`} alt='product_image' width='70%' />
                                    </Grid>
                                    <Grid item md={8} alignItems={'flex-start'}>
                                        <Typography style={{
                                            fontweight: 700,
                                            fontSize: "13px"
                                        }}>{e.productName}</Typography>
                                        <Typography style={{
                                            fontSize: "12px",
                                            color: "#8d8a8a"
                                        }}>{e.rating}</Typography>
                                        <Typography style={{ fontWeight: 'bold' }}>{e.price}</Typography>
                                    </Grid>
                                </Grid>
                            </Card>

                        )
                    }
                    )}
                </Grid>

                <Grid container md={4} direction={'row'}>
                    {specialProducts.slice(0, 3).map((e, i) => {
                        return (
                            <Card>
                                <Grid container>
                                    <Grid item md={4} display={'flex'} alignItems={'center'}>
                                        <img src={`http://localhost:4000${e.images[0]}`} alt='product_image' width='70%' />
                                    </Grid>
                                    <Grid item md={8}>
                                        <Typography style={{
                                            fontweight: 700,
                                            fontSize: "13px"
                                        }}>{e.productName}</Typography>
                                        <Typography style={{
                                            fontSize: "12px",
                                            color: "#8d8a8a"
                                        }}>{e.rating}</Typography>
                                        <Typography style={{ fontWeight: 'bold' }}>{e.price}</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        )
                    }
                    )}
                </Grid>

                <Grid container md={4} direction={'row'}>
                    {specialProducts.slice(0, 3).map((e, i) => {
                        return (
                            <Card>
                                <Grid container>
                                    <Grid item md={4} display={'flex'} alignItems={'center'}>
                                        <img src={`http://localhost:4000${e.images[0]}`} alt='product_image' width='70%' />
                                    </Grid>
                                    <Grid item md={8}>
                                        <Typography style={{
                                            fontweight: 700,
                                            fontSize: "13px"
                                        }}>{e.productName}</Typography>
                                        <Typography style={{
                                            fontSize: "12px",
                                            color: "#8d8a8a"
                                        }}>{e.rating}</Typography>
                                        <Typography style={{ fontWeight: 'bold' }}>{e.price}</Typography>
                                    </Grid>
                                </Grid>
                            </Card>
                        )
                    }
                    )}
                </Grid>
            </Grid>
        </>
    )
}

export default ListOfProducts
