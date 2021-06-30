import { all } from 'redux-saga/effects';
import { watcherApp } from 'store/sagas/app';

export default function* rootSaga() {
  const sagas = [
    watcherApp()
  ];
  yield all(sagas);
}
