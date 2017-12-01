import React, { Component } from "react";
import "../CSS/main.css";
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
import ListWish from "../Components/container/listWish";
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

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"]
  }
});

const styleSheet = {
  wrapper: {
    width: "90%",
    margin: "auto",
    marginBottom: 98,
    marginTop: 20
  }
};

class WishMain extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      popup: false
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  onSwipeLeftListener() {
    console.log("left");
  }
  onSwipeRightListener() {
    console.log("right");
  }

  handleInlineChange(e) {
    this.setState({ inlineValue: e.target.value });
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>

          <PopupSearch
            popup={this.state.popup}
            close_popup={() => this.setState({ popup: false })}
          />

          <div className={classes.wrapper}>
            <Header description="为您提供高质量的旅途，带您行天下" />

            <ListWish />
          </div>

          <SideButton
            onBtnClick={() => {
              this.setState({ popup: true });
            }}
          />

      </div>
    );
  }
}

export default withStyles(styleSheet)(WishMain);