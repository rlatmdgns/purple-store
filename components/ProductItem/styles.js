import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 10px 15px;
`;

export const ProductTitle = styled.p`
  overflow: hidden;
  display: -webkit-box;
  margin: 5px 0 0 0;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: #1d1e1f;
`;

export const ProductPrice = styled.em`
  display: block;
  font-size: 16px;
  font-weight: 700;
  font-style: normal;
  letter-spacing: -0.3px;
  color: #141414;
  text-align: right;
`;

export const ProductImgWrapper = styled.div`
  position: relative;
  padding: 10px 0;
  border-radius: 6px;
  background-color: #f2f2f2;
  text-align: center;
  img {
    width: 132px;
    height: 140px;
    object-fit: cover;
  }
`;
export const ProductCart = styled.button`
  position: absolute;
  right: 22px;
  bottom: 10px;
  display: block;
  padding: 5px 6px;
  border: 1px solid #555;
  border-radius: 50%;
  text-align: center;
  background: #fff;
  &:before {
    display: inline-block;
    margin: 2px 0 0 -2px;
    content: '';
    width: 20px;
    height: 17px;
    background: url('./images/icon-cart.svg') no-repeat;
    background-size: cover;
  }
`;
