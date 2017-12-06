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
import PersonProfile from '../../Pages/PersonProfile';

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
    verticalAlign: "-2px",
  },

  link: {
    cursor:'pointer',
    color:'#337ab7'
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class ListCard extends Component {
  state = {
    open: false,
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

    var starWrapper = [];
    for (let i = 0; i < nums; i++) {
      starWrapper.push(<Star className={icon} />);
    }
    return starWrapper;
  }

  renderItems() {
    const classes = this.props.classes;
    return _.map(this.props.dummyData, item => {
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
                  <MonetizationOn className={classes.icon} /> &nbsp;{item.price}
                </div>
                <div style={{ float: "right" }}>
                  {this.renderStar(item.stars)}
                  &nbsp;{item.comments}
                </div>
                <div style={{ clear: "both" }} />
              </div>

              <div
                style={{ marginBottom: 10 }}
                className={classes.link}
                onClick={()=>this.handleClickOpen(item.name)}
              >
                <Person className={classes.icon} />
                &nbsp;{item.name}
              </div>

              <div>{this.renderService(item.service)}</div>
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
        </div>
      );
    });
  }

  render() {
    return <List>{this.renderItems()}</List>;
  }
}

export default connect(null, actions)(withStyles(styleSheet)(ListCard));