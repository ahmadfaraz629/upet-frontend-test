import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import FormHelperText from '@material-ui/core/FormHelperText';
import CountrySelectDialog from 'components/Register/CountrySelectDialog';

import { Controller } from 'react-hook-form';
import InputMaskedField from 'components/Common/FormFields/InputMaskedField';

import { COUNTRIES_MASK } from 'utils/constant';

const useStyles = makeStyles(() => ({
  iconTextField: (props: any) => ({
    border: `1px solid ${props.error ? '#F44336' : '#DFDFDF'}`,

    '& .MuiFilledInput-root': {
      height: '58px',
      backgroundColor: 'inherit',
      border: 'none',
      boxSizing: 'border-box',
      borderRadius: '2px'
    },
    '& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: '0px'
    }
  }),
  icon: {
    cursor: 'pointer',
    padding: '21px 0px 0px 20px',
    width: '24px',
    height: '16px'
  }
}));

function PhoneNumber({ form }) {
  const { setValue, watch, control, formState } = form;

  const classes = useStyles({ error: !!formState.errors['phoneNumber'] });
  const country = watch('country');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setValue('country', value);
  };

  return (
    <>
      <Grid container alignItems='flex-end' className={classes.iconTextField}>
        <Grid item>
          <Icon component='span' onClick={handleClickOpen}>
            <img src={`/${country}_flag.svg`} alt='icon' className={classes.icon} />
          </Icon>
          <Controller
            defaultValue=''
            name='phoneNumber'
            control={control}
            render={({ field }) => (
              <InputMaskedField
                {...field}
                label='Phone number'
                pattern={COUNTRIES_MASK[country]}
                error={formState.errors['phoneNumber']}
              />
            )}
          />
        </Grid>
      </Grid>
      <FormHelperText error id={'Phone number'}>
        {formState.errors['phoneNumber']?.message}
      </FormHelperText>
      <CountrySelectDialog country={country} open={open} onClose={handleClose} />
    </>
  );
}

export default PhoneNumber;
