import React from 'react';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import FormHelperText from '@material-ui/core/FormHelperText';
import CountrySelectDialog from 'components/Register/CountrySelectDialog';

import { Controller } from 'react-hook-form';
import InputMaskedField from 'components/Common/FormFields/InputMaskedField';

import { COUNTRIES_MASK } from 'utils/constant';
import { phoneNumberStyle } from './style';

function PhoneNumber({ form }) {
  const { setValue, watch, control, formState } = form;

  const classes = phoneNumberStyle({ error: !!formState.errors['phoneNumber'] });
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
            <img src={`svgs/${country}_flag.svg`} alt='icon' className={classes.icon} />
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
