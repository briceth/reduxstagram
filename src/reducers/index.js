import { combineReducers } from 'redux';

//why does that??
import { routerReducer } from 'react-router-redux';

import PhotoGrid from './PhotoGridReducer'

const rootReducer = combineReducers({
  PhotoGrid,
  routing: routerReducer
});

export default rootReducer;
