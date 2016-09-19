import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './App.styl';

const cx = classNames.bind(styles);

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
