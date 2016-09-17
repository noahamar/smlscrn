import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Home from '../home/Home';
import Details from '../details/Details';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return ([
    <Route key="0" path="/" component={Home} />,
    <Route key="1" path="/tv/:mediaId" component={Details} />,
    <Redirect key="2" from="*" to="/" />,
  ]);
};
