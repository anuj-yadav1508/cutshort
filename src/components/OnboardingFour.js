import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './../../src/styles/components/onboardingFour.scss';

const OnboardingFour = () => {

  return (
    <Box className='one-container'> 
        <Box className='four-top-header'>
          <CheckCircleIcon className='four-check-icon' fontSize='large' />
        </Box>

        {/* creating header part */}
        <Box className='one-header'>
            <Typography className='one-header-heading' variant='h5' component='div'>Congratulations, Eren!</Typography>
            <Typography className='one-header-subheading' variant='subtitle1' component='div'>You have completed onboarding, you can start the Eden!</Typography>
        </Box>

        {/* creating button container */}
        <Box className='one-form-container'>
            <Box  className='three-select-container'>
            <Box className='one-form-button'>
                <Button variant='contained' className='one-form-submit-button'>Launch Eden</Button>
            </Box>
        </Box>
        
        </Box>
    </Box>
  )
}

export default OnboardingFour;