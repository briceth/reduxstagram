import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import  { browserHistory } from 'react-router'

//import the root reducer
import rootReducer from './reducers/index'

import PhotoGrid from './data/courses'
import Comments from './data/comments'


//create an object for the default data
const defaultState = {
  PhotoGrid,
  Comments
}

const store = createStore(rootReducer, defaultState)


//what does that does?
export const history = syncHistoryWithStore(browserHistory, store)

export default store
