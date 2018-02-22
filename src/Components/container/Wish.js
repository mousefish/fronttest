import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui-icons/LocationOn";

import Star from "material-ui-icons/Star";
import EventAvailable from "material-ui-icons/EventAvailable";
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
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";

const style = theme => ({
    media: {
        height: 224,
        position: "relative"
    },

    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
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
                    &nbsp;{service}
                </span>
            );
        });
    }

    componentWillMount() {
        const wishId = this.props.match.params.wishId;
        this.props.fetchOneWish(wishId);
    }
    render() {
        const { classes, wish, match } = this.props;
        if (!wish && match) {
            return <div>Loading</div>;
        }
        return (
            <div className="wrapper">
                <div className="wizard-header">
                    <KeyboardArrowLeft
                        className="arrow"
                        onClick={()=>this.props.history.goBack()}
                    />
                </div>
                <div className={classes.buttonSet}>NEEDS REDESIGN</div>
                <div>{wish.id}</div>
                <div>{wish.location}</div>
                <div>{wish.departdate}</div>
                <div>{wish.finishdate}</div>
                <div>{wish.budget}</div>
                <div>{wish.services}</div>
                <div className={classes.buttonSet}>
                    <Button
                        raised
                        color="primary"
                        className={classes.button}
                        style={{ width: "45%", padding: 15 }}
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
const mapStateToProps = state => {
    console.log("wish reducer", state.WishReducer.wish);
    return {
        wish: state.WishReducer.wish
    };
};
export default connect(mapStateToProps, actions)(
    withStyles(style)(WishDetails)
);