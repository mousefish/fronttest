import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";

import SkipPreviousIcon from "material-ui-icons/SkipPrevious";
import PlayArrowIcon from "material-ui-icons/PlayArrow";
import SkipNextIcon from "material-ui-icons/SkipNext";
import Schedule from "material-ui-icons/Schedule";
import travel from "../../Assets/Images/sichuan.jpg";
import Chip from "material-ui/Chip";


import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import LocationCity from "material-ui-icons/LocationCity";
import LocationOn from "material-ui-icons/LocationOn";
import AttachMoney from "material-ui-icons/AttachMoney";
import dummyWishData from './dummyWishData.json';

const styleSheet = {
  card: {
    width: "100%",
    marginBottom: 1,
    margin: "auto",
  },

};
class ListWish extends Component {
  renderItems() {
    return dummyWishData.map((item) => {
      return (
        <ListItem style={{ padding: 1, paddingBottom: -3, boxShadow:'none' }}>
          <div style={{
            width: "100%"
             }}>
            <div
              style={{
                fontSize: 18,
                marginBottom: 5,
                marginTop: 10
              }}
            >
              <LocationCity
                style={{ width: 18, height: 18, verticalAlign: "middle" }}
              />{item.wish}
            </div>

            <div
              style={{
                fontSize: 15,
                lineHeight: 1.9
              }}
            >
              <Schedule
                style={{ width: 16, height: 16, verticalAlign: "-2px" }}
              />{" "}
              {item.date} 出发
            </div>

            <div
              style={{
                fontSize: 15,
                lineHeight: 1.9
              }}
            >
              <LocationOn
                style={{ width: 15, height: 15, verticalAlign: "-1px" }}
              />{" "}
              {item.destination}
            </div>

            <div
              style={{
                fontSize: 15,
                lineHeight: 1.9
              }}
            >
              <AttachMoney
                style={{ width: 15, height: 15, verticalAlign: "-2px" }}
              />{" "}
              {item.budget}/天
            </div>

            <div
              style={{
                color: "white",
                fontSize: 15,
                lineHeight: 1.9,
                textAlign: "center",
                backgroundColor: "#1d86c9",
                marginBottom: 5,
              }}
            >
              接单{item.responses}人
            </div>
          </div>
        </ListItem>
      );
    });
  }
  render() {
    const classes = this.props.classes;

    return (
      <div>
        <List style={{ borderTop: "2px solid #b3b3b3"}}>{this.renderItems()}</List>
      </div>
    );
  }
}

export default withStyles(styleSheet)(ListWish);