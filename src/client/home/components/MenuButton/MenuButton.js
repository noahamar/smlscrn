import React from 'react';

import './MenuButton.styl';

export default class MenuButton extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="MenuButton" onClick={this.props.onClick}>
        <ul class="MenuButton__ridges">
          <li class="MenuButton__ridge"></li>
          <li class="MenuButton__ridge"></li>
          <li class="MenuButton__ridge"></li>
        </ul>
      </div>
    );
  }

}
