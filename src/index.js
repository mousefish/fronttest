//entry point
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./Reducers";
import { BrowserRouter } from "react-router-dom";
import { AUTH_USER } from './Actions/types';


import "./CSS/main.css";
import "./CSS/index.css";
import "react-widgets/dist/css/react-widgets.css";
import "./CSS/updated-react-widgets.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//create redux store in root
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


const token = localStorage.getItem('jwtToken');
if(token){
    store.dispatch({type: AUTH_USER});
}

//render to root
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
//registerServiceWorker();