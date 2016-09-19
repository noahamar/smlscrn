import React from 'react';
import classNames from 'classnames/bind';

import styles from './Menu.styl';

const cx = classNames.bind(styles);

export default class Menu extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={cx('Menu', { 'Menu--show': this.props.isShowMenu })}>
        <div className={cx('Menu__background')} onClick={this.props.toggleMenu}></div>
        <div className={cx('Menu__wrapper')}>
          <div className={cx('Menu__logo')}></div>
          <div className={cx('Menu__close-button')}></div>
          <ul className={cx('Menu__items')}>
            <li className={cx('Menu__item')}><a className={cx('Menu__item-link')} href="https://github.com/noahamar/smlscrn">View on GitHub</a></li>
            <li className={cx('Menu__item')}><a className={cx('Menu__item-link')} href="https://www.themoviedb.org/documentation/api">TMDb API</a></li>
            <li className={cx('Menu__item')}><a className={cx('Menu__item-link')} onClick={this.props.toggleMenu}>Back</a></li>
          </ul>
        </div>
      </div>
    );
  }

}
