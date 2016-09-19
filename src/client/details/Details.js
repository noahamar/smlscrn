import classNames from 'classnames/bind';
import React from 'react';
import Helmet from 'react-helmet';
import TD from 'react-toggle-display';
import parseDomain from 'parse-domain';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

import * as actionCreators from './Details-actionCreators';
import * as actionTypes from './Details-actionTypes';

import styles from './Details.styl';
import BackdropGallery from './components/BackdropGallery/BackdropGallery';
import GitHubBanner from '../common/components/GitHubBanner/GitHubBanner';
import PosterTile from '../common/components/PosterTile/PosterTile';

const cx = classNames.bind(styles);

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
      'HBO',
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
      'CC.com',
    ]
  }

  componentWillMount() {
    this.bound = bindActionCreators(actionCreators, this.props.dispatch);
  }

  componentDidMount() {
    if (!this.props.details.isFetching) {
      this.props.dispatch(actionCreators.fetchMediaItem('tv', this.props.params.mediaId));
    }
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
      <div className={cx('Details')}>

        <Helmet title="Smlscrn - Details"></Helmet>

        <div className={cx('Details__top-wrapper')}>

          <BackdropGallery 
            imgs={item.backdropImgs} 
            isFetching={this.props.details.isFetching} />

          <Link to="/">
            <div className={cx('Details__back-button')}>
              <div className={cx('Details__back-button-arrow')}></div>
            </div>
          </Link>

          <div className={cx('Details__top-info-wrapper')}>
            <div className={cx('Details__content-container', 'Details__top-info-container')}>
              <div className={cx('Details__title')}>{item.title}</div>
              <div className={cx('Details__subtitle')}>
                <div className={cx('Details__stars', 'Details__stars--grey')}>
                  <div className={cx('Details__stars', 'Details__stars--orange')} style={{width: (item.score*20)+"%"}}></div>
                </div>
                <div className={cx('Details__seasons-episodes')}>
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
                <a className={cx('Details__watch-button', 'Details__watch-button--enabled')} href={item.url}>Watch on {domain}</a>
              </TD>
              <TD if={Boolean(!item.url)}>
                <div className={cx('Details__watch-button', 'Details__watch-button--disabled')}>Watch info unavailable</div>
              </TD>
              <div className={cx('Details__poster-tile')}>
                <PosterTile data={{width: 224, height: 336, clickable: false, img: item.img}} />
              </div>
            </div>
          </div>

          <GitHubBanner />

        </div>

        <div className={cx('Details__bottom-wrapper')}>
          <div className={cx('Details__content-container')}>

            <div className={cx('Details__facts')}>
              <TD if={Boolean(item.genres.length)}>
                <div className={cx('Details__fact')}>
                  <div className={cx('Details__fact-label')}>Genre</div>
                  <div className={cx('Details__fact-value')}>{item.genres.length ? ( item.genres.slice(0, 2).join(', ') ) : ''}</div>
                </div>
              </TD>
              <TD if={Boolean(item.runtime)}>
                <div className={cx('Details__fact')}>
                  <div className={cx('Details__fact-label')}>Runtime</div>
                  <div className={cx('Details__fact-value')}>{item.runtime} min{ (item.runtime && item.runtime > 1) ? 's' : '' }</div>
                </div>
              </TD>
              <TD if={Boolean(item.network)}>
                <div className={cx('Details__fact')}>
                  <div className={cx('Details__fact-label')}>Network</div>
                  <div className={cx('Details__fact-value')}>{item.network}</div>
                </div>
              </TD>
              <TD if={Boolean(item.releaseDate)}>
                <div className={cx('Details__fact')}>
                  <div className={cx('Details__fact-label')}>Released</div>
                  <div className={cx('Details__fact-value')}>{item.releaseDate}</div>
                </div>
              </TD>
            </div>

            <div className={cx('Details__overview')}>
              {item.overview}
            </div>

          </div>
        </div>

      </div>
    );
  }

}
