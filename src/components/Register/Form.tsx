import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm, Controller } from 'react-hook-form';
import InputField from 'components/Common/FormFields/InputField';
import PhoneNumber from 'components/Register/PhoneNumber';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('Please enter your First name'),
  lastName: yup.string().required('Please enter your Last name'),
  phoneNumber: yup.string().required('Please enter your Phone'),
  email: yup
    .string()
    .required('Please enter your Email')
    .email('Invalid email address'),
  // .matches(/^[a-z]+[A-Za-z\d@$!%*#?&]*$/, 'Must start with a lowercase letter'),

  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Oops! You need a password longer than 8 characters with numbers and letters.'
    )
});

const useStyles = makeStyles(theme => ({
  halfWidth: {
    width: '50%'
  },
  fullwidth: {
    width: '100%'
  },
  button: {
    width: '100%',
    height: '60px',
    '& .MuiButton-label': {
      color: '#FFFFFF',
      opacity: 0.9,
      fontWeight: 500,
      fontSize: '14px'
    },
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.03)',
    borderRadius: '2px'
  },
  icon: {
    cursor: 'pointer',
    padding: '21px 0px 0px 20px',
    width: '24px',
    height: '16px'
  },
  header: {
    width: '414px',
    height: '78px',
    margin: 0
  },
  headerContainer: {
    margin: 0,
    position: 'relative',
    top: '25%',
    '-ms-transform': 'translateY(-50%)',
    transform: 'translateY(-50%)'
  },
  headerIcon: {
    cursor: 'pointer',
    height: '30px'
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  }
}));

function Form({ setFormData }) {
  const classes = useStyles({ error: false });
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm({
    mode: 'onBlur',
    defaultValues: {
      firstName: 'Ahmad',
      lastName: 'Faraz',
      email: 'ahmadfaraz629@gmail.com',
      password: 'aaaaaaA1',
      country: 'usa',
      phoneNumber: '03218447889'
    },
    resolver: yupResolver(schema)
  });

  const { control, formState, handleSubmit } = form;

  const onSubmit = data => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setFormData(data);
    }, 2000);
  };

  return (
    <Grid container direction='row' spacing={2}>
      <Grid item className={classes.halfWidth}>
        <Controller
          defaultValue=''
          name='firstName'
          control={control}
          render={({ field }) => (
            <InputField {...field} label='First name' error={formState.errors['firstName']} capitilizeFirst />
          )}
        />
      </Grid>

      <Grid item className={classes.halfWidth}>
        <Controller
          defaultValue=''
          name='lastName'
          control={control}
          render={({ field }) => <InputField {...field} label='Last name' error={formState.errors['lastName']} capitilizeFirst />}
        />
      </Grid>
      <Grid item className={classes.fullwidth}>
        <PhoneNumber form={form} />
      </Grid>
      <Grid item className={classes.fullwidth}>
        <Controller
          defaultValue=''
          name='email'
          control={control}
          render={({ field }) => <InputField {...field} label='Email' error={formState.errors['email']} />}
        />
      </Grid>

      <Grid item className={classes.fullwidth}>
        <Controller
          defaultValue=''
          name='password'
          control={control}
          render={({ field }) => <InputField {...field} type='password' label='Password' error={formState.errors['password']} />}
        />
      </Grid>

      <Grid item className={classes.fullwidth}>
        <Button
          variant='contained'
          type='submit'
          disabled={!formState.isValid}
          color='primary'
          onClick={handleSubmit(onSubmit)}
          className={classes.button}
        >
          NEXT
        </Button>
      </Grid>

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color='primary' thickness={3.6} size={54} />
      </Backdrop>
    </Grid>
  );
}

export default Form;
