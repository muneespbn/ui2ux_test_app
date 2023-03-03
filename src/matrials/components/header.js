import {
  Badge,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import MyIMage from '../../images/source-images/logo.png'
import MySecondImage from '../../images/source-images/svg/car.svg'
import myThirdImage from '../../images/source-images/svg/heart.svg'
import myFourthImage from '../../images/source-images/svg/cart.svg'
import myFifthImage from '../../images/source-images/svg/person.svg'
import React, { useEffect } from 'react'
import Menu from '@mui/material/Menu'
// import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ProductValueContext } from '../../context'
const MyHeaderData = [
  {
    name: 'About Us'
  },
  {
    name: 'Contacts'
  },
  {
    name: 'Store Location'
  },
  {
    name: 'Track Order'
  },
  {
    name: 'Blog'
  }
]
const myHeaderTwo = [
  {
    name: 'Compare',
    value: {
      keyName: 2
    }
  },
  {
    name: 'Currency',
    value: {
      keyName: [
        {
          one: 'RS',
          TOW: 'CC'
        }
      ]
    }
  },
  {
    name: 'Language',
    value: {
      keyName: [
        {
          one: 'Eng',
          two: 'Tam'
        }
      ]
    }
  }
]
export default function MyPageCheck () {
    const [product, setProdutValue] = React.useContext(ProductValueContext)
    const [productCount,setProductCount] = React.useState(0)
    useEffect(()=>{
      if(product.length != 0){
       alert("Product added successfully")
       setProductCount(product.length)
      }
    },[product])
  const [category, setCategory] = React.useState()
  const handleChange = event => {
    setCategory(event.target.value)
  }
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const myCategoryList = [
    {
      id: 2,
      name: 'Bike'
    },
    {
      id: 3,
      name: 'Car'
    }
  ]
  return (
    <>
      {/* <h3>tduuewyyfiuiuytfiyreiyif</h3>         */}
      <Grid container>
        <Grid item container justifyContent='space-around' mt={1} m={2}>
          <Stack direction='row' spacing={2}>
            {MyHeaderData.map((a, ind) => (
              <Grid>
                <Typography> {a.name}</Typography>
              </Grid>
            ))}
          </Stack>
          <Stack direction='row' spacing={2} ml={14}>
            {myHeaderTwo.map((a, ind) => (
              <Grid>
                <Typography> {a.name}</Typography>
              </Grid>
            ))}
          </Stack>
        </Grid>
        <Grid item container justifyContent='space-around' mt={1} m={2} ml={3}>
          <Stack direction={'row'} spacing={2}>
            <Grid>
              <img src={MyIMage} height='50px' width={'100%'} />
            </Grid>
            <Grid item md={12} lg={12}>
              <Stack direction={'row'}>
                <Grid spacing={1} backgroundColor='yellow'>
                  <img src={MySecondImage} height='40px' width={'70%'} />
                </Grid>
                <Grid lg={9} backgroundColor='yellow'>
                  <Button
                    id='basic-button'
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup='true'
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    Select Vechile
                  </Button>
                  <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button'
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Grid>
                <Grid lg={12}>
                  <TextField size='small'> </TextField>
                </Grid>
              </Stack>
            </Grid>
          </Stack>
          <Stack direction='row' spacing={2}>
            <Grid>
              <img src={myThirdImage} height='40px' width={'80%'} />
            </Grid>
            <Grid>
              <img src={myFifthImage} height='40px' width={'80%'} />
            </Grid>
            <Grid>
              <Typography> Hello ,Login</Typography>
              <Typography> My Account</Typography>
            </Grid>
            <Grid spacing={2}>
              <Badge badgeContent={productCount} color='primary'>
                <img src={myFourthImage} height='40px' width={'30px'} />
              </Badge>
            </Grid>
            <Grid>
              <Typography> Shopping Cart</Typography>
              <Typography> ${1885.9}</Typography>
            </Grid>
          </Stack>
        </Grid>
        <Divider /> {/* <Grid item container>                    <Stack> */}
        <Grid item container justifyContent='space-around' mt={1} m={1} ml={3}>
          <Stack direction='row' spacing={2}>
            <Grid item md={6} lg={12}>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Shop category
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item md={2}>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Home <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item md={2}>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Megamemu
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item md={2}>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Shop
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item md={2}>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Blog <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item md={2}>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Accounts
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid item md={2}>
              <Button
                id='basic-button'
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Pages
                <KeyboardArrowDownIcon />
              </Button>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Grid>
            <Grid md={3} mt={2} lg={6}>
              <Typography mt={1}> Buy Theme</Typography>
            </Grid>
          </Stack>
          <Stack direction='row'>
            <Grid>
              <Typography> Call Us :</Typography>
            </Grid>
            <Grid>
              <Typography> 08976543209</Typography>
            </Grid>
          </Stack>
        </Grid>
        {/* </Stack>                </Grid> */}
      </Grid>
    </>
  )
}
