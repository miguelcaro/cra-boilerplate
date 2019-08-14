import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from 'views/Homepage';
import NoMatch from 'views/NoMatch';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
