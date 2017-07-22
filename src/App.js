import React, { Component } from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import SubPage from './Pages/subpage'
import Home from './Pages/Home'
import TragelPage from './Pages/Travel'
import Bottom from './Pages/Bottom'

class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <div>
      <Switch>
      <Route exact path="/" component={TragelPage} />
      <Route path="/first" component = {SubPage} />
      <Route path="/travel" component = {TragelPage}/>
      <Route path="/bottom" component = {Bottom} />
      <Route render={()=><h1>404 not found</h1>} />
      </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
