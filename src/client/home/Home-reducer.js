import R from 'ramda';
import { LOCATION_CHANGE } from 'react-router-redux';

import * as actionTypes from './Home-actionTypes';
import { INITIAL_STATE } from './Home-constants';

export default (state=INITIAL_STATE, action) => {

  switch (action.type) {

    case LOCATION_CHANGE:
      if (action.payload.pathname === '/') {
        state = {...state, loadType: 'route'};
      }
      break;

    case actionTypes.SET_SCROLL_POSITION:
      state = {...state, scrollPosition: action.payload};
      break;

    case actionTypes.CHANGE_FILTER_SORT_BY:
      state = {
        ...state, 
        ...INITIAL_STATE, 
        selectedGenre: state.selectedGenre, 
        selectedSortBy: action.payload
      };
      break;

    case actionTypes.CHANGE_FILTER_GENRE:
      state = {
        ...state, 
        ...INITIAL_STATE, 
        selectedGenre: action.payload, 
        selectedSortBy: state.selectedSortBy
      };
      break;

    case actionTypes.FETCH_MEDIA_ITEMS_PENDING:
      state = {...state, isFetching: true};
      break;

    case actionTypes.FETCH_MEDIA_ITEMS_ERROR:
      state = {...state, isFetching: false};
      break;

    case actionTypes.FETCH_MEDIA_ITEMS_FULFILLED:

      const res = action.payload;

      if (res.status === 200 && res.data.results) {

        const page = res.data.page;

        const items = res.data.results
          .map((item, i) => {
            return {
              date: Date.now(),
              page: page,
              numInPage: i,
              mediaType: 'tv',
              mediaId: item.id,
              title: item.name,
              poster_path: item.poster_path,
              img: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
              rating: Math.round(item.vote_average)/2
            }})
          .filter(item => item.poster_path)
          .map(R.toPairs);

        state = {
          ...state, 
          loadType: 'fetch',
          date: Date.now(),
          page: page, 
          items: state.items.concat(items)
        };

      }

      state = {...state, isFetching: false};
      break;

    case actionTypes.TOGGLE_MENU:
      state = {...state, isShowMenu: !state.isShowMenu};
      break;

  }

  return state;

}
