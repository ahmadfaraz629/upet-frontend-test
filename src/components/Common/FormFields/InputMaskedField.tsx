import React, { memo, forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

import MaskedInput from 'react-text-mask';
import { inputFieldStyle } from './style';

interface InputMaskedFieldProps extends FieldValues {
  label?: string;
  type?: string;
  error?: FieldError;
  capitilizeFirst?: boolean;
  pattern: string[];
}

function TextMaskCustom(props) {
  const { inputRef, pattern, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={pattern}
      placeholderChar={'\u2000'}
    />
  );
}

const InputMaskedField: ForwardRefRenderFunction<any, InputMaskedFieldProps> = ({
  error,
  label,
  capitilizeFirst,
  mask,
  ...props
}) => {
  const classes = inputFieldStyle({ error: !!error, border: false });
  return (
    <>
      <FormControl className={classes.textField} variant='filled' error={!!error}>
        <InputLabel variant='filled' htmlFor='formatted-text-mask-input'>
          {label}
        </InputLabel>
        <FilledInput {...props} inputProps={props} id='formatted-text-mask-input' inputComponent={TextMaskCustom} />
      </FormControl>
    </>
  );
};

export default memo(forwardRef(InputMaskedField));
