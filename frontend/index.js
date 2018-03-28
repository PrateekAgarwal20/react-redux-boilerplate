// Import frameworks
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

// Import styling

// Create store for redux
const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(logger),
  )
);

// Render the app
render(
  <Root store={store}/>,
  document.getElementById('root')
);
