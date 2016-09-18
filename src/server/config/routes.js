import axios from 'axios';
import { TMDB_API_KEY } from './config';


/**
 * Routes for express app
 */
export default (app) => {

  app.get('/api/shows', function response(req, res) {

    const tmdbUri = 'http://api.themoviedb.org/3/discover/tv';

    const params = {
      params: {
        api_key: TMDB_API_KEY,
        page: req.query.page,
        sort_by: req.query.sortBy,
        with_genres: req.query.genre
      }
    };

    // console.log('running /api/shows');
    // console.log(tmdbUri);
    // console.log(params);

    axios.get(tmdbUri, params)
      .then(res2 => {
        res.send(res2.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
      });

  });

  app.get('/api/show/:mediaId', function response(req, res) {

    const tmdbUri = `http://api.themoviedb.org/3/tv/${req.params.mediaId}`;

    const params = {
      params: {
        api_key: TMDB_API_KEY,
        append_to_response: 'alternative_titles,credits,images,releases,videos,content_ratings'
      }
    };

    // console.log('running /api/show/:mediaId');
    // console.log(tmdbUri);
    // console.log(params);

    axios.get(tmdbUri, params)
      .then(res2 => {
        res.send(res2.data);
      })
      .catch(err => {
        res.status(err.response.status).send(err.response.data);
      });

  });

};
