import styled, { css } from 'styled-components';

export const PopupWrap = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width: 400px;
  height: auto;
  padding:20px;
  background: #fff;
  border-radius: 10px;
`;
export const Text = styled.p`
  text-align:center;
  font-size:14px;
`;
export const ButtonArea = styled.div`
  margin-top:20px;
  display:flex;
  justify-content:space-between;
  flex:1;
  button{
    max-width:48%;
    height: 40px;
  }
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const ProgressWrapper = styled.div`
  position: relative;
  background: #ccc;
  height: 10px;
  margin-top: 40px;
  transition: background .3s ease-in-out;
  border-radius: 100px;
  display: flex;
`;

export const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => `${props.currentPercent}%` || 0};
  height: 10px;
  border-radius: 100px;
  background: #6415b7;
  transition: width .3s ease-in-out;
`;

export const SalePoint = styled.div`
    position: relative;
    flex: 1;
    text-align: right;
    display: block;
  &:after{
    position: relative;
    top: -4px;
    display: inline-block;
    content: "";
    width: 14px;
    height: 14px;
    margin-left: 23%;
    border-radius: 50%;
    background: ${(props) => (props.active ? '#cb9aff' : '#fff')};
    vertical-align: top;
    border: 2px solid #5912a4;
  }
  span{
    position: absolute;
    right:0;
    top:-30px;
    min-width: 160px;
    padding: 4px;
    border: 1px solid #5912a4;
    border-radius: 100px;
    font-size: 12px;
    text-align: center;
    em{
      font-weight: 700;
      font-style: normal;
      color: #6415b7;
    }
  }
`;

export const SaleList = styled.ul`
  display: flex;
  margin:10px 0 0 0;
  padding:0;
  text-align:right;
  list-style: none;
  font-size: 12px;
`;

export const SaleItem = styled.li`
    flex: 1;
    color: ${(props) => (props.active ? '#6415b7' : '#000')};
`;
