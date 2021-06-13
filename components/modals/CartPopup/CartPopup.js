import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { LOAD_CART_REQUEST } from '../../../actions/carts';
import { totalPice } from '../../common/common';
import {
  PopupWrap,
  ButtonArea,
  Title,
  ProgressWrapper,
  Progress,
  SalePoint,
  SaleList,
  SaleItem,
} from './styles';
import PurpleButton from '../../common/PurpleButton';

const isNext = true;
const CartPopup = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  // const cartPrice = totalPice(carts);
  const cartPrice = 20000;
  const maxPrice = 200000;
  const differencePrice = maxPrice - (cartPrice > maxPrice ? maxPrice : cartPrice);
  let currentPercent = '';
  if (cartPrice <= 25000) {
    currentPercent = 25;
  } else if (cartPrice <= 50000) {
    currentPercent = (cartPrice / 100000) * 100;
  } else if (cartPrice <= 100000) {
    currentPercent = 50 + ((cartPrice / 100000) * 25);
  } else if (cartPrice <= 200000) {
    currentPercent = 50 + (((cartPrice - 100000) / 100000) * 25);
  } else {
    currentPercent = 100;
  }
  const sales = [
    {
      value: 0,
      text: '기본 5% ⇣',
    },
    {
      value: 50000,
      text: '5만원 10% ⇣',
    },
    {
      value: 100000,
      text: '10만원 13% ⇣',
    },
    {
      value: 200000,
      text: '20만원 15% ⇣',
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
      <Title>
        장바구니에 담겼습니다.
      </Title>
      <div>
        <ProgressWrapper>
          <Progress currentPercent={currentPercent} />
          {sales.map((sale, index) => {
            if (sale.value <= cartPrice) {
              return (
                <SalePoint active />
              );
            }
            if (isNextSale) {
              isNextSale = false;
              return (
                <SalePoint>
                  {differencePrice}
                </SalePoint>
              );
            }
            return (
              <SalePoint />
            );
          })}
        </ProgressWrapper>
        <SaleList>
          {sales.map((sale) => {
            if (sale.value <= cartPrice) {
              return (
                <SaleItem active>
                  {sale.text}
                </SaleItem>
              );
            }
            return (
              <SaleItem>
                {sale.text}
              </SaleItem>
            );
          })}
        </SaleList>
      </div>
      <ButtonArea>
        <PurpleButton type="button" onClick={() => setIsOpen(false)} white>계속 담기</PurpleButton>
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
