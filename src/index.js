import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';


import { Provider } from 'react-redux'

import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router
  , document.querySelector('.container'));
