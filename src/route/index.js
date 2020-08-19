import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasicHeader from '../components/BasicHeader';

const AppRoute = () => (
  <Switch>
    <Route path="/basicheader" component={BasicHeader} />
  </Switch>
);

export default AppRoute;
