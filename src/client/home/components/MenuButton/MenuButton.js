import React from 'react';
import classNames from 'classnames/bind';

import styles from './MenuButton.styl';

const cx = classNames.bind(styles);

export default class MenuButton extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={cx('MenuButton')} onClick={this.props.onClick}>
        <ul className={cx('MenuButton__ridges')}>
          <li className={cx('MenuButton__ridge')}></li>
          <li className={cx('MenuButton__ridge')}></li>
          <li className={cx('MenuButton__ridge')}></li>
        </ul>
      </div>
    );
  }

}
