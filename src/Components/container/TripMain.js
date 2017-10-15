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
import HotTab from "../Components/container/hotTab";
import HotMaterialCard from "../Components/container/hotMaterialCard";
import Divider from "material-ui/Divider";
import Autocomplete from "react-md/lib/Autocompletes";
import DatePicker from "react-md/lib/Pickers/DatePickerContainer";
import Radio from "react-md/lib/SelectionControls/Radio";

import LocationSearch from "material-ui-icons/LocationSearching";
import Favorite from "material-ui-icons/FavoriteBorder";
import Toys from "material-ui-icons/Toys";
import ChatBubbleOutline from "material-ui-icons/ChatBubbleOutline";


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

  show_popup() {
    this.setState({ popup: true });
  }

  close_popup() {
    this.setState({ popup: false });
  }

  render() {
    const classes = this.props.classes;
    const location = ["北京", "河南", "山西"];
    return (
      <div>
        <Page name="home">
          <Popup
            tabletFullscreen
            style={{ zIndex: 10600 }}
            opened={this.state.popup}
          >
            <div>
              <Button
                onClick={this.close_popup.bind(this)}
                color="black"
                big={true}
                iconMaterial={"clear"}
                style={{ width: "10%" }}
              />
              <div style={{ marginLeft: 30, marginTop: 30 }}>
                <Autocomplete
                  style={{
                    marginRight: 30,
                    width: 300,
                    display: "block",
                    marginBottom: 30
                  }}
                  id="location list"
                  label="请输入目的地,城市,国家"
                  className="md-cell md-cell--4"
                  data={location}
                />
                <DatePicker
                  style={{ width: 300 }}
                  icon={null}
                  id="appointment"
                  label="选择出发时间"
                  className="md-cell"
                />
                <fieldset
                  onChange={this.handleInlineChange.bind(this)}
                  style={{ marginTop: 43, marginLeft: -8 }}
                >
                  <Radio
                    id="inlineRadio1"
                    inline
                    name="inlineRadios"
                    value="A"
                    label="导游活动"
                    checked={this.state.inlineValue === "A"}
                  />
                  <Radio
                    id="inlineRadio2"
                    inline
                    name="inlineRadios"
                    value="B"
                    label="游客需求"
                    checked={this.state.inlineValue === "B"}
                  />
                </fieldset>
                <Button
                  big={true}
                  raised={true}
                  style={{ width: 300, marginTop: 30 }}
                  closePopup={true}
                  bg="pink"
                  color="white"
                >
                  搜索
                </Button>
              </div>
            </div>
          </Popup>
          <div
            style={{
              maxWidth: 800,
              margin: "auto",
              marginBottom: 98,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 20
            }}
          >
            <img
              src={TLogo}
              style={{
                float: "left",
                marginRight: 5,
                width: 50,
                height: 50,
                marginTop: -10
              }}
            />
            <Typography
              type="headline"
              className="u-title-h1"
              gutterBottom
              style={{ marginBottom: 20, marginTop: 10 }}
            >
              <div style={{ display: "inline", color: "#ff2d55" }}>携U行 </div>
              <div style={{ fontSize: 17, display: "inline" }}>我们一起去旅行</div>
            </Typography>
            <Divider style={{ backgroundColor: "#3d9fe7", height: 2 }} />
            <HotTab />
            <ListCard  />
          </div>


          <Fab
            color="pink"
            style={{
              bottom: 110,
              width: 40,
              height: 40,
              right: 30,
              backgroundColor: "#3d9fe7"
            }}
          >
            <Icon icon="icon-plus" />
          </Fab>

          <Fab
            color="pink"
            style={{
              bottom: 60,
              width: 40,
              height: 40,
              right: 30,
              backgroundColor: "#16c53d"
            }}
            onClick={this.show_popup.bind(this)}
          >
            <Icon material="search" />
          </Fab>
        </Page>
      </div>
    );
  }
}

export default withStyles(styleSheet)(TripMain);