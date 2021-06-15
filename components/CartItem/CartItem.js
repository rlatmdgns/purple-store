import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CHANGE_QTY_REQUEST, DECREASE_QTY_REQUEST, INCREASE_QTY_REQUEST, REMOVE_CART_REQUEST } from '../../actions/carts';
import Checkbox from '../common/Checkbox';
import {
  CartItemWrapper,
  CartItemTitle,
  CartItemHeader,
  CartItemDelete,
  CartItemContent,
  Price,
  Point,
  CartItemThumbnail,
  Quantity,
} from './styles';

const CartItem = ({ item, checkHandler, checkItems }) => {
  const [qty, setQty] = useState(item.qty);
  const dispatch = useDispatch();
  const price = item.pog.price.toLocaleString();
  const point = parseInt(item.pog.price / 100);
  const onClickRemoveCart = (id) => {
    dispatch({
      type: REMOVE_CART_REQUEST,
      data: id,
    });
  };
  const onClickIncreaseQty = (id, qty) => {
    if (qty === 100) return;
    dispatch({
      type: INCREASE_QTY_REQUEST,
      data: {
        id,
        qty: qty += 1,
      },
    });
    setQty(qty + 1);
  };
  const onClickDecreaseQty = (id, qty) => {
    if (qty === 1) return;
    dispatch({
      type: DECREASE_QTY_REQUEST,
      data: {
        id,
        qty: qty -= 1,
      },
    });
    setQty(qty - 1);
  };
  const onChangeQty = (e, id) => {
    const qty = e.target.value;
    dispatch({
      type: CHANGE_QTY_REQUEST,
      data: {
        id,
        qty,
      },
    });
    setQty(qty);
    if (e.target.value > 100) {
      setQty(100);
    }
  };
  return (
    <CartItemWrapper>
      <CartItemHeader>
        <Checkbox onChange={(e) => checkHandler(e.target.checked, item)} checked={checkItems.indexOf(item) >= 0} />
        <CartItemTitle>{item.pog.name}</CartItemTitle>
        <CartItemDelete type="button" onClick={() => onClickRemoveCart(item.id)}>
          삭제
        </CartItemDelete>
      </CartItemHeader>
      <CartItemContent>
        <CartItemThumbnail>
          <img src={item.pog.image} />
        </CartItemThumbnail>
        <div>
          <Price>{price}원</Price>
          <Point>최대 {point}원 적립예정</Point>
          <Quantity>
            <button type="button" onClick={() => onClickDecreaseQty(item.id, item.qty)}>-</button>
            <input type="number" value={qty} onChange={(e) => onChangeQty(e, item.id)} />
            <button type="button" onClick={() => onClickIncreaseQty(item.id, item.qty)}>+</button>
          </Quantity>
        </div>
      </CartItemContent>
    </CartItemWrapper>
  );
};

export { CartItem };
