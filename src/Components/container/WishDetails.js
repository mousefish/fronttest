import React, { Component } from "react";

import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui-icons/LocationOn";
import MonetizationOn from "material-ui-icons/MonetizationOn";
import img from "../../Assets/Images/wish.jpg";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import EventAvailable from "material-ui-icons/EventAvailable";
import Group from "material-ui-icons/Group";
import Button from "material-ui/Button";
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

const style = theme => ({


    innerWrapper: {
        textAlign: "center",
        marginBottom: 6
    },

    innerBoxMoney: {
        display: "flex",
        flexDirection: "row nowrap",
        justifyContent: "center",
        marginBottom: 6
    },

    innerBoxService: {
        display: "flex",
        flexDirection: "row nowrap",
        justifyContent: "center",
        marginBottom: 6
    },

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

    buttonSet: {
        textAlign: "center",
        marginBottom: 20
    },

    button: {
        margin: theme.spacing.unit
    },

    root: {
        margin: theme.spacing.unit,
        backgroundColor: "#43A047",
        color: "#fff"
    }
});

class WishDetails extends Component {
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

    render() {
        const { classes } = this.props;
        return (
            <div className="wrapper">
                !!!NEEDS REDESIGN!!!
                <Card className={classes.card} key={this.props.id}>
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title="wish"
                    >
                        <span
                            style={{
                                position: "absolute",
                                right: 10,
                                top: 10,
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
                           placeholder
                        </span>
                    </CardMedia>
                    <CardContent>
                        <div>
                            <div className={classes.innerWrapper}>
                                <LocationOn className={classes.icon} />{" "}
                                {this.props.location}
                            </div>

                            <div className={classes.innerWrapper}>
                                <EventAvailable
                                    className={classes.icon}
                                />&nbsp;{this.props.departdate}
                            </div>
                            <div className={classes.innerBoxMoney}>
                                <div style={{marginRight:20}}>
                                    <MonetizationOn
                                        className={classes.icon}
                                    />{" "}
                                    &nbsp;{this.props.budget}
                                </div>
                                <div>
                                    <Group className={classes.icon} />&nbsp;
                                    {this.props.finishdate}
                                </div>
                            </div>
                            <div className={classes.innerBoxService}>
                                {this.renderService(this.props.services)}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className={classes.buttonSet}>
                    <Button color="primary" className={classes.button}>
                        行程细节
                    </Button>
                    <Button color="primary" className={classes.button}>
                        说明
                    </Button>
                </div>
                <div className={classes.buttonSet}>
                    <Button
                        raised
                        color="primary"
                        className={classes.button}
                        style={{ width: "45%", padding: 15}}
                    >
                        咨询
                    </Button>
                    <Button
                        raised
                        className={classes.root}
                        style={{ width: "45%", padding: 15 }}
                    >
                        一起参与吧
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(WishDetails);