// index.js is always where the app starts
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers'; 
import rootSaga from './redux/sagas'; 

import App from './components/App/App';

// instance of the middleware
const sagaMiddleware = createSagaMiddleware();

// middleware
const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// redux Store
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList),
);

// runs the sagas
sagaMiddleware.run(rootSaga);

// renders all the information to the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

