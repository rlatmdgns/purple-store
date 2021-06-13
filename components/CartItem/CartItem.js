import React from 'react';
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
  const price = (item.pog.price).toLocaleString();
  const point = (item.pog.price) / 100;
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
        <CartItemDelete type="button">
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
            <input type="number" />
            <button type="button">+</button>
          </Quantity>
        </div>
      </CartItemContent>
    </CartItemWrapper>
  );
};

export { CartItem };
