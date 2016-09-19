import R from 'ramda';
import React from 'react';
import classNames from 'classnames/bind';

import styles from './FilterOptions.styl';

const cx = classNames.bind(styles);

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
          <option className={cx('FilterOptions__option')} key={item.id} value={item.id}>
            {item.label}
          </option>);
      });

    return (
      <div className={cx('FilterOptions')}>
        <select className={cx('FilterOptions__select')} onChange={this.props.onChange} value={this.props.selected}>
          { this.options }
        </select>
        <div className={cx('FilterOptions__triangle')}>&#9662;</div>
      </div>
    );
  }

}
