import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { watchLogin, watchRegister, watchDashboard } from './store/sagas';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './store/reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Saga construction
const sagaMiddleware = createSagaMiddleware();

// Setup for redux dev tools, wrapping the apply middleware function call
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

// Saga action watchers
sagaMiddleware.run(watchLogin);
sagaMiddleware.run(watchRegister);
sagaMiddleware.run(watchDashboard);

// Application setup
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement);
  
registerServiceWorker();