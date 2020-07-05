import React, { useEffect, useMemo } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import CartItem from './CartItem/CartItem';
import formatValue from '../../utils/formatValues';
import { useCart } from '../../hooks/cart';

import './Cart.scss';

const Cart = ({ show }) => {
  const {
    openCart,
    products,
    increment,
    decrement,
    totalItensInCart,
    removeFromCart,
  } = useCart();

  const cartTotal = useMemo(() => {
    if (products.length > 0) {
      const total = products.reduce((acc, product) => {
        // Needs improvement
        const price = parseFloat(
          product.actual_price
            .split(' ')[1]
            .replace(/\./gi, '')
            .replace(/,/gi, '.')
        );

        const productSubtotal = price * product.quantity;

        return acc + productSubtotal;
      }, 0);

      return formatValue(total);
    }

    return 0;
  }, [products]);

  return (
    <>
      {show && (
        <div className="cart__drawer">
          <div className="cart__header">
            <FiArrowLeft onClick={() => openCart()} />
            <span>Meu carrinho ({totalItensInCart})</span>
          </div>

          {products.length > 0 &&
            products.map((product) => (
              <CartItem
                key={product.id}
                data={product}
                increment={increment}
                decrement={decrement}
                remove={removeFromCart}
              />
            ))}

          <div className="cart__footer">
            <p>
              <strong>SubTotal - {cartTotal}</strong>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
