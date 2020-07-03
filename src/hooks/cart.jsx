import React, { createContext, useCallback, useContext, useState } from 'react';

import Cart from '../components/Cart/Cart';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const openCart = useCallback(() => {
    if (visible) setVisible(false);
    else setVisible(true);
  }, [visible]);

  return (
    <CartContext.Provider value={{ openCart }}>
      {children}
      <Cart show={visible} />
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
