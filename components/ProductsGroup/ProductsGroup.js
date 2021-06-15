import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CART_REQUEST } from '../../actions/carts';
import ProductItem from '../ProductItem';
import { ProductList } from './styles';
import { LOAD_PRODUCTS_REQUEST } from '../../actions/products';
import Modal from '../modals/Modal';
import CartPopup from '../modals/CartPopup';

const ProductsGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { products, productsLoading, nextProducts } = useSelector((state) => state.products);
  const { addCartDone } = useSelector((state) => state.carts);
  const onClickAddCart = (id) => {
    dispatch({
      type: ADD_CART_REQUEST,
      data: {
        pog: { id },
        qty: 1,
      },
    });
  };

  useEffect(() => {
    const page = nextProducts ? nextProducts.charAt(nextProducts.length - 1) : null;
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {
        if (!productsLoading && page) {
          dispatch({
            type: LOAD_PRODUCTS_REQUEST,
            page,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [productsLoading]);

  useEffect(() => {
    if (addCartDone) {
      setIsOpen(true);
    }
  }, [addCartDone]);
  return (
    <>
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} onClickAddCart={onClickAddCart} />
          </li>
        ))}
      </ProductList>
      <Modal visible={isOpen} setIsOpen={setIsOpen}>
        <CartPopup setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export { ProductsGroup };
