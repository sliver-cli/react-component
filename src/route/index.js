import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasicHeader from '../components/BasicHeader';

const AppRoute = () => (
  <Switch>
    <Route path="/BasicHeader" component={BasicHeader} />
  </Switch>
);

export default AppRoute;
