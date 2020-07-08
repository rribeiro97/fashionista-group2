import React from 'react';

import './CartItem.scss';

const CartItem = ({ data, increment, decrement, remove }) => {
  const product = data;

  return (
    <div className="cart__content">
      <div className="img">
        <img src={product.image} alt={product.name} />
        <span
          onClick={() => remove(product.id, product.selectedSize.sku)}
          className="cart__remove"
        >
          Remover
        </span>
      </div>
      <div className="cart__detail">
        <h4>{product.name}</h4>
        <p>Tam.: {product.selectedSize.size}</p>
        <button onClick={() => decrement(product.id, product.selectedSize.sku)}>
          -
        </button>
        <span>{product.quantity}</span>
        <button onClick={() => increment(product.id, product.selectedSize.sku)}>
          +
        </button>
      </div>
      <div className="cart__price">
        <h4>{product.actual_price}</h4>
        <p>{product.installments}</p>
      </div>
    </div>
  );
};

export default CartItem;
