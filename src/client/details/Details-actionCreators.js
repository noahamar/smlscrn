import axios from 'axios';

import * as actionTypes from './Details-actionTypes';

export const fetchMediaItem = (mediaType, mediaId) => {
  return {
    type: actionTypes.FETCH_MEDIA_ITEM,
    payload: axios.get(`/api/show/${mediaId}`).then(res => {
      console.log(res);
      return res;
    })
  }
};
