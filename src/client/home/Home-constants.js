import R from 'ramda';

export const SORT_BY_OPTIONS = [
  {id: 'most-popular', 'tmdbParam': 'popularity.desc', label: 'Most popular'},
  {id: 'highest-rated', 'tmdbParam': 'vote_average.desc', label: 'Highest rated'},
  {id: 'newest', 'tmdbParam': 'first_air_date.desc', label: 'Newest'},
];
export const GENRE_OPTIONS = [
  {id: 'all', 'tmdbParam': '', label: 'All genres'},
  {id: 'action', 'tmdbParam': '28', label: 'Action'},
  {id: 'adventure', 'tmdbParam': '12', label: 'Adventure'},
  {id: 'animation', 'tmdbParam': '16', label: 'Animation'},
  {id: 'comedy', 'tmdbParam': '35', label: 'Comedy'},
  {id: 'crime', 'tmdbParam': '80', label: 'Crime'},
  {id: 'documentary', 'tmdbParam': '99', label: 'Documentary'},
  {id: 'drama', 'tmdbParam': '18', label: 'Drama'},
  {id: 'family', 'tmdbParam': '10751', label: 'Family'},
  {id: 'fantasy', 'tmdbParam': '14', label: 'Fantasy'},
  {id: 'foreign', 'tmdbParam': '10769', label: 'Foreign'},
  {id: 'history', 'tmdbParam': '36', label: 'History'},
  {id: 'horror', 'tmdbParam': '27', label: 'Horror'},
  {id: 'music', 'tmdbParam': '10402', label: 'Music'},
  {id: 'mystery', 'tmdbParam': '9648', label: 'Mystery'},
  {id: 'romance', 'tmdbParam': '10749', label: 'Romance'},
  {id: 'science-fiction', 'tmdbParam': '878', label: 'Science Fiction'},
  {id: 'tv-movie', 'tmdbParam': '10770', label: 'TV Movie'},
  {id: 'thriller', 'tmdbParam': '53', label: 'Thriller'},
  {id: 'war', 'tmdbParam': '10752', label: 'War'},
  {id: 'western', 'tmdbParam': '37', label: 'Western'},
];
export const SELECTED_SORT_BY = SORT_BY_OPTIONS[0].id;
export const SELECTED_GENRE = GENRE_OPTIONS[0].id;
export const INITIAL_STATE = {
  scrollPosition: 0,
  isShowMenu: false,
  isFetching: false,
  loadType: null,
  date: 0,
  page: 0,
  items: [],
  sortByOptions: SORT_BY_OPTIONS.map(R.toPairs),
  genreOptions: GENRE_OPTIONS.map(R.toPairs),
  selectedSortBy: SELECTED_SORT_BY,
  selectedGenre: SELECTED_GENRE,
};
