import React, { useEffect } from 'react';
import { END } from '@redux-saga/core';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from '../store/confiureStore';
import Loader from '../components/common/Loader';
import { LOAD_CART_REQUEST } from '../actions/carts';
import CartGroup from '../components/CartGroup';

const Cart = () => (
  <CartGroup />
);

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  context.store.dispatch({
    type: LOAD_CART_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});
export default Cart;
