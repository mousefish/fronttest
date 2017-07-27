//entry point
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './Store/rootReducer'

//this componet is used for redux fire fox debug, if chrome need to have other configuration,
//development only, disable it in production
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create redux store in root
const store = createStore(
rootReducer,
composeEnhancers(
applyMiddleware(thunk),
)
);

//render to root 
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
, document.getElementById('root'));
//registerServiceWorker();
