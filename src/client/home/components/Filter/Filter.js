import React from 'react';

import './Filter.styl';
import FilterOptions from '../FilterOptions/FilterOptions';

export default class Filter extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="Filter">
        <div class="Filter__sort-by">
          <FilterOptions options={this.props.sortByOptions} onChange={this.props.onChangeFilterSortBy} />
        </div>
        <div class="Filter__in">in</div>
        <div class="Filter__genres">
          <FilterOptions options={this.props.genreOptions} onChange={this.props.onChangeFilterGenre} />
        </div>
      </div>
    );
  }

}
