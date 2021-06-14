import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  box-sizing: border-box;
  ${(props) => (props.white
    ? css`
          border: 1px solid #6415b7;
          background-color: #fff;
          color: #6415b7;
        `
    : css`
          background: #6415b7;
          border: 1px solid #5912a4;
          color: #fff;
          a {
            display: block;
            color: #fff;
          }
        `)}
`;
const PurpleButton = ({ children, white, ...rest }) => (
  <Button type="button" white={white} {...rest}>
    {children}
  </Button>
);

export default PurpleButton;
