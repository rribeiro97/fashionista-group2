import React, {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

import Cart from '../components/Cart/Cart';
import { fakeApi } from '../services/fakeApi';

const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      const storagedProducts = await localStorage.getItem(
        '@Codenation:products'
      );

      if (storagedProducts) setProducts([...JSON.parse(storagedProducts)]);
      else {
        const newProduct = [fakeApi[0]];

        setProducts(newProduct);
      }
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

      if (productExists)
        setProducts({ products: products.filter((p) => p.id !== id) });
    },
    [products]
  );

  const increment = useCallback(
    async (id) => {
      const newProducts = products.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : { ...product, quantity: 1 }
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
      }}
    >
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
