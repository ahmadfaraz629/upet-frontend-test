import {  SET_REDUX_KEY } from 'store/types';

export const setReduxKey = (key, value) => ({
  type: SET_REDUX_KEY,
  payload: { key, value }
});