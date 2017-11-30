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
import Person from "material-ui-icons/Person";
import StarBorder from "material-ui-icons/StarBorder";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import LocationOn from "material-ui-icons/LocationOn";
import dummyStoryData from './dummyStoryData.json';

const styleSheet = {
  card: {
    width: "100%",
    marginBottom: 1,
    margin: "auto",
    boxShadow: "none"
  },

};
class ListStoryCard extends Component {
  renderItems(){
    return dummyStoryData.map((item)=>{
      return (
         <ListItem style={{ padding: 1 }}>
            <Card className={this.props.classes.card}>
              <CardMedia>
                <div style={{ position: "relative" }}>
                  <div
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
                    官方认证
                  </div>
                  <img
                    style={{ height: 220, width: "100%" }}
                    src={travel}
                    alt="Contemplative Reptile"
                  />
                </div>
              </CardMedia>
              <CardContent>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      lineHeight: 1.8
                    }}
                  >
                    <div>
                      <Person style={{ width: 13, height: 13 }} />{" "}
                      {item.intro}<br />
                      <StarBorder style={{ width: 13, height: 13 }} />
                      <div
                        style={{
                          textDecoration: "underline",
                          display: "inline",
                          color: "purple"
                        }}
                      >
                        {item.title1}
                      </div>{" "}
                      <div
                        style={{
                          textDecoration: "underline",
                          display: "inline",
                          color: "purple"
                        }}
                      >
                        {item.title2}
                      </div>{" "}
                      <div
                        style={{
                          textDecoration: "underline",
                          display: "inline",
                          color: "purple"
                        }}
                      >
                        {item.title3}
                      </div>
                    </div>
                    <div>
                    {" "}
                    <Avatar aria-label="Recipe">
                      W
                    </Avatar>
                  </div>
                  </div>


                <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13,
                      lineHeight: 1.8,
                      marginBottom: 5,
                    }}>
                  <div
                  >
                    <LocationOn style={{ width: 13, height: 13 }} />美国,纳帕
                  </div>
                  <div
                  >
                    {item.name}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ListItem>
          )
    })
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

export default withStyles(styleSheet)(ListStoryCard);