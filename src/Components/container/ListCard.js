import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import SkipPreviousIcon from "material-ui-icons/SkipPrevious";
import PlayArrowIcon from "material-ui-icons/PlayArrow";
import SkipNextIcon from "material-ui-icons/SkipNext";
import Schedule from "material-ui-icons/Schedule";
import travel from "../../Assets/Images/travel.jpg";
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
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

import dummyData from './dummyTravelData.json';

const styleSheet = {
  card: {
    width: "100%",
    marginBottom: 1,
    margin: "auto",
    boxShadow:'none'
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },

  dateDetails:{
    textDecoration: "underline",
    display: "inline",
    color: "purple"
  },

};

class ListCard extends Component {

  renderItems(){
      return dummyData.map((item)=>{
        return (
          <ListItem>
            <Card className={this.props.classes.card}>
              <CardMedia>
                <div style={{ position: "relative" }}>
                  <Typography
                    component="p"
                    style={{
                      marginTop: 140,
                      marginLeft: "80%",
                      position: "absolute",
                      backgroundColor: "white",
                      padding: 3,
                      width: 72,
                      textAlign: "center",
                    }}
                  >
                    {item.attendence}
                  </Typography>
                  <Typography
                    component="p"
                    style={{
                      marginTop: 180,
                      position: "absolute",
                      marginLeft: "80%",
                      backgroundColor: "white",
                      padding: 3,
                      width: 72,
                      textAlign: "center"
                    }}
                  >
                    {item.expiration}
                  </Typography>
                  <img
                    style={{ height: 220, width: "100%" }}
                    src={travel}
                    alt="Contemplative Reptile"
                  />
                </div>
              </CardMedia>
              <CardContent>
                <div style={{
                  display:'flex',
                  justifyContent:'space-between',
                  marginBottom:'10px',
                  fontSize:'20px'
                }}>
                  <div
                  >
                    {item.theme}
                  </div>
                  <div
                  >
                    {item.price}
                  </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <div
                    style={{
                      fontSize: 13,
                      lineHeight: 2,
                    }}
                  >
                    <Schedule style={{ width: 13, height: 13, verticalAlign:'-1' }} />{" "}
                    <div style={{ display: "inline", color: "#3d9fe7" }}>
                      {item.date}
                    </div>{" "}
                    出发<br />
                    <div
                      className={this.props.classes.dateDetails}
                    >
                      {item.service[0]}
                    </div>{" "}
                    <div
                      className={this.props.classes.dateDetails}
                    >
                      {item.service[1]}
                    </div>{" "}
                    <div
                      className={this.props.classes.dateDetails}
                    >
                      {item.service[2]}
                    </div>
                  </div>
                  <div>
                    {" "}
                    <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                      W
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ListItem>

        )

      });

    }

  render() {

    const classes = this.props.classes;
    return (
      <div>
        <List style={{ paddingTop: 0 }}>
          {this.renderItems()}
        </List>
      </div>
    );
  }
}

export default withStyles(styleSheet)(ListCard);