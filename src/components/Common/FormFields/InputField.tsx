import React, { memo, FC } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

interface IInputFieldProps extends FieldValues {
  label?: string;
  type?: string;
  error?: FieldError;
  capitilizeFirst?: boolean;
}

const useStyles = makeStyles(theme => ({
  textField: (props: { error: boolean }) => ({
    '& .MuiFilledInput-root': {
      height: '58px',
      backgroundColor: 'inherit',
      border: `1px solid ${props.error ? '#F44336' : '#DFDFDF'}`,
      boxSizing: 'border-box',
      borderRadius: '2px'
    },
    '& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: '0px'
    }
  })
}));

const InputField: FC<IInputFieldProps> = ({ error, label, capitilizeFirst, ...props }) => {
  const classes = useStyles({ error: !!error });

  const capitilizeFirstHandle = e => {
    const value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    props.onChange(value);
  };
  return (
    <TextField
      {...props}
      onChange={capitilizeFirst ? capitilizeFirstHandle : props.onChange}
      fullWidth
      id={`filled-primary-${props.name}`}
      label={label}
      variant='filled'
      color='primary'
      className={classes.textField}
      error={!!error}
      helperText={error?.message}
    />
  );
};

export default memo(InputField);
