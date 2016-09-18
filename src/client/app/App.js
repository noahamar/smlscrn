import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './App.styl';

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.js` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({children}) => {
  return (
    <div className={cx('App')}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
