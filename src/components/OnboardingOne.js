import React from 'react';
import { Box, Typography, InputLabel, FormControl, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { alpha, styled } from '@mui/material/styles';
import './../../src/styles/components/onboardingOne.scss';

// styling our input
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


const OnboardingOne = (props) => {
    const { setStepCount } = props;

    // invoking react-hook-form for validation
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur', 
        defaultValues: {
          fullname: '',
          displayname: ''
        }
      });


      // submitting data after validation and changing layout
      const onSubmit = (data) => {
        console.log(data);
        setStepCount(prev => prev + 1);
      }


  return (
    <Box className='one-container'> 
        <Box className='one-header'>
            <Typography className='one-header-heading' variant='h5' component='div'>Welcome! First things first...</Typography>
            <Typography className='one-header-subheading' variant='subtitle1' component='div'>You can always change them later.</Typography>
        </Box>

        <form className='one-form' onSubmit={handleSubmit(onSubmit)}>
        <Box className='one-form-container'>
        
            <FormControl variant="standard" className='one-form-control'>
                <InputLabel shrink htmlFor="fullname-input">
                Full Name
                </InputLabel>
                <StyledInput name='fullname' placeholder='Steve Jobs' id="fullname-input" {...register('fullname', { required: true })} error={Boolean(errors.fullname)} helperText={errors.fullname && 'Please, provide a valid full name!'}/>
            </FormControl>
            
            <FormControl variant="standard" className='one-form-control'>
                <InputLabel shrink htmlFor="displayname-input">
                Display Name
                </InputLabel>
                <StyledInput name='displayname' placeholder='Steve' id="displayname-input" {...register('displayname', { required: true })} error={Boolean(errors.displayname)} helperText={errors.displayname && 'Please, provide a valid display name!'} />
            </FormControl>
        
            <Box className='one-form-button'>
                <Button variant='contained' type='submit' className='one-form-submit-button'>Create Workspace</Button>
            </Box>
        </Box>
        </form> 
    </Box>
  )
}

export default OnboardingOne;