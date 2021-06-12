import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

const Wrapper = styled.div`
  max-width: 600px;
  margin:0 auto;
  background: #fff;
`;
const AppLayout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export default AppLayout;
