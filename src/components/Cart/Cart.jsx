import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import CartItem from './CartItem/CartItem';
import { useCart } from '../../hooks/cart';

import './Cart.scss';

const Cart = ({ show }) => {
  const { openCart } = useCart();

  return (
    <>
      {show && (
        <div className="cart__drawer">
          <div className="cart__header">
            <FiArrowLeft onClick={() => openCart()} />
            <span>Meu carrinho</span>
          </div>

          <CartItem />

          <div className="cart__footer">
            <span>teste</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
