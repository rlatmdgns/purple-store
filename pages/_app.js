import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/confiureStore';
import { GlobalStyle } from '../styles/global-styles';
import AppLayout from '../components/layout/AppLayout';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0" name="viewport" />
      <title>퍼플스토어</title>
      <meta content="퍼플스토어" property="og:title" />
      <meta content="동물친구와의 평화로운 동거생활, 퍼플스토어와 함께!" name="description" />
      <meta content="동물친구와의 평화로운 동거생활, 퍼플스토어와 함께!" property="og:description" />
      <link href="https://s3-purplestore.s3.ap-northeast-2.amazonaws.com/assets/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    </Head>
    <GlobalStyle />
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired, // elementType  = jsx
};

export default wrapper.withRedux(App);
