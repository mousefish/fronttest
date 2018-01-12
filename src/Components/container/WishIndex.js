import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui-icons/LocationOn";
import MonetizationOn from "material-ui-icons/MonetizationOn";

import LocalOffer from "material-ui-icons/LocalOffer";
import EventAvailable from "material-ui-icons/EventAvailable";
import Group from "material-ui-icons/Group";

import img from "../../Assets/Images/wish.jpg";
import WishDetails from "./WishDetails";

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

const style = {
  card: {
    width: "100%",
    marginBottom: 30,
    margin: "auto",
    boxShadow: "none",
    border: "1px solid #f2f2f2",
    position: "relative",
    cursor: "pointer"
  },

  media: {
    height: 224,
    position: "relative"
  },

  icon: {
    width: 15,
    height: 15,
    verticalAlign: "-2px"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class WishIndex extends Component {
  state = {
    open: false,
    id: 0,
    location:"",
    departdate:"",
    finishdate:"",
    budget:0,
    services:[]
  };

  handleClickOpen = (id, location, departdate,finishdate,budget,services) => {
    this.setState({
      open: true,
      id,
      location,
      departdate,
      finishdate,
      budget,
      services
       });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleLikes(event, wishId) {
    event.preventDefault();
    event.stopPropagation();
    this.props.sendWishLike(wishId);
  }

  renderService(services) {
    const icon = this.props.classes.icon;

    return services.map(service => {
      return (
        <span style={{ marginRight: 6 }} key={service}>
          <LocalOffer className={icon} />
          &nbsp;{service}
        </span>
      );
    });
  }

  renderItems() {
    const { classes } = this.props;
    const { wishes } = this.props;
    if (!wishes) {
      return <div>loading...</div>;
    }

    return wishes.map(wish => {
      return (
        <div key={wish.id}>
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
            <WishDetails
              id={this.state.id}
              location={this.state.location}
              departdate={this.state.departdate}
              finishdate={this.state.finishdate}
              budget={this.state.budget}
              services={this.state.services}
            />
          </Dialog>

          <Card
            className={classes.card}
            key={wish.id}
            onClick={() => {
              this.handleClickOpen(wish.id, wish.location, wish.departdate,wish.finishdate,wish.budget,wish.services);
            }}
          >
            <CardMedia className={classes.media} image={img} title="wish">
              <span
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  color: "#fff"
                }}
              />
            </CardMedia>
            <CardContent>
              <div
                style={{
                  marginBottom: 6
                }}
              >
                <div style={{ float: "left" }}>
                  <LocationOn className={classes.icon} /> {wish.location}
                </div>
                <div style={{ float: "right" }}>
                  <MonetizationOn className={classes.icon} /> &nbsp;{wish.budget}
                </div>
                <div style={{ clear: "both" }} />
              </div>

              <div style={{ marginBottom: 6 }}>
                <div>
                  <EventAvailable className={classes.icon} />&nbsp;出发日期：{wish.departdate}
                </div>
                <div>
                  <Group className={classes.icon} />&nbsp;结束日期：{" "}
                  {wish.finishdate}
                </div>
              </div>
              <div>{this.renderService(wish.services)}</div>
            </CardContent>
            <CardActions disableActionSpacing>
              <IconButton
                aria-label="Add to favorites"
                onClick={event => {
                  this.handleLikes(event, wish.id);
                }}
              >
                <FavoriteIcon />
                {wish.likes}
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

export default connect(null, actions)(withStyles(style)(WishIndex));
