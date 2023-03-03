import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import '../components/Footer.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import facebook from '../images/facebook (1).png';
import instagram from '../images/instagram (4).png';
import twitter from '../images/twitter (3).png';
import youtube from '../images/youtube (2).png';

function Footer() {
 return(
    <Box>
    <Box className="footer-box">
         <Container
         maxWidth="xl" className="Footer">
             <Grid container spacing={2}>
  <Grid item xs={4}>
  <h1>Contact Us</h1>
  <p className="contact-txt">Hi, we are always open for coorperation and suggestions,
  <br/>
  contact us in one of the ways below:</p>
<Box className="contact-box">
  <Grid item xs={4} className="contact-grid">
<p className="contact-number">PHONE NUMBER</p>
<h6>
    089252 97807
</h6>

<p className="contact-number">OUR LOCATION</p>
<h6>
    102,Athipalayam Rd,
    Ramakrishnapuram,
    Chinnavedapatti,
    Comibator,Tamil Nadu <br/>
    614049
</h6>
  </Grid>
  <Grid item xs={4} className="contact-grid2">
<p className="contact-number">EMAIL ADDRESS</p>
<h6>
    careers@uitouxsolutions.com
</h6>

<p className="contact-number">WORKING HOURS</p>
<h6>
    Mon-Fri 10:00pm- 6:00pm
</h6>
  </Grid>
</Box>
</Grid>
  <Grid item xs={2}>
  <h1>Information</h1>

  <p className="info-txt">
    About Us
  </p>
  <p className="info-txt">Delivery Information</p>
  <p className="info-txt">Privacy Policy</p>
  <p className="info-txt">Brands</p>
  <p className="info-txt">Contact Us</p>
  <p className="info-txt">Returs</p>
  <p className="info-txt">Site Map</p>
  </Grid>
  <Grid item xs={2}>
  <h1>My Account</h1>

  

  <p className="info-txt">Store Location</p>
  <p className="info-txt">Order History</p>
  <p className="info-txt">Wish List</p>
  <p className="info-txt">Newsletter</p>
  <p className="info-txt">Special Offer</p>
  <p className="info-txt">Gift Certificates</p>
    
  <p className="info-txt">
    Affiliate
  </p>
  </Grid>
  <Grid item xs={4}>
  <h1>Newsletters</h1>
  <p className="contact-txt1">Enter your email address below to subscribe to our Newsletter
  <br/>
  and keep up to date with discounts and special offers</p>
  <Box className="input-box">
    <Grid item xs={12} className="news-email">
    <TextField id="outlined-basic" label="user@example.com" variant="outlined" />
    <Button variant="contained" id="btn">subscribe</Button>
    </Grid>
    
  </Box>
  <p className="info-txt">Follow us on social networks</p>
    <Grid item xs={3} className="img-grid">
    {/* <img src={facebook} alt="react logo"/> */}
    {/* <img src={twitter} alt="react logo"/> */}
    {/* <image src={youtube} alt="react logo"/> */}
    {/* <image src={youtube} alt="react logo"/>
    <img src={instagram} alt="react logo"/> */}
   
    </Grid>
  </Grid>
  </Grid>
        
      </Container>
     
    </Box>
    <Container maxWidth="xl" className="bottom-navi">
    <Box className="bootom-navigation">
        <Grid item xs={6}>
            <p className="footer-p">Powered by <span> React</span>/<span>Next.js</span>_Designed by UITOUX Solutions</p>
        </Grid>
        <Grid>

        </Grid>
    </Box>

    </Container>

    </Box>
    
  
    
 );
}

export default Footer;