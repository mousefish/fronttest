import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from 'lodash';
import { withStyles } from "material-ui/styles";
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
  }
};

class ListCard extends Component {

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
              中国 成都
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
            <div style={{ marginBottom: 6 }}>
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
      );
    });
  }

  render() {
    return <List>{this.renderItems()}</List>;
  }
}

export default withStyles(styleSheet)(ListCard);