import React from 'react';

import './PosterTile.styl';

export default class PosterTile extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div class="PosterTile">
        <div class="PosterTile__image">
          <div class="PosterTile__stars  PosterTile__stars--grey">
            <div class="PosterTile__stars PosterTile__stars--orange"></div>
          </div>
        </div>
        <div class="PosterTile__info">
          <div class="PosterTile__title-wrapper">
            <div class="PosterTile__title">Star Wars: The Force Awakens</div>
          </div>
        </div>
      </div>
    );
  }

}
