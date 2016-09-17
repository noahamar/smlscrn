import R from 'ramda';
import React from 'react';
import Infinite from 'react-infinite';

import './PosterTiles.styl';
import PosterTile from '../../../common/components/PosterTile/PosterTile';

export default class PosterTiles extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.setState({
      items: this.fetchItems(0, 40),
      isInfiniteLoading: false
    });
  }

  fetchItems(start, end) {
    let items = [];
    for (let i = start; i < end; i++) {
      items.push(<div key={i}>{i}</div>)
    }
    return items;
  }

  handleInfiniteLoad() {
    this.isInfiniteLoading = true;
    this.setState({
      isInfiniteLoading: true
    });
    console.log('getting new items!');
    setTimeout(() => {
      console.log(this.state.items);
      let len = this.state.items.length;
      let newItems = this.fetchItems(len, len + 40);
      this.setState({
        isInfiniteLoading: false,
        items: this.state.items.concat(newItems)
      });
      console.log(newItems);
      console.log(this.state.items);
    }, 1000);
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
      <div class="PosterTiles">
        <Infinite 
                  elementHeight={21}
                  infiniteLoadBeginEdgeOffset={40}
                  onInfiniteLoad={this.handleInfiniteLoad.bind(this)}
                  loadingSpinnerDelegate={this.elementInfiniteLoad()}
                  isInfiniteLoading={this.state.isInfiniteLoading}
                  useWindowAsScrollContainer
                  >
          {this.state.items}
        </Infinite>
      </div>
    );
  }

}
