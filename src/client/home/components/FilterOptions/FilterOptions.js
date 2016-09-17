import R from 'ramda';
import React from 'react';

import './FilterOptions.styl';

export default class FilterOptions extends React.Component {

  constructor() {
    super();
  }

  render() {

    const options = this.props.options || [];
    this.options = options
      .map(R.fromPairs)
      .map((item, i) => {
        return (
          <option class="FilterOptions__option" key={item.id} value={item.id}>
            {item.label}
          </option>);
      });

    return (
      <div class="FilterOptions">
        <select class="FilterOptions__select" onChange={this.props.onChange} value={this.props.selected}>
          { this.options }
        </select>
        <div class="FilterOptions__triangle">&#9662;</div>
      </div>
    );
  }

}
