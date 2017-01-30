import { combineReducers } from 'redux';

//why does that??
import { routerReducer } from 'react-router-redux';

import PhotoGrid from './PhotoGridReducer'
import Comments from './commentsReducer'

const rootReducer = combineReducers({
  PhotoGrid,
  Comments,
  routing: routerReducer
});

export default rootReducer;
