import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Card, { CardHeader, CardMedia, CardContent } from "material-ui/Card";
import LocationOn from "material-ui-icons/LocationOn";
import FavoriteIcon from "material-ui-icons/Favorite";
import AccessTime from "material-ui-icons/AccessTime";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import StarHalf from "material-ui-icons/StarHalf";
import Person from "material-ui-icons/Person";
import List from "material-ui/List";
import Slide from "material-ui/transitions/Slide";
import Stars from "../../Pages/Stars";
import cardBG from "../../Assets/Images/cardBG.png";
import config from "../../config/config";


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  flex: {
    flex: 1
  },
  media: {
    height: 204,
    position: "relative",
    borderRadius: "10px 10px 0 0"
  },

  imgWrapper: {
    position: "absolute",
    opacity: "0.4",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#2196F3",
    opacity: 0.4,
    borderRadius: "10px 10px 0 0"
    // backgroundImage: "linear-gradient(to bottom right, #F7F7F7, #EAFBFF)"
  },

  icon: {
    width: 15,
    height: 15,
    verticalAlign: "-2px"
  },

  iconHeart: {
    width: 12,
    height: 12,
    verticalAlign: "-2px"
  },

  budgetBox: {
    position: "absolute",
    fontWeight: "bolder",
    right: 10,
    bottom: 2,
    color: "#fff",
    fontSize: "1.8rem",
    zIndex: 1000
  },

  content: {
    color: "#757575"
  },

  infoWrapper: {
    // border:"1px solid green",
    display: "flex",
    flexFlow: "column",
    marginBottom: 10,
    alignItems: "flex-start"
  },

  fav: {
    textAlign: "right"
  },

  item: {
    width: "100%",
    fontSize: "1.2rem",
    marginBottom: 6,
    // border:"1px solid red",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between"
  },
  themeStyle: {
    fontWeight: "bold",
    overflow: "auto"
  },
});

class ActivityIndex extends Component {
  renderStarZone(score) {
    const { classes } = this.props;
    if (score > 0) {
      return (
        <div>
          <Stars num={score} pos={true} />
        </div>
      );
    }
  }

  renderFavZone(num) {
    const { classes } = this.props;
    if (num > 0) {
      return (
        <div className={classes.fav}>
          {num} <FavoriteIcon className={classes.icon} aria-label="favorites" />
        </div>
      );
    }
  }

  renderItems() {
    const classes = this.props.classes;
    const { activityData, version } = this.props;
    return _.map(activityData, item => {
      return (
        <Link
          to={`/activity/${item.id}/${version}`}
          className="unlink"
          key={item.id}
        >
          <Card className="card" style={{ borderRadius: 10 }}>
            <CardMedia className={classes.media} image={cardBG} title="travel">
              {" "}
              <div className={classes.imgWrapper} />
              <div className={classes.budgetBox}>¥ {item.budget}</div>
            </CardMedia>
            <CardContent className={classes.content}>
              <h3 className={classes.themeStyle}>{item.theme}</h3>
              <div className={classes.infoWrapper}>
                <div className={classes.item}>
                  <div>
                    <LocationOn className={classes.icon} /> {item.location}
                  </div>
                  <div>{this.renderFavZone(item.likes)} </div>
                </div>
                <div className={classes.item}>
                  <div>
                    <Person className={classes.icon} />
                    &nbsp;{item.username}
                  </div>
                  <div>{this.renderStarZone(item.averageScore)}</div>
                </div>
                <div className={classes.item}>
                  <div>
                    <AccessTime className={classes.icon} /> {item.departdate}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      );
    });
  }

  render() {
    const { fullScreen } = this.props;

    return <List>{this.renderItems()}</List>;
  }
}

export default withStyles(styles)(ActivityIndex);