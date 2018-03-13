import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./Pages/404Page";
import SignupWizard from "./Components/container/SignupWizard";
import { ToastContainer } from "react-toastify";
import Button from "material-ui/Button";
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
import UserActivities from "./Pages/UserActivities";
import EditActivityPanel from "./Pages/EditActivityPanel";

import FriendComments from "./Pages/FriendComments";

import Wish from "./Components/container/Wish";

import OpenPage from "./Pages/OpenPage";
import Recommendation from "./Pages/Recommendation";

import MyAccount from "./Pages/MyAccount";
import MyMessage from "./Pages/MyMessage";
import PrivateBasicInfo from "./Pages/PrivateBasicInfo";
import PrivateFavorites from "./Pages/PrivateFavorites";

import RatingIndex from "./Pages/RatingIndex";

import AddActivity from "./Pages/AddActivity/AddActivity";
import AddWish from "./Pages/AddWish/AddWish";
import Activity from "./Pages/Activity";
import PublicProfile from "./Pages/PublicProfile";

import RequireAuth from "./HOC/RequireAuth";
import ActivityWishPanel from "./Pages/ActivityWishPanel";

import LocationSearch from "material-ui-icons/LocationSearching";
import Favorite from "material-ui-icons/FavoriteBorder";
import CardGiftcard from "material-ui-icons/CardGiftcard";

import ChatBubbleOutline from "material-ui-icons/ChatBubbleOutline";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import UserFavorite from "material-ui-icons/Favorite";
import Contacts from "material-ui-icons/Contacts";



// import { connect } from "react-redux";
// import * as actions from "./Actions";

const styleSheet = {
  root: {
    width: "100%",
    bottom: 0,
    inlineHeight: 1,
    position: "fixed",
    zIndex: 1000
    // border:"1px solid red",
  },
  icon: {
    display: "block"
  },
  broot: {
    minWidth: 60
  },

  bottomBtn: {
    position: "fixed",
    bottom: 0,
    right: 0,
    height: 58,
    // border: "1px solid red",
    borderRadius: 0,
    color: "#fff",
    width: "50%",
    marginRight: 0,
    fontSize: "1.2rem"
  },
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
      popup: false,
      sub_value: null
    };
  }

  // componentDidMount() {
  //   this.props.fetchActivityData();
  // }

  handleMainChange(event, main_value) {
    // console.log("main_value", main_value);
    this.setState({ main_value });
    if (main_value === 0) {
      this.props.history.push("/recommendation");
    } else if (main_value === 1) {
      this.props.history.push("/activity");
    } else if (main_value === 2) {
      this.props.history.push("/message");
    } else if (main_value === 3) {
      this.props.history.push("/my");
    }
  }

  handleSubChange(event, sub_value) {
    // console.log("sub_value", sub_value);
    this.setState({ sub_value });
    if (sub_value === 0) {
      this.props.history.push("/myFavorites");
    } else if (sub_value === 1) {
    } else if (sub_value === 2) {
    } else if (sub_value === 3) {
    }
  }

  testdir() {
    console.log("change dir");
    alert("change dir");
    //   getFramework7().mainView.router.loadPage('/home/');
  }

  renderBottomNav() {
    const { main_value, sub_value } = this.state;
    const { classes } = this.props;
    const { pathname } = this.props.history.location;
    if (pathname.includes("/editActivity/")) {
      return null;
    }
    if (pathname.includes("/activity/")) {
      return (
        <span>
        <BottomNavigation
          value={sub_value}
          onChange={this.handleSubChange.bind(this)}
          showLabels
        >

           <BottomNavigationButton
            classes={{ icon: classes.icon, root: classes.broot}}
            label="我的收藏"
            icon={<UserFavorite />}
            style={{position:"fixed", left:0}}
          />

          <BottomNavigationButton
            classes={{ icon: classes.icon, root: classes.broot}}
            style={{position:"fixed",left:80}}
            label="联系携U行"
            icon={<Contacts />}
          />

        </BottomNavigation>
         <Button
            style={{ backgroundColor: "#1976D2" }}
            raised
            className={classes.bottomBtn}
          >
            我有兴趣
          </Button>
          </span>
      );
    }

    return (
      <BottomNavigation
        value={main_value}
        onChange={this.handleMainChange.bind(this)}
        showLabels
      >
        <BottomNavigationButton
          style={{ marginLeft: 5 }}
          classes={{ icon: classes.icon, root: classes.broot }}
          label="推荐"
          icon={<CardGiftcard />}
        />

        <BottomNavigationButton
          style={{ marginLeft: 5 }}
          classes={{ icon: classes.icon, root: classes.broot }}
          label="找活动"
          icon={<LocationSearch />}
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
            <Route exact path="/" component={RequireAuth(Recommendation)} />
            <Route exact path="/openPage" component={OpenPage} />
            <Route exact path="/recommendation" component={RequireAuth(Recommendation)} />
            <Route exact path="/activity" component={RequireAuth(TripMain)} />
            <Route exact path="/trip" component={Home} />

            <Route exact path="/wish" component={RequireAuth(WishMain)} />
            <Route exact path="/my" component={RequireAuth(MyAccount)} />
            <Route
              exact
              path="/myBasicInfo"
              component={RequireAuth(PrivateBasicInfo)}
            />
            <Route
              exact
              path="/myFavorites"
              component={RequireAuth(PrivateFavorites)}
            />

            <Route exact path="/message" component={MyMessage} />
            <Route
              exact
              path="/addActivity"
              component={RequireAuth(AddActivity)}
            />
            <Route exact path="/addWish" component={RequireAuth(AddWish)} />

            <Route exact path="/searchPanel" component={RequireAuth(SearchPanel)} />
            <Route exact path="/searchResult" component={RequireAuth(SearchResult)} />

            <Route exact path="/story/:userId" component={RequireAuth(Story)} />
            <Route
              exact
              path="/userActivities/:userId"
              component={RequireAuth(UserActivities)}
            />
            <Route
              exact
              path="/editActivity/:activityId"
              component={RequireAuth(EditActivityPanel)}
            />
            <Route exact path="/friendComments" component={FriendComments} />
            <Route exact path="/activityWish" component={RequireAuth(ActivityWishPanel)} />
            <Route exact path="/activity/:activityId" component={RequireAuth(Activity)} />
            <Route exact path="/wish/:wishId" component={RequireAuth(Wish)} />
            <Route exact path="/user/:userId" component={RequireAuth(PublicProfile)} />
            <Route
              exact
              path="/ratingIndex/:activityId"
              component={RequireAuth(RatingIndex)}
            />

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