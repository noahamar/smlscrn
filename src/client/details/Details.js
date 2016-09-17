import classNames from 'classnames';
import React from 'react';
import Helmet from 'react-helmet';
import TD from 'react-toggle-display';
import parseDomain from 'parse-domain';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

import * as actionCreators from './Details-actionCreators';
import * as actionTypes from './Details-actionTypes';

import '../common/Common.styl';
import './Details.styl';
import BackdropGallery from './components/BackdropGallery/BackdropGallery';
import GitHubBanner from '../common/components/GitHubBanner/GitHubBanner';
import PosterTile from '../common/components/PosterTile/PosterTile';

@connect((store) => {
  return {
    details: store.details,
  };
})
export default class Details extends React.Component {

  constructor() {
    super();
    this.popularNetworks = [
      'CBS',
      'NBC',
      'ABC',
      'Fox',
      'Univision',
      'ESPN',
      'TBS',
      'USA Network',
      'Disney',
      'Fox News',
      'CW',
      'Discovery',
      'History',
      'HGTV',
      'AMC',
      'Telemundo',
      'Adult Swim',
      'FX',
      'Food Network',
      'Lifetime',
      'Nick At Nite',
      'Syfy',
      'ABCFamily',
      'A&E',
      'TLC',
      'Hallmark Channel',
      'Bravo',
      'SpikeTV',
      'Comedy Central',
      'FXX',
    ]
  }

  componentWillMount() {
    this.props.dispatch(actionCreators.fetchMediaItem('tv', this.props.params.mediaId));
    this.bound = bindActionCreators(actionCreators, this.props.dispatch);
  }

  processShowDomainName(url) {
    let output = '';
    const parsedUrl = parseDomain(url);
    if (parsedUrl && parsedUrl.domain && parsedUrl.tld) {
      output = parsedUrl.domain + '.' + parsedUrl.tld
      const matchedPN = this.popularNetworks
        .find((val) => {
          const matchVal = val.replace(' ', '').toLowerCase();
          if (output.indexOf(matchVal) !== -1) {
            return true
          }
        });
      if (matchedPN) {
        output = output.replace(
          matchedPN.replace(' ', '').toLowerCase(),
          matchedPN.replace(' ', ''));
      } else {
        output = output.charAt(0).toUpperCase() + output.slice(1);
      }
    }
    return output;
  }

  render() {

    const item = this.props.details.mediaItem;
    const domain = this.processShowDomainName(item.url);

    return (
      <div class="Details">

        <Helmet title="Smlscrn - Details"></Helmet>

        <div class="Details__top-wrapper">

          <BackdropGallery 
            imgs={item.backdropImgs} 
            isFetching={this.props.details.isFetching} />

          <Link to="/">
            <div class="Details__back-button">
              <div class="Details__back-button-arrow"></div>
            </div>
          </Link>

          <div class="Details__top-info-wrapper">
            <div class="Details__content-container Details__top-info-container">
              <div class="Details__title">{item.title}</div>
              <div class="Details__subtitle">
                <div class="Details__stars Details__stars--grey">
                  <div class="Details__stars Details__stars--orange" style={{width: (item.score*20)+"%"}}></div>
                </div>
                <div class="Details__seasons-episodes">
                  <TD if={Boolean(item.numSeasons)}>
                    <span>{item.numSeasons} season{ (item.numSeasons && item.numSeasons > 1) ? 's' : '' }</span>
                  </TD>
                  <TD if={Boolean(item.numSeasons) && Boolean(item.numEpisodes)}>
                    <span> &bull; </span>
                  </TD>
                  <TD if={Boolean(item.numEpisodes)}>
                    <span>{item.numEpisodes} episode{ (item.numEpisodes && item.numEpisodes > 1) ? 's' : '' }</span>
                  </TD>
                </div>
              </div>
              <TD if={Boolean(item.url)}>
                <a class="Details__watch-button Details__watch-button--enabled" href={item.url}>Watch on {domain}</a>
              </TD>
              <TD if={Boolean(!item.url)}>
                <div class="Details__watch-button Details__watch-button--disabled">Watch info unavailable</div>
              </TD>
              <div class="Details__poster-tile">
                <PosterTile data={{width: 224, height: 336, clickable: false, img: item.img}} />
              </div>
            </div>
          </div>

          <GitHubBanner />

        </div>

        <div class="Details__bottom-wrapper">
          <div class="Details__content-container">

            <div class="Details__facts">
              <TD if={Boolean(item.genres.length)}>
                <div class="Details__fact">
                  <div class="Details__fact-label">Genre</div>
                  <div class="Details__fact-value">{item.genres.length ? ( item.genres.slice(0, 2).join(', ') ) : ''}</div>
                </div>
              </TD>
              <TD if={Boolean(item.runtime)}>
                <div class="Details__fact">
                  <div class="Details__fact-label">Runtime</div>
                  <div class="Details__fact-value">{item.runtime} min{ (item.runtime && item.runtime > 1) ? 's' : '' }</div>
                </div>
              </TD>
              <TD if={Boolean(item.rating)}>
                <div class="Details__fact">
                  <div class="Details__fact-label">Rating</div>
                  <div class="Details__fact-value">{item.rating}</div>
                </div>
              </TD>
              <TD if={Boolean(item.network)}>
                <div class="Details__fact">
                  <div class="Details__fact-label">Network</div>
                  <div class="Details__fact-value">{item.network}</div>
                </div>
              </TD>
            </div>

            <div class="Details__overview">
              {item.overview}
            </div>

          </div>
        </div>

      </div>
    );
  }

}
