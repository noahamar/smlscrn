import R from 'ramda';
import React from 'react';
import Infinite from 'react-infinite';

import './PosterTiles.styl';
import PosterTile from '../../../common/components/PosterTile/PosterTile';

export default class PosterTiles extends React.Component {

  constructor() {
    super();
    this.items = [];
  }

  componentWillMount() {
    // this.items = [];
  }

  fetchItems(start, end) {
      var items = [];
      for (var i = start; i < end; i++) {
        items.push(<div key={i}>{i}</div>)
      }
      return items;
  }

  handleInfiniteLoad() {
      this.isInfiniteLoading = true;
      setTimeout(() => {
        var len = this.items.length,
        var newItems = this.fetchItems(len, len + 1000);
        this.isInfiniteLoading = false;
        this.items = this.items.concat(newItems);
      }, 2500);
  }

  elementInfiniteLoad() {
      return (
        <div className="infinite-list-item">
          Loading...
        </div>
      );
  }

  render() {
    return (
      <Infinite elementHeight={40}
                containerHeight={250}
                infiniteLoadBeginEdgeOffset={200}
                onInfiniteLoad={this.handleInfiniteLoad}
                loadingSpinnerDelegate={this.elementInfiniteLoad()}
                isInfiniteLoading={this.isInfiniteLoading}>
        {this.items}
      </Infinite>;
    );
  }

}
