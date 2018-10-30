import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { App } from 'views';
import configureStore from './state/store';

const reduxStore = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
