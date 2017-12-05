import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui-icons/LocationOn";
import MonetizationOn from "material-ui-icons/MonetizationOn";

import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import EventAvailable from "material-ui-icons/EventAvailable";
import Group from "material-ui-icons/Group";

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

const style = {
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

class WishDetails extends Component {

    render() {
        const classes = this.props.classes;
        return (
            <div>
                {" "}
                <Card
                    className={classes.card}
                    key={this.props.id}

                >
                    <CardMedia
                        className={classes.media}
                        image={this.props.wish}
                        title="wish"
                    >
                        <span
                            style={{
                                position: "absolute",
                                right: "10",
                                top: "10",
                                color: "#fff"
                            }}
                        />
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
                            {this.props.theme}
                        </span>
                    </CardMedia>
                    <CardContent>
                        <div
                            style={{
                                marginBottom: 6
                            }}
                        >
                            <div style={{ float: "left" }}>
                                <LocationOn className={classes.icon} />{" "}
                                {this.props.location}
                            </div>
                            <div style={{ float: "right" }}>
                                <MonetizationOn className={classes.icon} />{" "}
                                &nbsp;{this.props.price}
                            </div>
                            <div style={{ clear: "both" }} />
                        </div>

                        <div style={{ marginBottom: 6 }}>
                            <div style={{ float: "left" }}>
                                <EventAvailable
                                    className={classes.icon}
                                />&nbsp;{this.props.date}
                            </div>
                            <div style={{ float: "right" }}>
                                <Group className={classes.icon} />&nbsp;组团 :{" "}
                                {this.props.grouping}
                            </div>
                            <div style={{ clear: "both" }} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(style)(WishDetails);