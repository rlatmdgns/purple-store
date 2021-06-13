import axios from 'axios';
import { all, fork, put, call, takeLatest, throttle } from 'redux-saga/effects';
import {
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_CART_FAILURE,
} from '../actions/carts';

const auth = {
  username: 'purple_5',
  password: 'purple_5',
};
function addCartAPI(data) {
  return axios.post('/cart-items', data, {
    auth,
  });
}

function* addCart(action) {
  try {
    const response = yield call(addCartAPI, action.data);
    console.log(response.data.results);
    yield put({
      type: ADD_CART_SUCCESS,
      data: response.data.results,
    });
  } catch (error) {
    yield put({
      type: ADD_CART_FAILURE,
      data: error,
    });
  }
}

function loadCartAPI() {
  return axios.get('/cart-items', {
    auth,
  });
}

function* loadCart() {
  try {
    const response = yield call(loadCartAPI);
    yield put({
      type: LOAD_CART_SUCCESS,
      data: response.data.results,
    });
  } catch (error) {
    yield put({
      type: LOAD_CART_FAILURE,
      data: error,
    });
  }
}

function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart);
}

function* watchLoadCart() {
  yield takeLatest(LOAD_CART_REQUEST, loadCart);
}

export default function* cartsSaga() {
  yield all([
    fork(watchAddCart),
    fork(watchLoadCart),
  ]);
}
