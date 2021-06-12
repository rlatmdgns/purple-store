import axios from 'axios';
import { all, fork, put, call, takeLatest, throttle } from 'redux-saga/effects';
import { LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS } from '../actions/products';

function loadProductsAPI() {
  return axios.get('/favorite');
}

function* loadProducts(action) {
  try {
    const result = yield call(loadProductsAPI);
    yield put({
      type: LOAD_PRODUCTS_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_PRODUCTS_FAILURE,
      error,
    });
  }
}
function* watchLoadProducts() {
  yield takeLatest(LOAD_PRODUCTS_REQUEST, loadProducts);
}

export default function* projectSaga() {
  yield all([
    fork(watchLoadProducts),
  ]);
}
