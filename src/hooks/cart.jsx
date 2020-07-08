import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import Cart from '../components/Cart/Cart';
import Search from '../components/Search/Search';
import { fakeApi } from '../services/fakeApi';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const storagedProducts = await localStorage.getItem(
        '@Codenation:products'
      );

      if (storagedProducts) setProducts([...JSON.parse(storagedProducts)]);
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product) => {
      const productExists = products.find((p) => p.id === product.id);

      if (productExists) {
        setProducts(
          products.map((p) =>
            p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p
          )
        );
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }

      await localStorage.setItem(
        '@Codenation:products',
        JSON.stringify(products)
      );
    },
    [products]
  );

  const removeFromCart = useCallback(
    async (id) => {
      const productExists = products.find((p) => p.id === id);

      if (productExists) {
        const newProducts = products.filter((p) => p.id !== id);
        setProducts(newProducts);

        await localStorage.setItem(
          '@Codenation:products',
          JSON.stringify(newProducts)
        );
      }
    },
    [products]
  );

  const increment = useCallback(
    async (id) => {
      const newProducts = products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product }
      );

      setProducts(newProducts);

      await localStorage.setItem(
        '@Codenation:products',
        JSON.stringify(newProducts)
      );
    },
    [products]
  );

  const decrement = useCallback(
    async (id) => {
      const productExists = products.find((p) => p.id === id);

      if (productExists.quantity - 1 === 0) removeFromCart(id);
      else {
        const newProducts = products.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );

        setProducts(newProducts);

        await localStorage.setItem(
          '@Codenation:products',
          JSON.stringify(newProducts)
        );
      }
    },
    [products, removeFromCart]
  );

  const totalItensInCart = useMemo(() => {
    if (products.length > 0) {
      const total = products.reduce((acc, product) => {
        const productQuantity = product.quantity;

        return acc + productQuantity;
      }, 0);

      return total;
    }

    return 0;
  }, [products]);

  const openCart = useCallback(() => {
    if (visible) setVisible(false);
    else setVisible(true);
  }, [visible]);

  const openSearch = useCallback(() => {
    if (show) setShow(false);
    else setShow(true);
  }, [show]);

  return (
    <CartContext.Provider
      value={{
        openCart,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        products,
        totalItensInCart,
        openSearch,
      }}
    >
      {children}
      <Cart show={visible} />
      <Search show={show} />
    </CartContext.Provider>
  );
};

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export { CartProvider, useCart };
