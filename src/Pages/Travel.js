import React, {Component} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Bottom from '../Components/container/mainBottom'
import TragelMainPage from './TravelMainPage'
import MyUploader from './TestPages'
import UnitSinupPage from '../UnitTest/UnitSinupPage'
import PageNotFound from './404Page'

class Travel extends Component
{


  render()
  {
return(
    <div>
    <Bottom />
    <div>
    <Switch>
    <Route path="/" component={TragelMainPage} />
    <Route path="/test" component={UnitSinupPage} />
    <Route path="/tr/test" component={MyUploader}/>
  {/*unit test used below, production will check env.production to disable*/}
    <Route path="/unitsinuptest" component = {UnitSinupPage} />
    </Switch>
        </div>
    </div>
  );

  }

}

export default Travel;
