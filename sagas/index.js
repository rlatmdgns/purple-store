import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
// import btoa from 'btoa';
import productsSaga from './products';
import cartsSaga from './carts';

axios.defaults.baseURL = 'https://task.purplesto.re';

export default function* rootSaga() {
  yield all([
    fork(productsSaga),
    fork(cartsSaga),
  ]);
}
