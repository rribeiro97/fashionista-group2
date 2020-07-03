import React from 'react';

import { CartProvider } from '../hooks/cart';

const AppProvider = ({ children }) => <CartProvider>{children}</CartProvider>;

export default AppProvider;
