import React, { Component } from 'react';
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom'
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
import {View, Views, Pages, Page, Navbar,Toolbar, Tabs, Tab} from 'framework7-react'
import { withStyles, createStyleSheet } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import Home from 'material-ui-icons/Home';
import Flight from 'material-ui-icons/Flight';
import Message from 'material-ui-icons/Message';
import Person from 'material-ui-icons/Person';
import WebFontLoader from 'webfontloader';
import Tab1Content from './Pages/tab1content'
import {getFramework7} from './index';
import TripMain from './Pages/TripMain'
import WishMain from './Pages/WishMain'
import StoryMain from './Pages/StoryMain'
import LocationSearch from 'material-ui-icons/LocationSearching';
import Favorite from 'material-ui-icons/FavoriteBorder';
import Toys from 'material-ui-icons/Toys';
import ChatBubbleOutline from 'material-ui-icons/ChatBubbleOutline';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

const styleSheet = createStyleSheet({
  root:{
    width: "100%",
    bottom: 0,
    inlineHeight: 1,
    position: 'fixed',
    zIndex: 1000,
  },
  icon:{
    display:'block'
  },
  broot:{
    minWidth: 60
  }
});
WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

class App extends Component {
  constructor()
  {
    super();
    this.state = {
    value: 0,
    popup: false
  };
  }


  handleChange = (event, value) => {
   this.setState({ value });
   if(value==0)
   {
      this.context.router.history.push('/');
   }
   else if(value==1)
   {
    this.context.router.history.push('/wish');
   }
   else
   {
this.context.router.history.push('/story');
   }
 };

 testdir()
 {
   console.log("change dir");
   alert("change dir");
//   getFramework7().mainView.router.loadPage('/home/');
 }

  render() {
    const classes = this.props.classes;
    {this.testdir.bind(this)};
    return (
      <div>
    <Views>
    <View id='main-view' main>
    <Pages>
    <Page style={{position:'fixed'}}>
      <div>
      <Switch>
      <Route exact path="/" component={TripMain} />
      <Route exact path="/trip" component={Home} />
      <Route exact path="/test" component={Travel} />
      <Route exact path="/tr/test" component={MyUploader}/>
      <Route exact path="/maintest" component={TestMain} />
      <Route exact path="/testmaterial" component={TestMaterial} />
      <Route exact path="/home" component={TripMain} />
      <Route exact path="/wish" component={WishMain} />
        <Route exact path="/story" component={StoryMain} />
    {/*unit test used below, production will check env.production to disable*/}
      <Route path="/unitsinuptest" component = {UnitSinupPage} />
      <Route path="/login" component = {LoginForm} />
      <Route component = {PageNotFound} />
      </Switch>
      </div>
    <ToastContainer />

    </Page>
    <div className={classes.root}>
            <BottomNavigation value={this.state.value} onChange={this.handleChange.bind(this)} showLabels>
              <BottomNavigationButton style={{marginLeft: 5}} classes={{icon: classes.icon, root: classes.broot}} label="找活动" icon={<LocationSearch />}></BottomNavigationButton>
            <BottomNavigationButton classes={{icon: classes.icon, root: classes.broot}} label="心愿单" icon={<Favorite />} ></BottomNavigationButton>
              <BottomNavigationButton classes={{icon: classes.icon, root: classes.broot}} label="故事" icon={<Toys />} />
              <BottomNavigationButton classes={{icon: classes.icon, root: classes.broot}} label="消息" icon={<ChatBubbleOutline />} />
                  <BottomNavigationButton classes={{icon: classes.icon, root: classes.broot}} label="我" icon={<Person />} />
            </BottomNavigation>
          </div>

    </Pages>
    </View>
    </Views>

    </div>
    );
  }
}
App.contextTypes = {
  router: PropTypes.object.isRequired
}
export default withStyles(styleSheet)(App);
