import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import productsSaga from './products';

axios.defaults.baseURL = 'https://task.purplesto.re/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.common.Authorization = 'basic';

export default function* rootSaga() {
  yield all([
    fork(productsSaga),
  ]);
}
