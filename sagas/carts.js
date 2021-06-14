import axios from 'axios';
import { all, fork, put, call, takeLatest, throttle, takeEvery } from 'redux-saga/effects';
import {
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  REMOVE_CART_FAILURE,
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

function removeCartAPI(data) {
  return axios.delete(`/cart-items/${data}`, {
    auth,
  });
}

function* removeCart(action) {
  try {
    yield call(removeCartAPI, action.data);
    yield put({
      type: REMOVE_CART_SUCCESS,
      data: action.data,
    });
  } catch (error) {
    alert('다시시도 해주세요.');
    yield put({
      type: REMOVE_CART_FAILURE,
      data: error,
    });
  }
}

function addCartAPI(data) {
  return axios.post('/cart-items', data, {
    auth,
  });
}

function* addCart(action) {
  try {
    const response = yield call(addCartAPI, action.data);
    console.log(response);
    yield put({
      type: ADD_CART_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    alert('다시시도 해주세요.');
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

function* watchRemoveCart() {
  yield takeEvery(REMOVE_CART_REQUEST, removeCart);
}

function* watchAddCart() {
  yield takeLatest(ADD_CART_REQUEST, addCart);
}

function* watchLoadCart() {
  yield takeLatest(LOAD_CART_REQUEST, loadCart);
}

export default function* cartsSaga() {
  yield all([fork(watchRemoveCart), fork(watchAddCart), fork(watchLoadCart)]);
}
