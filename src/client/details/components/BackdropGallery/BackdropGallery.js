import $ from 'jquery';
import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import './BackdropGallery.styl';

export default class BackdropGallery extends React.Component {

  constructor(props) {

    // inhertiate from React.Component
    super();

  }

  componentWillMount() {

    // set flag when about to mount
    this.isMount = true;

  }

  componentWillUnmount() {

    // change flag when about to unmount
    this.isMount = false;

  }

  componentDidMount() {

    // get component element
    this.compElem = $(ReactDOM.findDOMNode(this));

    // get wrapper element
    this.wrapper = this.compElem
      .children('div.BackdropGallery__wrapper').eq(0);

    // start animation loop
    this.slideWrapper();

  }

  slideWrapper() {

    // get current element values
    const left = this.wrapper.position().left;
    const width = this.wrapper.width();
    const outerWidth = this.wrapper.outerWidth();
    const compWidth = this.compElem.width();

    // determine how much to move by
    const moveBy = -20;
    const duration = 1000;

    // determine end position of animation
    let leftToAnimate = left + moveBy;

    // determine if near end
    if (left && Math.abs(left) > (width-compWidth-500)) {

      // reset left position
      this.wrapper.css({left: 0});

      // assign end position
      leftToAnimate = moveBy;

    }

    // check if component is still mounted
    if (this.isMount) {

      // check if allowed to animate
      if (this.props.isFetching || !this.props.imgs.length || this.props.imgs.length >= 5) {

        // animate
        this.wrapper.animate(
          {left: leftToAnimate}, 
          duration, 
          'linear', 
          this.slideWrapper.bind(this
        ));

      }

    }

  }

  shuffle(array) {

    // set vars
    let currentIndex = array.length, temporaryValue, randomIndex;

    // while there remain elements to shuffle
    while (0 !== currentIndex) {

      // pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // and swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }

    // return shuffled array
    return array;

  }

  render() {

    // build array of elements based on given img URLs
    const elements = this.props.imgs
      .map((img, i) => {
        return <img key={i} class="BackdropGallery__image" src={img} />;
      });

    // shuffle array of elements
    const elementsShuffled = this.shuffle(elements.slice());

    return (
      <div class="BackdropGallery">
        <div class="BackdropGallery__wrapper">
          { elementsShuffled }
        </div>
        <div class="BackdropGallery__overlay"></div>
      </div>
    );
  }

}
