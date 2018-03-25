import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/sagas';
import { applyValidators } from './components/Forms/Utility/Validator';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reducers } from './store/reducers';

import './index.css';
import App from './App';

// import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

// Saga construction
const sagaMiddleware = createSagaMiddleware();

// Setup for redux dev tools, wrapping the apply middleware function call
let composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

// Saga action watchers
sagaMiddleware.run(rootSaga);

// Attempting to force an app reload due to the index hash changing doesn't work when the
// service worker intercepts the request and loads a previous version of the app!
unregister();

// Apply additional configuration to redux validators
applyValidators();

// Application setup
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement);
  
// registerServiceWorker();