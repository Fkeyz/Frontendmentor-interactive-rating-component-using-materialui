import React from 'react';
import theme from '../components/ThemeCust';
import { ThemeProvider } from "@mui/material";
import { 
  Typography, 
  Box,
  Avatar,
  Stack,
 } from '@mui/material';
 import star from '../images/icon-star.svg';
 import Btn from '../components/Btn';
 import RoundBtn from '../components/RoundBtn';


function Rating(){

      return (

      

        <ThemeProvider theme={theme}>
        <Box  sx={{ 
              borderRadius: '15px',
              backgroundColor: '#1F2630',
              }} className='box_head'>

              <br />

                     {/* Icon Star */}
              <Avatar 
                    alt='star'
                    sx={{ width: '45px', height: '45px',
                    marginTop: '5px',
                    backgroundColor: '#262F38',
                    alignItems: 'center',
                    marginLeft: '25px',
                    }}> 
                          <img src={star} alt='star'/>
              </Avatar>


       {/* Heading */}
              <Typography variant='h5'
                    sx={{ 
                      color: 'hsl(0, 0%, 100%)', 
                      marginLeft: '25px', 
                      marginTop: '35px',
                      fontWeight: 'bold',
                      fontSize: '25px'
                      }} >
                  How did we do?
              </Typography>

                   {/* Body */}
              <Typography variant='body1' 
                    sx={{ 
                      fontSize:'15px', 
                      marginTop: '15px',
                      marginLeft: '25px', 
                      color: 'hsl(216, 12%, 54%)',
                      display: {xs: 'none', sm: 'none', lg: 'block', md: 'block'},
                      }}>
                        Please let us know how we did with your support request. 
                      All feedback is appreciated to help us <br /> improve our offering!
              </Typography>

                  {/* For only Small device */}
              <Typography variant='body1' sx={{ 
                      fontSize:'15px', 
                      marginTop: '15px',
                      marginLeft: '25px', 
                      color: 'hsl(216, 12%, 54%)',
                      display: {xs: 'block', sm: 'block', md: 'none', lg: 'none'}
                      }}>
                  Please let us know how we did with your  <br /> support request. 
                All feedback is appreciated  <br /> to help us improve our offering!
              </Typography>
      
                  {/* Rating Button */}
            <Stack direction='row' spacing={2} sx={{ marginTop: '30px',marginLeft: '25px',}}>
            
              <RoundBtn size="small" aria-label="add" className='round_btn'>
                    1
              </RoundBtn>
              <RoundBtn size="small" aria-label="add" className='round_btn'>
                    2
              </RoundBtn>
              <RoundBtn color="small" aria-label="add" className='round_btn'>
                    3
              </RoundBtn>
              <RoundBtn color="small" aria-label="add" className='round_btn'>
                    4
              </RoundBtn>
              <RoundBtn color="small" aria-label="add" className='round_btn'>
                    5
              </RoundBtn>
              
            </Stack>

                            {/* Submit Button */}
                <Btn
                  sx={{ 
                    width: { xs: '310px', sm: '80px', md: '330px',},
                    height:{xs: '45px', sm: '80px', md: '40px',},}}
                className='btn_submit'> SUBMIT </Btn>

              </Box>
    </ThemeProvider>
    );
    
}

export default Rating;