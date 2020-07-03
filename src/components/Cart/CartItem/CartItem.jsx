import React from 'react';

import './CartItem.scss';

const CartItem = () => {
  return (
    <div className="cart__content">
      <div className="img">
        <img
          src="https://viniciusvinna.netlify.app/assets/api-fashionista/20002575_027_catalog_1.jpg"
          alt=""
        />
      </div>
      <div className="cart__detail">
        <h4>Name</h4>
        <p>Tam.: </p>
        <button>-</button>
        <span>Qtd</span>
        <button>+</button>
        <span className="cart__remove">Remover</span>
      </div>
      <div className="cart__price">
        <h4>Preco</h4>
        <p>Instal</p>
      </div>
    </div>
  );
};

export default CartItem;
