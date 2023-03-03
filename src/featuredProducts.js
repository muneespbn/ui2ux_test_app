import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import {
  CardActionArea,
  CardActions,
  Grid,
  Rating
} from '@mui/material'
import { Box } from '@mui/system'
import { ProductValueContext } from './context'

export default function MultiActionAreaCard() {
  const [product, setProdutValue] = React.useContext(ProductValueContext)
  const [featuredProducts, setFeaturedProducts] = React.useState([])

  React.useEffect(() => {
    getFeatureProducts()
  }, [])

  const getFeatureProducts = async () => {
    const featuredProductsResponse = await axios.get("http://localhost:4000/products/getAllProducts")
    console.log(featuredProductsResponse, "featuredProductsResponse");
    if (featuredProductsResponse.data.header.code === 600) {
      setFeaturedProducts(featuredProductsResponse.data.data.value)
    } else {
      setFeaturedProducts([])
    }
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'space-around'}
      flexWrap={'wrap'}
      xs={12}
      width={'100%'}
    >
      {featuredProducts.slice(0, 8).map(data => {
        return (
          <Card sx={{ maxWidth: 280 }}>
            <CardActionArea>
              <CardContent>
                {data.isHot &&
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    sx={{
                      color: 'white',
                      height: '25px',
                      width: '50px',
                      backgroundColor: '#000080',
                      borderBottomRightRadius: '50%',
                      borderTopLeftRadius: '50%'
                    }}
                  >
                    HOT
                  </Box >
                }
                <img
                  src={`http://localhost:4000${data.images[0]}`}
                  style={{ height: '260px', width: '250px' }}
                ></img>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid
                display={'flex'}
                m={3}
                mt={0}
                md={0}
                alignItems={'flex-start'}
                flexDirection={'column'}
                container
              >
                <Typography sx={{ fontSize: '12px', opacity: '50%' }}>
                  {data.model}
                </Typography>
                <Typography
                  mb={1}
                  sx={{
                    textAlign: 'left',
                    fontSize: '18px',
                    fontWeight: 'bolder'
                  }}
                >
                  {data.productName}
                </Typography>
                <Grid
                  width={'100%'}
                  display={'flex'}
                  alignItems={'center'}
                  flexDirection={'row'}
                >
                  <Rating name='read-only' value={data.starRating} readOnly />
                  <Typography ml={2} sx={{ fontSize: '14px', opacity: '100%' }}>
                    {data.rating == 0 ? 'No reviews' : data.rating + ' reviews'}
                  </Typography>
                </Grid>

                <Grid
                  width={'100%'}
                  display={'flex'}
                  alignItems={'center'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  mt={2}
                >
                  <Typography sx={{ fontSize: '25px', fontWeight: 'bolder' }}>
                    {'$' + data.price}
                  </Typography>
                  <ShoppingCartOutlinedIcon
                    onClick={() => {
                      var filterArray = product.filter(val => {
                        if (val._id == data._id) {
                          return val
                        }
                      })

                      if (filterArray.length == 0) {
                        setProdutValue(value => ([
                          ...value,
                          data
                        ]));
                      } else {
                        alert("Producct already exist")
                      }
                    }}
                    sx={{ cursor: 'pointer', fontSize: '25px', opacity: '70%' }}
                  />
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        )
      })}
    </Box>
  )
}
