import classNames from 'classnames';
import React from 'react';

import './Menu.styl';

export default class Menu extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class={classNames('Menu', { 'Menu--show': this.props.isShowMenu })}>
        <div class="Menu__background" onClick={this.props.toggleMenu}></div>
        <div class="Menu__wrapper">
          <div class="Menu__logo"></div>
          <div class="Menu__close-button"></div>
          <ul class="Menu__items">
            <li class="Menu__item">View on GitHub</li>
            <li class="Menu__item">TMDb API</li>
            <li class="Menu__item" onClick={this.props.toggleMenu}>Back</li>
          </ul>
        </div>
      </div>
    );
  }

}
