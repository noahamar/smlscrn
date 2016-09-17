import classNames from 'classnames';
import React from 'react';

import './Nav.styl';
// import Filter from '../Filter/Filter';
import FilterOptions from '../FilterOptions/FilterOptions';
import MenuButton from '../MenuButton/MenuButton';

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
      <div class="Nav">
        <div class="Nav__menu-button">
          <MenuButton onClick={this.props.toggleMenu}/>
        </div>
        <div class="Nav__filter">
          <div class="Nav__filter-sort-by">
            <FilterOptions 
                options={this.props.sortByOptions} 
                selected={this.props.selectedSortBy} 
                onChange={this.handleChangeSortBy.bind(this)} />
          </div>
          <div class="Nav__filter-in">in</div>
          <div class="Nav__filter-genres">
            <FilterOptions 
                options={this.props.genreOptions} 
                selected={this.props.selectedGenre}
                onChange={this.handleChangeGenre.bind(this)} />
          </div>
        </div>
        <div class={classNames('Nav__loading', {'Nav__loading--show': this.props.isFetching})}></div>
      </div>
    );
  }

}
