import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import './../../src/styles/components/onboardingThree.scss';

const OnboardingThree = (props) => {
  // destructuring setStepCount
  const { setStepCount } = props;

  // for changing selection - state
  const [activeTab, setActiveTab] = useState(true);

  // handling selection change
  const handleChange = () => {
    setActiveTab(prev => !prev);
  }

  // handling changing layout
  const handleChangeLayout = () => {
    setStepCount(prev => prev + 1);
  }

  return (
    <Box className='one-container'> 
        <Box className='one-header'>
            <Typography className='one-header-heading' variant='h5' component='div'>How are you planning to use Eden?</Typography>
            <Typography className='one-header-subheading' variant='subtitle1' component='div'>We'll streamline your setup experince accordingly.</Typography>
        </Box>

        
        <Box className='one-form-container'>
        
          
            <Box  className='three-select-container'>
              
              <Box component='div' onClick={handleChange} className={activeTab ? 'select-container select-container-active' : 'select-container'}>
                <Box className='icon-container'>
                  <PersonIcon className='icon' />
                  <Typography className='select-heading' variant='subtitle1' component='div'>For myself</Typography>
                  <Typography className='select-para' variant='body1' component='div'>Write better. Think more clearly. Stay organised.</Typography>
                </Box>
                
              </Box>
              

              <Box component='div' onClick={handleChange} className={activeTab ? 'select-container' : 'select-container select-container-active'}>
                <GroupsIcon className='icon' />
                  <Typography className='select-heading' variant='subtitle1' component='div'>With my team</Typography>
                  <Typography className='select-para' variant='body1' component='div'>Wikis, docs, tasks and projects, all in one place.</Typography>
              </Box>
            </Box>
        
            <Box className='one-form-button'>
                <Button onClick={handleChangeLayout} variant='contained' className='one-form-submit-button'>Create Workspace</Button>
            </Box>
        </Box>
        
    </Box>
  )
}

export default OnboardingThree;