import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasicHeader from '../components/BasicHeader';
import CustomIcon from '../components/CustomIcon';

const AppRoute = () => (
  <Switch>
    <Route path="/BasicHeader" component={BasicHeader} />
    <Route path="/CustomIcon" component={CustomIcon} />
  </Switch>
);

export default AppRoute;
