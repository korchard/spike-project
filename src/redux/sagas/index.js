import { all } from 'redux-saga/effects';
import messageSaga from './message';

// saga to call all the sagas
export default function* rootSaga() {
  yield all([
    messageSaga(),
  ]);
} // end rootSaga
