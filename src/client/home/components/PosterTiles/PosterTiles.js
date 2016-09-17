import R from 'ramda';
import React from 'react';

import './PosterTiles.styl';
import PosterTile from '../../../common/components/PosterTile/PosterTile';

export default class PosterTiles extends React.Component {

  constructor() {
    super();
    this.elements = [];
  }

  buildItem(i, data) {
    let delay = 0;
    if (this.props.loadType === 'fetch' && this.props.page === data.page) {
      delay = 0.05 * data.numInPage;
    }
    // if ((data.date + 1200) > Date.now()) {
    //   delay = 0.05 * data.numInPage;
    // }
    return (
      <div key={i} class="PosterTiles__poster-tile-wrapper" style={{animationDelay: delay + 's'}}>
        <PosterTile data={{...data, clickable: true, to: '/tv/123'}} />
      </div>);
  }

  render() {

    this.elements = this.props.items
      .map(R.fromPairs)
      .map((data, i) => {
        return this.buildItem(i+1, data);
      });

    return (
      <div class="PosterTiles">
        { this.elements }
      </div>
    );
  }

}
