import axios from 'axios';
import { all, fork, put, call, takeLatest, takeEvery, delay } from 'redux-saga/effects';
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
  INCREASE_QTY_REQUEST,
  INCREASE_QTY_SUCCESS,
  INCREASE_QTY_FAILURE,
  DECREASE_QTY_REQUEST,
  DECREASE_QTY_FAILURE,
  DECREASE_QTY_SUCCESS,
  CHANGE_QTY_REQUEST,
  CHANGE_QTY_SUCCESS,
  CHANGE_QTY_FAILURE,
} from '../actions/carts';

const auth = {
  username: 'purple_5',
  password: 'purple_5',
};

function changeQtyAPI(data) {
  return axios.patch(`/cart-items/${data.id}`, data, {
    auth,
  });
}

function* changeQty(action) {
  try {
    yield delay(400);
    const response = yield call(changeQtyAPI, action.data);
    yield put({
      type: CHANGE_QTY_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    alert('다시시도 해주세요.');
    yield put({
      type: CHANGE_QTY_FAILURE,
      data: error,
    });
  }
}

function decreaseQtyAPI(data) {
  return axios.patch(`/cart-items/${data.id}`, data, {
    auth,
  });
}

function* decreaseQty(action) {
  try {
    const response = yield call(decreaseQtyAPI, action.data);
    yield put({
      type: DECREASE_QTY_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    alert('다시시도 해주세요.');
    yield put({
      type: DECREASE_QTY_FAILURE,
      data: error,
    });
  }
}

function increaseQtyAPI(data) {
  return axios.patch(`/cart-items/${data.id}`, data, {
    auth,
  });
}

function* increaseQty(action) {
  try {
    const response = yield call(increaseQtyAPI, action.data);
    yield put({
      type: INCREASE_QTY_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    alert('다시시도 해주세요.');
    yield put({
      type: INCREASE_QTY_FAILURE,
      data: error,
    });
  }
}

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

function* watchChangeQty() {
  yield takeLatest(CHANGE_QTY_REQUEST, changeQty);
}
function* watchDecreaseQty() {
  yield takeLatest(DECREASE_QTY_REQUEST, decreaseQty);
}
function* watchIncreaseQty() {
  yield takeLatest(INCREASE_QTY_REQUEST, increaseQty);
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
  yield all([fork(watchChangeQty), fork(watchDecreaseQty), fork(watchIncreaseQty), fork(watchRemoveCart), fork(watchAddCart), fork(watchLoadCart)]);
}
