import axios from 'axios';
import { all, fork, put, call, takeLatest, throttle } from 'redux-saga/effects';
import { LOAD_PRODUCTS_FAILURE, LOAD_PRODUCTS_REQUEST, LOAD_PRODUCTS_SUCCESS } from '../actions/products';

function loadProductsAPI(page) {
  return axios.get(`/products?page=${page || 1}`);
}

function* loadProducts(action) {
  try {
    const response = yield call(loadProductsAPI, action.page);
    yield put({
      type: LOAD_PRODUCTS_SUCCESS,
      data: {
        products: response.data.results,
        next: response.data.next,
      },
    });
  } catch (error) {
    yield put({
      type: LOAD_PRODUCTS_FAILURE,
      data: error,
    });
  }
}

function* watchLoadProducts() {
  yield throttle(3000, LOAD_PRODUCTS_REQUEST, loadProducts);
}

export default function* productsSaga() {
  yield all([fork(watchLoadProducts)]);
}
