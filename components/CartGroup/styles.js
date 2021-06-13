import styled from 'styled-components';

export const CartList = styled.ul`
  margin:0;
  padding: 0;
  list-style: none;
  li{
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
  margin:0 0 50px 0;
  padding: 20px;
  dt,dd{
    padding:10px;
    margin:0;
    flex: 1 1 50%;
    font-size: 18px;
  }
  dd{
    font-weight: 700;
    text-align: right;
  }
  ${TotalPrice}{
    padding-top: 20px;
    font-size: 22px;
  }
  ${Total}{
    padding-top: 20px;
  }
`;

export const Purchase = styled.div`
  position: sticky;
  bottom: 0;
  padding: 20px;
  background:#fff;
`;
