import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_CART_REQUEST } from '../../actions/carts';
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
  const dispatch = useDispatch();
  const price = (item.pog.price).toLocaleString();
  const point = parseInt((item.pog.price) / 100);
  const onClickRemoveCart = (id) => {
    dispatch({
      type: REMOVE_CART_REQUEST,
      data: id,
    });
  };
  return (
    <CartItemWrapper>
      <CartItemHeader>
        <Checkbox
          onChange={(e) => checkHandler(e.target.checked, item)}
          checked={checkItems.indexOf(item) >= 0}
        />
        <CartItemTitle>
          {item.pog.name}
        </CartItemTitle>
        <CartItemDelete type="button" onClick={() => onClickRemoveCart(item.id)}>
          삭제
        </CartItemDelete>
      </CartItemHeader>
      <CartItemContent>
        <CartItemThumbnail>
          <img src={item.pog.image} />
        </CartItemThumbnail>
        <div>
          <Price>
            {price}원
          </Price>
          <Point>
            최대 {point}원 적립예정
          </Point>
          <Quantity>
            <button type="button">-</button>
            {/* {item.qty} */}
            <input type="number" value={item.qty} readOnly />
            <button type="button">+</button>
          </Quantity>
        </div>
      </CartItemContent>
    </CartItemWrapper>
  );
};

export { CartItem };
