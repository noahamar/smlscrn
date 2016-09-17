import React from 'react';

import './GitHubBanner.styl';
// import './assets/github-banner.png';

export default class GitHubBanner extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <a class="GitHubBanner" href="https://github.com" target="_blank"></a>
    );
  }

}
