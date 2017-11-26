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
import BannerSlider from "../Components/container/mainBannerSlider";

import NowPlayingCard from "../Components/container/MaterialCard";
import ListCard from "../Components/container/ListCard";
import SearchBar from "../Components/container/searchBar";
import TabSelect from "../Components/container/tabSelect";
import { Page } from "framework7-react";
import { Popup, Button, Fab, Icon } from "framework7-react";
import PopupSearch from "../Components/container/popupSearch";
import Typography from "material-ui/Typography";
import TLogo from "../Assets/Images/logo.jpg";
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

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"]
  }
});

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
  }
};

class TripMain extends Component {
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
        <Page name="home">
          <PopupSearch
            popup={this.state.popup}
            close_popup={() => this.setState({ popup: false })}
          />
          <div
            style={{
              width: "90%",
              margin: "auto",
              marginBottom: 98,
              marginTop: 20,
            }}
          >
            <div style={{ textAlign: "center", padding: "10px 0" }}>
              <img
                src={TLogo}
                style={{
                  width: 80,
                  height: 80
                }}
              />
              <span
                style={{
                  marginLeft: "6vw",
                  color: "#666666",
                  fontWeight: "bold",
                  fontSize: 40,
                  verticalAlign: -14
                }}
              >
                携U行
              </span>
            </div>

            <h6
              style={{
                color: "#666666",
                textAlign: "center",
                paddingBottom: 15
              }}
            >
              这是一个有深度的旅游服务平台
            </h6>

            <ListCard />
          </div>

          <SideButton
            onBtnClick={() => {
              this.setState({ popup: true });
            }}
          />
        </Page>
      </div>
    );
  }
}

export default withStyles(styleSheet)(TripMain);