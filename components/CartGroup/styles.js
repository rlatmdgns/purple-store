import styled, { css } from 'styled-components';

export const CartAllSelect = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  padding: 0 20px;
  background-color: #f2f2f2;
  font-size: 16px;
  input[type='checkbox'] {
    margin-right: 10px;
    vertical-align: middle;
  }
`;
export const DeleteSelectButton = styled.button`
  margin-left: auto;
  padding: 4px 6px;
  border: 1px solid #d9dddf;
  border-radius: 4px;
  background-color: #f1f4f7;
  color: #65686b;
  font-size: 16px;
  cursor: not-allowed;
  ${(props) => props.active
    && css`
      cursor: pointer;
      background: #fff;
    `}
`;
export const CartList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    padding-bottom: 20px;
    border-bottom: 1px solid #dee1e3;
  }
`;

export const Total = styled.dt`
  border-top: 1px solid #dee1e3;
  font-weight: 700;
`;

export const TotalPrice = styled.dd`
  border-top: 1px solid #dee1e3;
  color: #6415b7;
  font-size: 22px;
`;
export const CartTotal = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 50px 0;
  padding: 20px;
  dt,
  dd {
    padding: 10px;
    margin: 0;
    flex: 1 1 50%;
    font-size: 18px;
  }
  dd {
    font-weight: 700;
    text-align: right;
  }
  ${TotalPrice} {
    padding-top: 20px;
    font-size: 22px;
  }
  ${Total} {
    padding-top: 20px;
  }
`;

export const Purchase = styled.div`
  position: sticky;
  bottom: 0;
  padding: 20px;
  background: #fff;
`;

export const CartEmpty = styled.div`
  padding: 40px 20px;
  text-align: center;
  img{
    margin: 100px 0;
  }
`;
