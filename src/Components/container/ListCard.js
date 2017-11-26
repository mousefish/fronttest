import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import SkipPreviousIcon from "material-ui-icons/SkipPrevious";
import PlayArrowIcon from "material-ui-icons/PlayArrow";
import SkipNextIcon from "material-ui-icons/SkipNext";
import Schedule from "material-ui-icons/Schedule";
import LocationOn from "material-ui-icons/LocationOn";
import MonetizationOn from "material-ui-icons/MonetizationOn";
import FavoriteBorder from "material-ui-icons/FavoriteBorder";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import Person from "material-ui-icons/Person";

import travel from "../../Assets/Images/sichuan.jpg";
import Chip from "material-ui/Chip";
import Button from "material-ui/Button";
import { green } from "material-ui/colors";
import classnames from "classnames";
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import blue from "material-ui/colors/blue";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

import dummyData from "./dummyTravelData.json";

const styleSheet = {
  card: {
    width: "100%",
    marginBottom: 30,
    margin: "auto",
    boxShadow: "none",
    border: "1px solid #f2f2f2",
    position: "relative"
  },

  media: {
    height: 204,
    position: "relative"
  },

  avatar: {
    backgroundColor: blue[500]
  },

  icon: {
    width: 15,
    height: 15,
    verticalAlign: "-2px"
  }
};

class ListCard extends Component {

  renderStar(nums) {
    const icon = this.props.classes.icon;

    var starWrapper = [];
    for (let i = 0; i < nums; i++) {
      starWrapper.push(<Star className={icon} />);
    }
    return starWrapper;
  }
  renderItems() {
    const classes = this.props.classes;
    return dummyData.map(item => {
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="tour guide" className={classes.avatar}>
                C
              </Avatar>
            }
            title={item.name}
            subheader={item.title}
          />
          <CardMedia className={classes.media} image={travel} title="travel">
            <span
              style={{
                position: "absolute",
                right: "10",
                top: "10",
                color: "#fff"
              }}
            >
              <LocationOn
                className={classes.icon}
                style={{ color: "#fff" }}
              />{" "}
              中国 成都
            </span>
            <span
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: "15%",
                padding: 5,
                color: "#fff",
                backgroundColor: "rgba(0,0,0,0.6)"
              }}
            >
              {item.theme}
            </span>
          </CardMedia>
          <CardContent>
            <div
              style={{
                marginBottom: 10
              }}
            >
              <div style={{ float: "left" }}>
                <MonetizationOn
                  style={{ width: 15, height: 15, verticalAlign: "-2px" }}
                />{" "}
                &nbsp;{item.price}
              </div>
              <div style={{ float: "right" }}>
                {this.renderStar(item.stars)}
                &nbsp;{item.comments}
              </div>
              <div style={{ clear: "both" }} />
            </div>

            <div style={{ marginBottom: 10 }}>
              <span style={{ marginRight: 10 }}>
                <LocalOffer className={classes.icon} />
                &nbsp;{item.service[0]}
              </span>
              <span>
                <LocalOffer className={classes.icon} />
                &nbsp;{item.service[1]}
              </span>
            </div>
          </CardContent>

          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      );
    });
  }

  render() {
    return <List>{this.renderItems()}</List>;
  }
}

export default withStyles(styleSheet)(ListCard);