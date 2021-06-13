import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CartList, CartTotal, Total, TotalPrice, Purchase } from './styles';
import CartItem from '../CartItem';
import PurpleButton from '../common/PurpleButton';
import { totalPice } from '../common/common';

const CartGroup = () => {
  const { carts } = useSelector((state) => state.carts);
  const [checkItems, setCheckItems] = useState(carts);
  const [shippingFee, setShippingFee] = useState(3000);
  const totaProdutPrice = totalPice(checkItems);
  const totalPrice = (totaProdutPrice + shippingFee).toLocaleString();
  // 개별선택
  const checkHandler = (checked, id) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      // 체크해제
      setCheckItems(checkItems.filter((v) => v !== id));
    }
  };

  // 전체선택
  const checkAllHandler = (checked) => {
    if (checked) {
      const ids = [];
      carts.forEach((item) => ids.push(item.id));
      setCheckItems(ids);
    } else {
      setCheckItems([]);
    }
  };
  useEffect(() => {
    setCheckItems(carts);
  }, [carts]);
  useEffect(() => {
    if (totaProdutPrice >= 30000) {
      setShippingFee(0);
    }
  }, [totaProdutPrice]);
  return (
    <>
      {
        carts.length < 1
          ? <div>데이터 없음</div>
          : (
            <>
              <CartList>
                {carts.map((item) => (
                  <li key={item.id}>
                    <CartItem item={item} checkItems={checkItems} checkHandler={checkHandler} />
                  </li>
                ))}
              </CartList>
              <CartTotal>
                <dt>
                  총 상품가격
                </dt>
                <dd>
                  {totaProdutPrice.toLocaleString()}원
                </dd>
                <dt>총 배송비</dt>
                <dd>
                  {shippingFee.toLocaleString()}원
                </dd>
                <Total>합계</Total>
                <TotalPrice>
                  {totalPrice}원
                </TotalPrice>
              </CartTotal>
              <Purchase>
                <PurpleButton>
                  구매하기 ({checkItems.length})
                </PurpleButton>
              </Purchase>
            </>
          )
      }
    </>
  );
};

export { CartGroup };
