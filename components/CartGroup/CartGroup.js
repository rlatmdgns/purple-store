import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartAllSelect,
  CartEmpty,
  DeleteSelectButton,
  CartList,
  CartTotal,
  Total,
  TotalPrice,
  Purchase,
} from './styles';
import CartItem from '../CartItem';
import PurpleButton from '../common/PurpleButton';
import { totalPice } from '../common/common';
import Checkbox from '../common/Checkbox';
import { REMOVE_CART_REQUEST } from '../../actions/carts';

const CartGroup = () => {
  const dispatch = useDispatch();
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
      carts.forEach((item) => ids.push(item));
      console.log(ids);
      setCheckItems(ids);
    } else {
      setCheckItems([]);
    }
  };

  const onClickDeleteSelect = () => {
    checkItems.map((item) => dispatch({
      type: REMOVE_CART_REQUEST,
      data: item.id,
    }));
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
      <CartAllSelect>
        <label>
          <Checkbox
            onChange={(e) => checkAllHandler(e.target.checked)}
            checked={carts.length !== 0 && checkItems.length === carts.length}
          />
          전체선택
        </label>
        {checkItems.length > 0 ? (
          <DeleteSelectButton onClick={onClickDeleteSelect} active>
            선택삭제
          </DeleteSelectButton>
        ) : (
          <DeleteSelectButton>선택삭제</DeleteSelectButton>
        )}
      </CartAllSelect>
      {carts.length < 1 ? (
        <CartEmpty>
          <img src="./images/img_cart_empty.png" width="200px" />
          <PurpleButton>
            <Link href="/">
              <a>퍼플스토어 둘러보기</a>
            </Link>
          </PurpleButton>
        </CartEmpty>
      ) : (
        <>
          <CartList>
            {carts.map((item) => (
              <li key={item.id}>
                <CartItem item={item} checkItems={checkItems} checkHandler={checkHandler} />
              </li>
            ))}
          </CartList>
          <CartTotal>
            <dt>총 상품가격</dt>
            <dd>{totaProdutPrice.toLocaleString()}원</dd>
            <dt>총 배송비</dt>
            <dd>{shippingFee.toLocaleString()}원</dd>
            <Total>합계</Total>
            <TotalPrice>{totalPrice}원</TotalPrice>
          </CartTotal>
          <Purchase>
            <PurpleButton>구매하기 ({checkItems.length})</PurpleButton>
          </Purchase>
        </>
      )}
    </>
  );
};

export { CartGroup };
