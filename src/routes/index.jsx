import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductRoute from './ProductRoute';
import HomeRoute from './HomeRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeRoute />
    </Route>

    <Route exact path="/product">
      <ProductRoute />
    </Route>
    <Route path="/produto/:id">
      <ProductRoute />
    </Route>
  </Switch>
);

export default Routes;
