import { LOCATION_CHANGE } from 'react-router-redux';

import * as actionTypes from './Details-actionTypes';
import { INITIAL_STATE } from './Details-constants';

export default (state=INITIAL_STATE, action) => {

  switch (action.type) {

    case LOCATION_CHANGE:
      if (action.payload.pathname === '/') {
        state = INITIAL_STATE;
      }
      break;

    case actionTypes.FETCH_MEDIA_ITEM_FULFILLED:

      const res = action.payload;

      if (res.status === 200) {

        const img = res.data.images.posters
          .slice(0, 1)
          .map(item => 'https://image.tmdb.org/t/p/w300'+item.file_path)
          .join('');

        const backdropImgs = res.data.images.backdrops
          .map(item => 'https://image.tmdb.org/t/p/w780'+item.file_path)
          .slice(0, 10);

        const genres = res.data.genres
          .map(item => item.name);

        const runtime = res.data.episode_run_time
          .slice(0, 1)
          .reduce(item => item);

        const rating = res.data.content_ratings.results
          .filter(item => item.iso_3166_1 === 'US')
          .slice(0, 1)
          .map(item => item.rating)
          .join('');

        const network = res.data.networks
          .slice(0, 1)
          .map(item => item.name)
          .join('');

        let releaseDate = '';
        if (res.data.first_air_date) {
          releaseDate = new Date(res.data.first_air_date)
            .getFullYear()
            .toString();
        };

        const mediaItem = {
          id: `tv|${res.data.id}`,
          mediaType: 'tv',
          mediaId: res.data.id,
          backdropImgs: backdropImgs,
          img: img,
          title: res.data.name,
          releaseDate: releaseDate,
          score: Math.round(res.data.vote_average)/2,
          numSeasons: res.data.number_of_seasons,
          numEpisodes: res.data.number_of_episodes,
          url: res.data.homepage,
          genres: genres,
          runtime: runtime,
          rating: rating,
          network: network,
          overview: res.data.overview,
        };

        state = {...state, mediaItem: mediaItem};

      }

      state = {...state, isFetching: false};
      break;

  }

  return state;

}
