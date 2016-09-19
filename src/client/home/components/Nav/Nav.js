import React from 'react';
import classNames from 'classnames/bind';

import styles from './Nav.styl';
import FilterOptions from '../FilterOptions/FilterOptions';
import MenuButton from '../MenuButton/MenuButton';

const cx = classNames.bind(styles);

export default class Nav extends React.Component {

  constructor(props) {
    super();
  }

  handleChangeSortBy(event) {
    this.props.changeFilterSortBy(event.target.value);
    this.props.fetchItems();
  }

  handleChangeGenre(event) {
    this.props.changeFilterGenre(event.target.value);
    this.props.fetchItems();
  }

  // fetch() {
  //   this.props.fetchItems(this.props.selectedSortBy, this.props.selectedGenre);
  // }

  render() {
    return (
      <div className={cx('Nav')}>
        <div className={cx('Nav__menu-button')}>
          <MenuButton onClick={this.props.toggleMenu}/>
        </div>
        <div className={cx('Nav__filter')}>
          <div className={cx('Nav__filter-sort-by')}>
            <FilterOptions 
                options={this.props.sortByOptions} 
                selected={this.props.selectedSortBy} 
                onChange={this.handleChangeSortBy.bind(this)} />
          </div>
          <div className={cx('Nav__filter-in')}>in</div>
          <div className={cx('Nav__filter-genres')}>
            <FilterOptions 
                options={this.props.genreOptions} 
                selected={this.props.selectedGenre}
                onChange={this.handleChangeGenre.bind(this)} />
          </div>
        </div>
        <div className={cx('Nav__loading', {'Nav__loading--show': this.props.isFetching})}></div>
      </div>
    );
  }

}
