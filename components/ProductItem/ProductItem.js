import React from 'react';
import { ProductWrapper, ProductTitle, ProductPrice, ProductImgWrapper, ProductCart } from './styles';

const ProductItem = ({ product, onClickAddCart }) => (
  <ProductWrapper>
    <ProductImgWrapper>
      <img src={product.image} alt={product.name} />
      <ProductCart type="button" onClick={() => onClickAddCart(product.id)} />
    </ProductImgWrapper>
    <ProductTitle>{product.name}</ProductTitle>
    <ProductPrice>{(product.price).toLocaleString()}원</ProductPrice>
  </ProductWrapper>
);

export { ProductItem };
