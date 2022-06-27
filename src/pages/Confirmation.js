import React from 'react';
import theme from '../components/ThemeCust';
import { ThemeProvider } from "@mui/material";
import { 
  Typography, 
  Box,
  Chip,
 } from '@mui/material';
 import Phone from '../images/illustration-thank-you.svg';


function Confirmation() {
    return(
        <ThemeProvider theme={theme}>
             <Box  sx={{            
              borderRadius: '15px',
              backgroundColor: '#1F2630',
              justifyContent: 'center',
              alignItems: 'center', 
              alignContent: 'center',
              }} className='box_head'>

              <br />

                     {/* illustration */}

                     <img src={Phone} alt='phone' 
                     style={{
                         height: '25%', 
                         justifyContent: 'center', 
                         marginLeft: '100px', 
                         marginTop: '30px'}} />
                         
                         {/* Chip */}
                 <Chip label='You selected 4 out of 5' variant='contained' 
                 sx={{
                      color: 'hsl(25, 97%, 53%)',
                      backgroundColor: 'hsl(213, 19%, 18%)',
                      marginLeft: '110px',
                      marginTop: '30px'
                      }}/>

                      {/*  Thank you Typography*/}
                      <Typography variant='h5'  sx={{
                      color: 'hsl(0, 0%, 100%)',
                      fontWeight: 'bold',
                      marginLeft: '120px',
                      marginTop: '25px',
                      }}>Thank you!</Typography>

                      {/* Appreciation Typography */}
                <Typography variant='body1' align='center' sx={{
                      color: 'hsl(216, 12%, 54%)',
                      fontSize: '13px',
                      marginLeft: '9px',
                      marginTop: '25px',
                      }}>We appreciate you taking the time to give a rating. <br />
                         If you ever need more support, don't hesitate to get <br />
                          in touch!
                      </Typography>
                    
              </Box>
        </ThemeProvider>
    );
}

export default Confirmation;

