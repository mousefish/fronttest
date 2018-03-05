import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./Pages/404Page";
import SignupWizard from "./Components/container/SignUpWizard";
import { ToastContainer } from "react-toastify";

import LogInSignUp from "./Pages/logInSignUp";

import LoginForm from "./Components/container/LoginForm";
import SearchPanel from "./Components/container/SearchPanel";
import SearchResult from "./Components/container/SearchResult";

import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationButton
} from "material-ui/BottomNavigation";
import Home from "material-ui-icons/Home";

import Person from "material-ui-icons/Person";

// import WebFontLoader from "webfontloader";

import TripMain from "./Pages/TripMain";

import WishMain from "./Pages/WishMain";
import Story from "./Pages/Story";
import FriendComments from "./Pages/FriendComments";

import Wish from "./Components/container/Wish";

import MyAccount from "./Pages/MyAccount";
import MyMessage from "./Pages/MyMessage";
import PrivateBasicInfo from "./Pages/PrivateBasicInfo";

import AddActivity from "./Pages/AddActivity/AddActivity";
import AddWish from "./Pages/AddWish/AddWish";
import Activity from "./Pages/Activity";
import PublicProfile from "./Pages/PublicProfile";

import RequireAuth from "./HOC/RequireAuth";
import ActivityWishPanel from "./Pages/ActivityWishPanel";

import LocationSearch from "material-ui-icons/LocationSearching";
import Favorite from "material-ui-icons/FavoriteBorder";

import ChatBubbleOutline from "material-ui-icons/ChatBubbleOutline";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

// import { connect } from "react-redux";
// import * as actions from "./Actions";

const styleSheet = {
  root: {
    width: "100%",
    bottom: 0,
    inlineHeight: 1,
    position: "fixed",
    zIndex: 1000
  },
  icon: {
    display: "block"
  },
  broot: {
    minWidth: 60
  }
};
// WebFontLoader.load({
//   google: {
//     families: ["Roboto:300,400,500,700", "Material Icons"]
//   }
// });

class App extends Component {
  static propTypes = {
    // router: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      main_value: 0,
      my_value: 0,
      popup: false
    };
  }

  // componentDidMount() {
  //   this.props.fetchActivityData();
  // }

  handleMainChange(event, main_value) {
    this.setState({ main_value });
    if (main_value === 0) {
      this.props.history.push("/");
    } else if (main_value === 1) {
      this.props.history.push("/wish");
    } else if (main_value === 2) {
      this.props.history.push("/message");
    } else if (main_value === 3) {
      this.props.history.push("/my");
    }
  }

  testdir() {
    console.log("change dir");
    alert("change dir");
    //   getFramework7().mainView.router.loadPage('/home/');
  }

  renderBottomNav() {
    const main_value = this.state.main_value;
    const classes = this.props.classes;

    return (
      <BottomNavigation
        value={main_value}
        onChange={this.handleMainChange.bind(this)}
        showLabels
      >
        <BottomNavigationButton
          style={{ marginLeft: 5 }}
          classes={{ icon: classes.icon, root: classes.broot }}
          label="找活动"
          icon={<LocationSearch />}
        />
        <BottomNavigationButton
          classes={{ icon: classes.icon, root: classes.broot }}
          label="心愿单"
          icon={<Favorite />}
        />
        <BottomNavigationButton
          classes={{ icon: classes.icon, root: classes.broot }}
          label="消息"
          icon={<ChatBubbleOutline />}
        />
        <BottomNavigationButton
          classes={{ icon: classes.icon, root: classes.broot }}
          label="我"
          icon={<Person />}
        />
      </BottomNavigation>
    );
  }

  render() {
    const classes = this.props.classes;
    let value = this.state.value > 0 ? this.state.value : value;
    {
      this.testdir.bind(this);
    }
    return (
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={TripMain} />
            <Route exact path="/trip" component={Home} />
            <Route exact path="/home" component={TripMain} />
            <Route exact path="/wish" component={WishMain} />
            <Route exact path="/my" component={MyAccount} />
            <Route exact path="/myBasicInfo" component={RequireAuth(PrivateBasicInfo)} />

            <Route exact path="/message" component={MyMessage} />
            <Route
              exact
              path="/addActivity"
              component={RequireAuth(AddActivity)}
            />
            <Route exact path="/addWish" component={RequireAuth(AddWish)} />

            <Route exact path="/logInSignUp" component={LogInSignUp} />
            <Route exact path="/searchPanel" component={SearchPanel} />
            <Route exact path="/searchResult" component={SearchResult} />

            <Route exact path="/story/:userId" component={Story} />
            <Route exact path="/friendComments" component={FriendComments} />
            <Route exact path="/activityWish" component={ActivityWishPanel} />
            <Route exact path="/activity/:activityId" component={Activity} />
            <Route exact path="/wish/:wishId" component={Wish} />

            <Route exact path="/user/:userId" component={PublicProfile} />

            {/*unit test used below, production will check env.production to disable*/}

            <Route path="/signup" component={SignupWizard} />
            <Route path="/login" component={LoginForm} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <ToastContainer />
        <div className={classes.root}>{this.renderBottomNav()}</div>
      </div>
    );
  }
}
export default withStyles(styleSheet)(withRouter(App));

// export default withStyles(styleSheet)(withRouter(connect(null, actions)(App)));
