import React from 'react';
import { Box, Typography } from '@mui/material';
import './../../src/styles/components/step.scss';

const Step = (props) => {
  
  return (
    <Box className={(props.stepCount >= props.stepNumber) ? 'step-container-active' : 'step-container'}>
        <Typography className='step-number' variant='body1' component='div'>{props.stepNumber}</Typography>
    </Box>
  )
}

export default Step