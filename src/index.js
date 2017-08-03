//entry point
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './Store/rootReducer'
import {BrowserRouter} from 'react-router-dom'
import setAuthorizationToken from './Utlity/setAuthorizationToken'
import jwtDecode from 'jwt-decode'
import {setAuthUser} from './Actions/authActions'
import {Framework7App} from 'framework7-react'
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

if(localStorage.jwtToken)
{
setAuthorizationToken(localStorage.jwtToken)
store.dispatch(setAuthUser(jwtDecode(localStorage.jwtToken)))
}

//render to root
ReactDOM.render(
  <Provider store={store}>
   <Framework7App themeType="ios">
   <div style={{overflow: 'auto'}}>
  <App />
  </div>
 </Framework7App>
  </Provider>
, document.getElementById('root'));
//registerServiceWorker();
