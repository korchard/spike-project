import { all } from 'redux-saga/effects';
import messageSaga from './message';

export default function* rootSaga() {
  yield all([
    messageSaga(),
  ]);
}
