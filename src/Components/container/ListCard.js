import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from "lodash";
import { withStyles } from "material-ui/styles";

import * as actions from "../../Actions";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui-icons/LocationOn";
import MonetizationOn from "material-ui-icons/MonetizationOn";

import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import StarHalf from "material-ui-icons/StarHalf";

import Person from "material-ui-icons/Person";

import travel from "../../Assets/Images/sichuan.jpg";

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

import Slide from "material-ui/transitions/Slide";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PersonProfile from "../../Pages/PersonProfile";

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
    height: 224,
    position: "relative"
  },

  icon: {
    width: 15,
    height: 15,
    verticalAlign: "-2px"
  },

  link: {
    cursor: "pointer",
    color: "#337ab7"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ListCard extends Component {
  state = {
    open: false
  };

  handleClickOpen = name => {
    this.setState({ open: true });
    this.props.fetchProfileData(name);
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  renderService(services) {
    const icon = this.props.classes.icon;

    return services.map(service => {
      return (
        <span style={{ marginRight: 6 }}>
          <LocalOffer className={icon} />
          &nbsp;{service}
        </span>
      );
    });
  }

  renderStar(nums) {
    const icon = this.props.classes.icon;
    const starWrapper = [];

    for (let i = 0; i < 5; i++) {
      if (nums - i > 0 && nums - i < 1) {
        starWrapper[i] = <StarHalf className={icon} />;
      } else if (i < nums) {
        starWrapper[i] = <Star className={icon} />;
      } else {
        starWrapper[i] = <StarBorder className={icon} />;
      }
    }

    return starWrapper;
  }

  handleLikes(itemId) {
    this.props.submitLikes(itemId);
  }

  renderItems() {
    const classes = this.props.classes;
    const { activityData } = this.props;

    return _.map(
      activityData,
      (item) => {
        return (
          <div>
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
              <PersonProfile />
            </Dialog>
            <Card className={classes.card} key={item.id}>
              <CardMedia
                className={classes.media}
                image={travel}
                title="travel"
              >
                <span
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 10,
                    color: "#fff"
                  }}
                >
                  <LocationOn
                    className={classes.icon}
                    style={{ color: "#fff" }}
                  />{" "}
                  {item.location}
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: "12%",
                    padding: 4,
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.6)"
                  }}
                >
                  {item.theme ? item.theme : "城市深度游"}
                </span>
              </CardMedia>
              <CardContent>
                <div
                  style={{
                    marginBottom: 10
                  }}
                >
                  <div style={{ float: "left" }}>
                    <MonetizationOn className={classes.icon} /> &nbsp;{item.budget}
                  </div>
                  <div style={{ float: "right" }}>
                    {this.renderStar(item.stars)}
                  </div>
                  <div style={{ clear: "both" }} />
                </div>

                <div
                  style={{ marginBottom: 10 }}
                  className={classes.link}

                >
                  <Person className={classes.icon} />
                  &nbsp;{item.username}
                </div>

                <div>{this.renderService(item.services)}</div>
              </CardContent>

              <CardActions disableActionSpacing>
                <IconButton
                  aria-label="Add to favorites"
                  onClick={() => {
                    this.handleLikes(item.id);
                  }}
                >
                  <FavoriteIcon />
                  <span>{item.likes}</span>
                </IconButton>
                <IconButton aria-label="Share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        );
      })


  }

  render() {
    return <List>{this.renderItems()}</List>;
  }
}


export default connect(null, actions)(withStyles(styleSheet)(ListCard));