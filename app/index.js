"use strict";

import React  from 'react';
import { Router, Route, browserHistory} from 'react-router'
import ReactDOM from 'react-dom';
import InitialiseActions from './js/actions/initialiseActions';
import App from './js/App'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
  , document.getElementById('app'));

  InitialiseActions.initApp();
