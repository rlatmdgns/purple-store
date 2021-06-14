import React from 'react';
import axios from 'axios';
import { END } from '@redux-saga/core';
import { useSelector } from 'react-redux';
import { LOAD_PRODUCTS_REQUEST } from '../actions/products';
import wrapper from '../store/confiureStore';
import Loader from '../components/common/Loader';
import ProudctsGroup from '../components/ProductsGroup';

const Home = () => {
  const { productsLoading } = useSelector((state) => state.products);
  return <div>{productsLoading ? <Loader /> : <ProudctsGroup />}</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  context.store.dispatch({
    type: LOAD_PRODUCTS_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
