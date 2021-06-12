import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 6px 20px;
  height: 52px;
`;

export const Logo = styled.h1`
  padding: 0;
  margin:0 0 0 10px;
  font-size: 20px;
`;

export const MenuButton = styled.button`
  width: 24px;
  height: 24px;
  i {
    display: block;
    background: #333;
    height:3px;
    border-radius:10px;
  }
  i + i {
    margin-top:3px;
  }
  `;

export const CartButton = styled.button`
  margin-left:auto;
  img{
    width:24px;
  }
`;
