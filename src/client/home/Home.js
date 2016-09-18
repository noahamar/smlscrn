import $ from 'jquery';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actionCreators from './Home-actionCreators';
import * as actionTypes from './Home-actionTypes';

import '../common/Common.styl';
import './Home.styl';
import Nav from './components/Nav/Nav';
import PosterTiles from './components/PosterTiles/PosterTiles';
import Menu from './components/Menu/Menu';
import GitHubBanner from '../common/components/GitHubBanner/GitHubBanner';

@connect((store) => {
  return {
    home: store.home,
  };
})
export default class Home extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {

    // create bound action creators
    this.bound = bindActionCreators(actionCreators, this.props.dispatch)

  }

  componentDidMount() {

    // check if need initial items
    if (!this.props.home.items.length) {
      this.fetchItems();
    }

    // get component element
    this.compElem = $(ReactDOM.findDOMNode(this));

    // set scroll position
    this.compElem.scrollTop(this.props.home.scrollPosition);

    // remember current scroll position on click
    this.compElem.click(() => {
      const pos = this.compElem.scrollTop();
      this.props.dispatch(actionCreators.setScrollPosition(pos));
    });

    // fetch more items if near bottom
    this.lastFetchScrollHeight = 0;
    this.compElem.on('scroll', () => {
      this.handleInfiniteScroll();
    });

  }

  handleInfiniteScroll(i) {
    const buffer = 500;
    const scrollHeight = this.compElem[0].scrollHeight;
    const a = this.compElem.scrollTop() + this.compElem.innerHeight();
    const b = scrollHeight - buffer;
    if (a >= b) {
      const last = this.lastFetchScrollHeight;
      if (last !== scrollHeight) {
        this.lastFetchScrollHeight = scrollHeight;
        this.fetchItems();
      }
    }
  }

  checkIfNeedMoreItems(i) {
    setTimeout(() => {
      const buffer = 500;
      const a = this.compElem[0].scrollHeight;
      const b = this.compElem[0].clientHeight + buffer;
      if (a <= b) {
        if (!this.props.home.isFetching) {
          this.fetchItems();
        }
        if (--i) {
          this.checkIfNeedMoreItems(i);
        };
      }
    }, 1100);
  }

  fetchItems() {

    // dispatach action
    setTimeout(() => {
      this.props.dispatch(actionCreators.fetchMediaItems(
        this.props.home.selectedSortBy, 
        this.props.home.selectedGenre,
        this.props.home.page+1
      ));
    });

    // fetch more items if needed to fill screen
    this.checkIfNeedMoreItems(10);

  }

  componentWillUnmount() {

    // remove click listeners
    this.compElem.off('click').off('scroll');

  }

  render() {
    const showScrollLoading = this.props.home.isFetching && this.props.home.page;
    return (
      <div class="Home">

        <Helmet title="Smlscrn"></Helmet>

        <div class={classNames('Home__wrapper', {'Home__wrapper--blur': this.props.home.isShowMenu})}>
          <GitHubBanner />
          <Nav 
            fetchItems={this.fetchItems.bind(this)}
            selectedSortBy={this.props.home.selectedSortBy}
            selectedGenre={this.props.home.selectedGenre}
            sortByOptions={this.props.home.sortByOptions}
            toggleMenu={actionCreators.toggleMenu}
            changeFilterSortBy={actionCreators.changeFilterSortBy}
            genreOptions={this.props.home.genreOptions}
            changeFilterGenre={actionCreators.changeFilterGenre}
            isFetching={this.props.home.isFetching}
            {...this.bound} />
          <PosterTiles 
            fetchItems={this.fetchItems.bind(this)}
            selectedSortBy={this.props.home.selectedSortBy}
            selectedGenre={this.props.home.selectedGenre}
            loadType={this.props.home.loadType}
            items={this.props.home.items}
            page={this.props.home.page}
            numItemsShown={this.props.home.numItemsShown}
            {...this.bound} />
          <div class="Home__scroll-loading-wrapper">
            <div class={classNames('Home__scroll-loading', {'Home__scroll-loading--show': showScrollLoading})}></div>
          </div>
        </div>
        <Menu 
          isShowMenu={this.props.home.isShowMenu} 
          toggleMenu={actionCreators.toggleMenu} 
          {...this.bound} />
      </div>
    );
  }

}
