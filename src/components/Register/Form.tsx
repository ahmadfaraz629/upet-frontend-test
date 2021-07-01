import React, { FC, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useForm, Controller } from 'react-hook-form';
import InputField from 'components/Common/FormFields/InputField';
import PhoneNumber from 'components/Register/PhoneNumber';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormValues } from 'routes/types';
import { formStyle } from './style';
import { registerSchema } from 'pages/Register/validation';

interface IFormProps {
  submitFormAction: (formData: FormValues) => void;
}

const Form: FC<IFormProps> = ({ submitFormAction }) => {
  const classes = formStyle({ error: false });
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<FormValues>({
    mode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      country: '',
      phoneNumber: ''
    },
    resolver: yupResolver(registerSchema)
  });

  const { control, formState, handleSubmit } = form;

  const onSubmit = (formData: FormValues) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      submitFormAction(formData);
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
};

export default Form;
