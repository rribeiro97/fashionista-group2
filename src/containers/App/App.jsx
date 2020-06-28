import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Topbar from '../../components/TopBar/TopBar';

import Routes from '../../routes';

import './App.scss';
import HomeRoute from '../../routes/HomeRoute/HomeRoute';

const App = () => (
  // <BrowserRouter>
    <React.Fragment>
      <Topbar />
      <HomeRoute />
    </React.Fragment>
    // <Routes />
  // </BrowserRouter>
);

export default App;
