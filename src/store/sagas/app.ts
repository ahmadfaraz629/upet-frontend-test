import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { FormValues } from 'routes/types';
import { submitFormAction } from 'store/actions';
import { SUBMIITED_FORM } from 'store/types';
import history from 'utils/history';
////////////// Handlers ///////////////////////

function* submitForm(action) {
  const formData: FormValues = action.payload;
  yield axios.post('https://upett.free.beeceptor.com', formData);
  yield put(submitFormAction.FULLFILLED(formData));
  history.push(`/register/success`);
}

////////////// Watchers ///////////////////////
export function* watcherApp() {
  yield takeLatest(SUBMIITED_FORM.STARTED, submitForm);
}
