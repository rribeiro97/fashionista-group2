import React, { createContext, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from '../../hooks';
import Topbar from '../../components/TopBar/TopBar';

import Routes from '../../routes';

import './App.scss';

import reducer, { KEYS, INITIAL_STATE, clear, updateValue, updateCart } from './duck';

export const ProductContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <BrowserRouter>

      <ProductContext.Provider value={{ productState: state, productDispatch: dispatch }}>
        <AppProvider>
          <Topbar />
          <Routes />
        </AppProvider>
      </ProductContext.Provider>
  
    </BrowserRouter>
  )
};

export default App;
