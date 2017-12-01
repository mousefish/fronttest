import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import BottomNavigation, {
  BottomNavigationButton
} from "material-ui/BottomNavigation";
import Home from "material-ui-icons/Home";
import Flight from "material-ui-icons/Flight";
import Message from "material-ui-icons/Message";
import Person from "material-ui-icons/Person";
import WebFontLoader from "webfontloader";

import NowPlayingCard from "../Components/container/MaterialCard";
import ListCard from "../Components/container/ListCard";
import SearchBar from "../Components/container/searchBar";
import TabSelect from "../Components/container/tabSelect";

import PopupSearch from "../Components/container/PopupSearch";

import HotMaterialCard from "../Components/container/hotMaterialCard";
import Divider from "material-ui/Divider";
import Autocomplete from "react-md/lib/Autocompletes";
import DatePicker from "react-md/lib/Pickers/DatePickerContainer";
import Radio from "react-md/lib/SelectionControls/Radio";

import LocationSearch from "material-ui-icons/LocationSearching";
import Favorite from "material-ui-icons/FavoriteBorder";
import Toys from "material-ui-icons/Toys";
import ChatBubbleOutline from "material-ui-icons/ChatBubbleOutline";
import SideButton from "./sideButton";
import Header from "../Components/presenter/header";
import Slide from "material-ui/transitions/Slide";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import Button from "material-ui/Button";

import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"]
  }
});

const styles = {
  wrapper: {
    width: "90%",
    margin: "auto",
    marginBottom: 98,
    marginTop: 20
  },

  appBar: {
    position: "relative"
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TripMain extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div style={{ position: "relative" }}>
        <SideButton onClick={this.handleClickOpen} />
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                onClick={this.handleRequestClose}
                aria-label="Close"
              >
                <KeyboardArrowLeft />
              </IconButton>
            </Toolbar>
          </AppBar>
          <PopupSearch handleRequestClose={this.handleRequestClose}/>
        </Dialog>
        <div className={classes.wrapper}>
          <Header description="这是一个有深度的旅游服务平台" />
          <ListCard />
        </div>
      </div>
    );
  }
}

TripMain.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TripMain);