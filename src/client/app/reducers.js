import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import home from '../home/Home-reducer';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  routing,
  home,
});

export default rootReducer;
