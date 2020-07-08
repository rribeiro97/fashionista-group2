import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from '../../hooks';
import Topbar from '../../components/TopBar/TopBar';

import Routes from '../../routes';

import './App.scss';

const App = () => (
  <BrowserRouter>
      <AppProvider>
    <div className="app_test">
          <Topbar />
          <Routes />
    </div>
      </AppProvider>
    </BrowserRouter>
);

export default App;
