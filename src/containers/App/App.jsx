import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from '../../hooks';
import Topbar from '../../components/TopBar/TopBar';

import Routes from '../../routes';

import './App.scss';

const App = () => (
   <BrowserRouter>

    <AppProvider>
      <Topbar />
      <Routes />
    </AppProvider>
  
   </BrowserRouter>
);

export default App;
