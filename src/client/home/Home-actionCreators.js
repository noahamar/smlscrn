import axios from 'axios';

import * as actionTypes from './Home-actionTypes';
import { SORT_BY_OPTIONS, GENRE_OPTIONS } from './Home-constants';

export const changeFilterSortBy = (sortBy) => {
  return {
    type: actionTypes.CHANGE_FILTER_SORT_BY,
    payload: sortBy
  }
};

export const changeFilterGenre = (genre) => {
  return {
    type: actionTypes.CHANGE_FILTER_GENRE,
    payload: genre
  }
};

export const fetchMediaItems = (sortBy, genre, page) => {

  // console.log(sortBy, genre);

  sortBy = SORT_BY_OPTIONS.find(item => {
      return item.id === sortBy;
    }).tmdbParam;

  genre = GENRE_OPTIONS.find(item => {
      return item.id === genre;
    }).tmdbParam;

  // console.log(sortBy, genre);

  const params = {
    params: {
      page,
      sortBy,
      genre
    }
  };

  return {
    type: actionTypes.FETCH_MEDIA_ITEMS,
    payload: axios.get('/api/shows', params).then(res => {
      console.log(res);
      return res;
    })
  }

};

export const setScrollPosition = (value) => {
  return {
    type: actionTypes.SET_SCROLL_POSITION,
    payload: value
  }
};

export const toggleMenu = () => {
  return {
    type: actionTypes.TOGGLE_MENU
  }
};
