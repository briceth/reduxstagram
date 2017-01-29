import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import PhotoGrid from './PhotoGridReducer'

const rootReducer = combineReducers({
  PhotoGrid,
  routing: routerReducer
});

export default rootReducer;
