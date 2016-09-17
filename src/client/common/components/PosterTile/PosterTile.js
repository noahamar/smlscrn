import $ from 'jquery';
import AtvImg from 'react-atv-img';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import './PosterTile.styl';
import stars5  from './assets/stars-5.svg';
import stars45 from './assets/stars-4-5.svg';
import stars4  from './assets/stars-4.svg';
import stars35 from './assets/stars-3-5.svg';
import stars3  from './assets/stars-3.svg';
import stars25 from './assets/stars-2-5.svg';
import stars2  from './assets/stars-2.svg';
import stars15 from './assets/stars-1-5.svg';
import stars1  from './assets/stars-1.svg';
import stars05 from './assets/stars-0-5.svg';
import stars0  from './assets/stars-0.svg';

export default class PosterTile extends React.Component {

  constructor() {

    super();

    // assign stars image by rating
    this.starsImgs = {
      5:   stars5,
      4.5: stars45,
      4:   stars4,
      3.5: stars35,
      3:   stars3,
      2.5: stars25,
      2:   stars2,
      1.5: stars15,
      1:   stars1,
      0.5: stars05,
      0:   stars0,
    };

  }

  componentWillMount() {

    const page = this.props.data.page;
    const pageItem = this.props.data.pageItem;
    const delay = 0.25 + (0.05*pageItem);

    this.styles = {
      animationDelay: delay + 's'
    }

    this.width = 185;
    this.height = 278;
    if (this.props.data.width) {
      this.width = this.props.data.width;
    }
    if (this.props.data.height) {
      this.height = this.props.data.height;
    }

  }

  componentDidMount() {

    // get component element
    const compElem = $(ReactDOM.findDOMNode(this));

    // get layers element
    const layersElem = compElem
      .children('a.PosterTile__link')
      .children('div.PosterTile__atv-img-wrapper')
      .children('div.PosterTile__atv-img')
      .children().eq(0);

    // get stars element
    const starsElem = layersElem
      .children().eq(1)
      .children().eq(1);

    // move stars element up one level
    layersElem.append(starsElem);

    // fade out stars
    starsElem.fadeOut(0);

    // set event handelers
    compElem.hover(
      // fade in stars on hover-in
      () => starsElem.fadeIn(0),
      // fade out stars on hover-out
      () => starsElem.fadeOut(100));

  }

  render() {

    const layers = []
    if (this.props.data.img) {
      layers.push(this.props.data.img);
    }
    if (this.props.data.rating || this.props.data.rating === 0) {
      layers.push(this.starsImgs[this.props.data.rating]);
    }

    return (
      <div class={classNames('PosterTile', {'PosterTile--clickable': this.props.data.clickable})} style={this.styles}>
        <Link class="PosterTile__link" to={this.props.data.to}>
          <div class="PosterTile__atv-img-wrapper">
            <AtvImg
              layers={layers}
              staticFallback={this.props.data.img}
              isStatic={false}
              className={'PosterTile__atv-img'}
              style={{ width: this.width, height: this.height }} />
          </div>
        </Link>
        <div class="PosterTile__info">
          <div class="PosterTile__title-wrapper">
            <div class="PosterTile__title">{this.props.data.title}</div>
          </div>
        </div>
      </div>
    );
  }

}
