import React, { memo, forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { inputFieldStyle } from './style';

interface IInputFieldProps extends FieldValues {
  label?: string;
  type?: string;
  error?: FieldError;
  capitilizeFirst?: boolean;
}

const InputField: ForwardRefRenderFunction<any, IInputFieldProps> = ({ error, label, capitilizeFirst, ...props }) => {
  const classes = inputFieldStyle({ error: !!error, border: true });

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
export default memo(forwardRef(InputField));
