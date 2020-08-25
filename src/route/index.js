import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasicHeader from '../components/BasicHeader';
import CustomIcon from '../components/CustomIcon';
import CustomList from '../application/ListDemo';

const AppRoute = () => (
  <Switch>
    <Route path="/BasicHeader" component={BasicHeader} />
    <Route path="/CustomIcon" component={CustomIcon} />
    <Route path="/CustomList" component={CustomList} />
  </Switch>
);

export default AppRoute;
