import React, { useState } from 'react'
import PropTypes from 'prop-types';
import LeftMenu from '../LeftMenu';
import styled from 'styled-components';
import { UserHeader } from '../UserHeader/UserHeader';

const Wrap = styled.div`
  display:flex;
  height:100vh;
`
const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
`
const Content = styled.div`
  overflow:auto;
  flex:1;
`

const AppLayout = ({children}) => {
  return (
    <Wrap>
      <LeftMenu/>
      <Container>
        <UserHeader/>
        <Content>{children}</Content>
      </Container>
    </Wrap>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AppLayout
