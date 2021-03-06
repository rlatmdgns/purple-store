import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { LOAD_CART_REQUEST } from '../../../actions/carts';
import { totalPice } from '../../common/common';
import { PopupWrap, ButtonArea, Title, ProgressWrapper, Progress, SalePoint, SaleList, SaleItem } from './styles';
import PurpleButton from '../../common/PurpleButton';

const CartPopup = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);

  const cartPrice = totalPice(carts);
  let goalPirce;

  let currentPercent = '';
  if (cartPrice <= 25000) {
    currentPercent = 25;
  } else if (cartPrice <= 50000) {
    currentPercent = (cartPrice / 100000) * 100;
  } else if (cartPrice <= 100000) {
    currentPercent = 50 + (cartPrice / 100000) * 25;
  } else if (cartPrice <= 200000) {
    currentPercent = 75 + ((cartPrice - 100000) / 100000) * 25;
  } else {
    currentPercent = 100;
  }

  const sales = [
    {
      value: 0,
      text: '기본',
      percent: '5%',
    },
    {
      value: 50000,
      text: '5만원',
      percent: '10%',
    },
    {
      value: 100000,
      text: '10만원',
      percent: '13%',
    },
    {
      value: 200000,
      text: '20만원',
      percent: '15%',
    },
  ];
  useEffect(() => {
    dispatch({
      type: LOAD_CART_REQUEST,
    });
  }, [setIsOpen]);
  let isNextSale = true;
  return (
    <PopupWrap>
      <Title>장바구니에 담겼습니다.</Title>
      <div>
        <ProgressWrapper>
          <Progress currentPercent={currentPercent} />
          {sales.map((sale, index) => {
            if (sale.value <= cartPrice) {
              return <SalePoint key={sale.value} active />;
            }
            if (isNextSale) {
              goalPirce = sale.value;
              isNextSale = false;
              return (
                <SalePoint key={sale.value}>
                  <span>
                    {(goalPirce - cartPrice).toLocaleString()}원 추가시
                    <em>{sale.percent}할인</em>
                  </span>
                </SalePoint>
              );
            }
            return <SalePoint />;
          })}
        </ProgressWrapper>
        <SaleList>
          {sales.map((sale) => {
            if (sale.value <= cartPrice) {
              return (
                <SaleItem key={sale.value} active>
                  {sale.text}
                  {sale.percent}↓
                </SaleItem>
              );
            }
            return (
              <SaleItem key={sale.value}>
                {sale.text}
                {sale.percent}↓
              </SaleItem>
            );
          })}
        </SaleList>
      </div>
      <ButtonArea>
        <PurpleButton type="button" onClick={() => setIsOpen(false)} white>
          계속 담기
        </PurpleButton>
        <PurpleButton>
          <Link href="/cart-items">
            <a>장바구니 확인</a>
          </Link>
        </PurpleButton>
      </ButtonArea>
    </PopupWrap>
  );
};

export { CartPopup };
