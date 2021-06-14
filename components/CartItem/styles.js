import styled from 'styled-components';

export const CartItemWrapper = styled.div``;
export const CartItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
export const CartItemTitle = styled.div`
  margin-left: 4px;
  font-size: 16px;
`;
export const CartItemDelete = styled.button`
  margin-left: auto;
  font-size: 16px;
  font-weight: 700;
  color: #6415b7;
`;
export const Price = styled.em`
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
`;
export const Point = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: #7f8387;
`;
export const CartItemContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
export const CartItemThumbnail = styled.div`
  position: relative;
  width: 100px;
  height: 120px;
  margin-right: 12px;
  border-radius: 6px;
  background-color: #f2f2f2;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 86px;
    height: 91px;
    object-fit: cover;
  }
`;
export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #dee1e3;
  border-radius: 4px;
  font-size: 24px;
  button {
    flex: 1;
    color: #666;
    font-size: 30px;
  }
  input[type='number'] {
    width: 40px;
    border: 0;
    text-align: center;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
