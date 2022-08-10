import React, { useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import './../../src/styles/pages/homePage.scss';
import Step from '../components/Step';
import OnboardingOne from '../components/OnboardingOne';
import OnboardingTwo from '../components/OnboardingTwo';
import OnboardingThree from '../components/OnboardingThree';
import OnboardingFour from '../components/OnboardingFour';

const HomePage = () => {

    // state for changing layout
    const [stepCount, setStepCount] = useState(1);

  return (
    <Box className='home-page-container'>
        {/* wrapper for homepage */}
        <Box className='home-page-wrapper'>
            <Box className='home-page-header'>
                <Avatar src='./assets/images/logo.png' alt='logo' className='header-logo'  />
                <Typography variant='h5' component='div' className='header-heading'>Eden</Typography> 
            </Box>

            {/* stepper container */}
            <Box className='home-page-stepper'>
                <Box className='stepper-wrapper'>
                    <Step stepNumber={1} stepCount={stepCount} />
                    <Box className={stepCount >= 2 ? 'stepper-line-active' : 'stepper-line'}></Box>
                    <Step stepNumber={2} stepCount={stepCount} />
                    <Box className={stepCount >= 3 ? 'stepper-line-active' : 'stepper-line'}></Box>
                    <Step stepNumber={3} stepCount={stepCount} />
                    <Box className={stepCount >= 4 ? 'stepper-line-active' : 'stepper-line'}></Box>
                    <Step stepNumber={4} stepCount={stepCount} />
                </Box>
            </Box>

            {/* rendering layouts based on stepCount */}
            {
                stepCount === 1 && <OnboardingOne setStepCount={setStepCount} />
            }

            {
                stepCount === 2 && <OnboardingTwo setStepCount={setStepCount} />
            }

            {
                stepCount === 3 && <OnboardingThree setStepCount={setStepCount} />
            }

            {
                stepCount === 4 && <OnboardingFour setStepCount={setStepCount} />
            }
        </Box>
    </Box>
  )
}

export default HomePage;