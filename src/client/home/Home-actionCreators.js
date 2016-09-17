import axios from 'axios';

import * as actionTypes from './Home-actionTypes';

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
  return {
    type: actionTypes.FETCH_MEDIA_ITEMS,
    payload: axios.get(`/api/shows?page=${page}`).then(res => {
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
