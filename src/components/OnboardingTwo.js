import React from 'react';
import { Box, Typography, InputLabel, FormControl, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { alpha, styled } from '@mui/material/styles';
import './../../src/styles/components/onboardingTwo.scss';

// styling our own input
const StyledInput = styled(TextField)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const OnboardingTwo = (props) => {
  const { setStepCount } = props;

  // invoking react-hook-form for validation
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur', 
        defaultValues: {
          workspacename: ''
        }
      });


      // submitting from react-hook-form and changing layout
      const onSubmit = (data) => {
        console.log(data);
        setStepCount(prev => prev + 1);
      }


  return (
    <Box className='one-container'> 
        <Box className='one-header'>
            <Typography className='one-header-heading' variant='h5' component='div'>Let's set up a home for all your work</Typography>
            <Typography className='one-header-subheading' variant='subtitle1' component='div'>You can always create another workspace later.</Typography>
        </Box>

        <form className='one-form' onSubmit={handleSubmit(onSubmit)}>
        <Box className='one-form-container'>
        
            <FormControl variant="standard" className='one-form-control'>
                <InputLabel shrink htmlFor="workspacename-input">
                Workspace Name
                </InputLabel>
                <StyledInput name='fullname' placeholder='Eren' id="workspacename-input" {...register('workspacename', { required: true })} error={Boolean(errors.workspacename)} helperText={errors.workspacename && 'Please, provide a valid workspace name!'}/>
            </FormControl>
            
            <FormControl variant="standard" className='one-form-control'>
                <InputLabel shrink htmlFor="displayname-input">
                Workspace Url (optional)
                </InputLabel>
                <StyledInput name='displayname' placeholder='Steve' id="displayname-input"  />
            </FormControl>
        
            <Box className='one-form-button'>
                <Button variant='contained' type='submit' className='one-form-submit-button'>Create Workspace</Button>
            </Box>
        </Box>
        </form> 
    </Box>
  )
}

export default OnboardingTwo;