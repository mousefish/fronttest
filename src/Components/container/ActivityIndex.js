import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import LocationOn from "material-ui-icons/LocationOn";
import MonetizationOn from "material-ui-icons/MonetizationOn";

import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import StarHalf from "material-ui-icons/StarHalf";

import Person from "material-ui-icons/Person";

import travel from "../../Assets/Images/test.jpg";

import Card, { CardHeader, CardMedia, CardContent } from "material-ui/Card";

import List from "material-ui/List";
import Slide from "material-ui/transitions/Slide";

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

  icon: {
    width: 15,
    height: 15,
    verticalAlign: "-2px"
  },

  iconHeart:{
    width: 12,
    height: 12,
    verticalAlign: "-2px"
  },


  // themeBar: {
  //   position: "absolute",
  //   bottom: 0,
  //   width: "100%",
  //   height: "18%",
  //   lineHeight:2,
  //   paddingLeft:20,
  //   color: "#fff",
  //   backgroundColor: "rgba(0,0,0,0.6)",
  //   fontSize: "1.5rem",
  //   fontWeight:"bold",
  //   letterSpacing:1.3
  // },

  budgetBox: {
    position: "absolute",
    width: 60,
    height: 60,
    lineHeight: 4.3,
    textAlign: "center",
    fontWeight: "bold",
    left: 17,
    top: 10,
    color: "#fff",
    borderRadius: "50%",
    backgroundColor: "#03A9F4"
  },



  lineWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems:"flex-start",
  }
});

class ActivityIndex extends Component {
  renderService(services) {
    const { icon }= this.props.classes;
    return services.map(service => {
      return (
        <span style={{ marginRight: 6 }} key={service}>
          <LocalOffer className={icon} />
          &nbsp;{service}
        </span>
      );
    });
  }

  renderStar(num) {
    const { icon } = this.props.classes;
    const starWrapper = [];

    for (let i = 0; i < 5; i++) {
      if (num - i > 0 && num - i < 1) {
        starWrapper[i] = <StarHalf key={i} className={icon} />;
      } else if (i < num) {
        starWrapper[i] = <Star key={i} className={icon} />;
      } else {
        starWrapper[i] = <StarBorder key={i} className={icon} />;
      }
    }

    return starWrapper;
  }



  renderItems() {
    const classes = this.props.classes;
    const { activityData } = this.props;

    return _.map(activityData, item => {
      return (
        <Link to={`/activity/${item.id}`} className="unlink" key={item.id}>
          <Card className="card" style={{ borderRadius: 10 }}>
            <CardMedia className={classes.media} image={travel} title="travel">
              <div className={classes.budgetBox}>¥{item.budget}</div>
            </CardMedia>
            <CardContent style={{ color: "#757575" }}>
              <h3 style={{ fontWeight: "bold" }}>{item.theme}</h3>
              <div className={classes.lineWrapper}>
                <div>
                  <LocationOn className={classes.icon} /> {item.location}
                </div>
                <div>
                  {this.renderStar(item.averageScore)} &nbsp;{item.numOfRater}{" "}
                  人评价
                </div>
              </div>

              <div className={classes.lineWrapper}>
                <div>
                  <Person className={classes.icon} />
                  &nbsp;{item.username}
                </div>
                <div>
                  {item.likes} 人收藏
                </div>
              </div>
              <div>{this.renderService(item.services)}</div>
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