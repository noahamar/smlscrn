import React from 'react';
import classNames from 'classnames/bind';

import styles from './Filter.styl';
import FilterOptions from '../FilterOptions/FilterOptions';

const cx = classNames.bind(styles);

export default class Filter extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className={cx('Filter')}>
        <div className={cx('Filter__sort-by')}>
          <FilterOptions options={this.props.sortByOptions} onChange={this.props.onChangeFilterSortBy} />
        </div>
        <div className={cx('Filter__in')}>in</div>
        <div className={cx('Filter__genres')}>
          <FilterOptions options={this.props.genreOptions} onChange={this.props.onChangeFilterGenre} />
        </div>
      </div>
    );
  }

}
