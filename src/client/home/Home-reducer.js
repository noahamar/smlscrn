import R from 'ramda';
import { LOCATION_CHANGE } from 'react-router-redux';

import * as actionTypes from './Home-actionTypes';
import * as constants from './Home-constants';

const initialState = {
  scrollPosition: 0,
  isShowMenu: false,
  isFetching: false,
  loadType: null,
  page: 0,
  items: [],
  sortByOptions: constants.SORT_BY_OPTIONS.map(R.toPairs),
  genreOptions: constants.GENRE_OPTIONS.map(R.toPairs),
  selectedSortBy: constants.SELECTED_SORT_BY,
  selectedGenre: constants.SELECTED_GENRE,
};

export default (state=initialState, action) => {

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
        ...initialState, 
        selectedGenre: state.selectedGenre, 
        selectedSortBy: action.payload
      };
      break;

    case actionTypes.CHANGE_FILTER_GENRE:
      state = {
        ...state, 
        ...initialState, 
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

      if (res.status === 200) {

        const page = state.page+1;

        const items = res.data.results
          .map((item, i) => {
            return {
              date: Date.now(),
              page: page,
              numInPage: i,
              mediaType: 'tv',
              mediaId: item.id,
              title: item.name,
              img: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
              rating: Math.round(item.vote_average)/2
            }})
          .map(R.toPairs);

        state = {
          ...state, 
          loadType: 'fetch',
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
