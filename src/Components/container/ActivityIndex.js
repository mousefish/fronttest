import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Card, { CardHeader, CardMedia, CardContent } from "material-ui/Card";
import LocationOn from "material-ui-icons/LocationOn";
import AccessTime from "material-ui-icons/AccessTime";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import StarHalf from "material-ui-icons/StarHalf";
import Person from "material-ui-icons/Person";
import travel from "../../Assets/Images/test.jpg";
import List from "material-ui/List";
import Slide from "material-ui/transitions/Slide";
import Stars from "../../Pages/Stars";

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

  iconHeart: {
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

  content: {
    color: "#757575"
  },

  infoWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "flex-start"
  },

  fav: {
    textAlign: "right"
  },
  // left:{
  //   border:"1px solid green"
  // },

  // right:{
  //   border:"1px solid red"
  // },

  item: {
    fontSize: "1.2rem",
    marginBottom: 6
    // border:"1px solid red"
  },
  themeStyle: {
    fontWeight: "bold",
    overflow: "auto"
  }
});

class ActivityIndex extends Component {
  renderStarZone(score) {
    const { classes } = this.props;
    if (score > 0) {
      return (
        <div className={classes.item}>
          <Stars num={score} />
        </div>
      );
    }
  }

  renderFavZone(num) {
    const { classes } = this.props;
    if (num > 0) {
      return (
        <div className={classNames(classes.item, classes.fav)}>{num} 人收藏</div>
      );
    }
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
            <CardContent className={classes.content}>
              <h3 className={classes.themeStyle}>{item.theme}</h3>
              <div className={classes.infoWrapper}>
                <div className={classes.left}>
                  <div className={classes.item}>
                    <LocationOn className={classes.icon} /> {item.location}
                  </div>
                  <div className={classes.item}>
                    <Person className={classes.icon} />
                    &nbsp;{item.username}
                  </div>
                  <div className={classes.item}>
                    <AccessTime className={classes.icon} /> {item.departdate} 出发
                  </div>
                </div>

                <div className={classes.right}>
                  {this.renderStarZone(item.averageScore)}
                  {this.renderFavZone(item.likes)}
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