import React, { memo, FC } from 'react';
import { FieldError, FieldValues } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

import MaskedInput from 'react-text-mask';

interface InputMaskedFieldProps extends FieldValues {
  label?: string;
  type?: string;
  error?: FieldError;
  capitilizeFirst?: boolean;
  pattern: string[];
}

const useStyles = makeStyles(theme => ({
  textField: (props: any) => ({
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
      // showMask
    />
  );
}

const InputMaskedField: FC<InputMaskedFieldProps> = ({ error, label, capitilizeFirst, mask, ...props }) => {
  const classes = useStyles({ error: !!error });
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

export default memo(InputMaskedField);
