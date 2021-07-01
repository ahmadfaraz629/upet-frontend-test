import { FormValues } from 'routes/types';
import { SUBMIITED_FORM } from 'store/types';

export const submitFormAction = {
  STARTED: (formData: FormValues) => ({
    type: SUBMIITED_FORM.STARTED,
    payload: formData
  }),
  FULLFILLED: (formData: FormValues) => ({
    type: SUBMIITED_FORM.FULLFILLED,
    payload: formData
  })
};
