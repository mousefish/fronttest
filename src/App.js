import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import TragelMainPage from './Pages/TravelMainPage'
import PageNotFound from './Pages/404Page'
import UnitSinupPage from './UnitTest/UnitSinupPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import MyUploader from './Pages/TestPages'
import Travel from './Pages/Travel'
import LoginForm from './Components/container/LoginForm'
import TestMain from './Pages/TestMain'
import CheckAuth from './Utlity/checkAuth'
import TestMaterial from './Pages/TestMaterial'
import 'framework7/dist/css/framework7.material.min.css';
import 'framework7/dist/css/framework7.material.colors.min.css';
import HomePageNew from './Pages/HomePageNew'

class App extends Component {


  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
      <Switch>
      <Route exact path="/" component={TestMaterial} />
      <Route exact path="/trip" component={Home} />
      <Route exact path="/test" component={Travel} />
      <Route exact path="/tr/test" component={MyUploader}/>
      <Route exact path="/maintest" component={TestMain} />
      <Route exact path="/testmaterial" component={TestMaterial} />
        <Route exact path="/home" component={HomePageNew} />
    {/*unit test used below, production will check env.production to disable*/}
      <Route path="/unitsinuptest" component = {UnitSinupPage} />
      <Route path="/login" component = {LoginForm} />
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
