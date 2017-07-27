import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import TragelMainPage from './Pages/TravelMainPage'
import PageNotFound from './Pages/404Page'
import UnitSinupPage from './UnitTest/UnitSinupPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {


  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
      <Switch>
      <Route exact path="/" component={TragelMainPage} />
      <Route exact path="/trip" component={Home} />
      <Route path="/travel" component = {TragelMainPage}/>
    {/*unit test used below, production will check env.production to disable*/}
      <Route path="/unitsinuptest" component = {UnitSinupPage} />
      <Route component = {PageNotFound} />
      </Switch>
      </div>
    </BrowserRouter>
    <ToastContainer />
    </div>
    );
  }
}

export default App;
