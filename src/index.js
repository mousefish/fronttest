//entry point
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './Reducers'
import {BrowserRouter} from 'react-router-dom'
import setAuthorizationToken from './Utlity/setAuthorizationToken'
import jwtDecode from 'jwt-decode'
import {setAuthUser} from './Actions/authActions'
import {Framework7App} from 'framework7-react'
import routerManage from './Router/routerManage'
import HomePageNew from './Pages/HomePageNew'
import TestMain from './Pages/TestMain'
import TabNav from './Pages/TabNav'
import Tab1Content from './Pages/tab1content'
import Tab2Content from './Pages/tab2content'
import Tab3Content from './Pages/tab3content'
//this componet is used for redux fire fox debug, if chrome need to have other configuration,
//development only, disable it in production

// import materialize css library
import 'materialize-css/dist/css/materialize.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create redux store in root
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

if(localStorage.jwtToken)
{
setAuthorizationToken(localStorage.jwtToken)
store.dispatch(setAuthUser(jwtDecode(localStorage.jwtToken)))
}

let framework7;

 export const getFramework7 = () => framework7;

//render to root
ReactDOM.render(
  <Provider store={store}>
   <Framework7App onFramework7Init={f7 => framework7 = f7}   themeType="material">
     <BrowserRouter>
  <App />
  </BrowserRouter>
 </Framework7App>
  </Provider>
, document.getElementById('root'));
//registerServiceWorker();
