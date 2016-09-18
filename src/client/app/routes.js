import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import Home from '../home/Home';
import Details from '../details/Details';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="tv/:mediaId" component={Details} />
      <Redirect from="*" to="/" />
    </Route>
  );
};
