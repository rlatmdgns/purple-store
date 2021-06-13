import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
// import btoa from 'btoa';
import productsSaga from './products';
import cartsSaga from './carts';

axios.defaults.baseURL = 'https://task.purplesto.re';
// const username = 'purple_5';
// const password = 'purple_5';
// const credentials = btoa(`${username}:${password}`);
// const basicAuth = `Basic ${credentials}`;
// axios.defaults.headers.common.Authorization = basicAuth;

export default function* rootSaga() {
  yield all([
    fork(productsSaga),
    fork(cartsSaga),
  ]);
}
