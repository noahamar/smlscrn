import React from 'react';
import classNames from 'classnames/bind';

import styles from './GitHubBanner.styl';

const cx = classNames.bind(styles);

export default class GitHubBanner extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <a className={cx('GitHubBanner')} href="https://github.com/noahamar/smlscrn"></a>
    );
  }

}
