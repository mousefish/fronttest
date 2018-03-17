import React, { Component } from "react";
import SideButton from "./sideButton";
import List, {
    ListItem,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import ImageIcon from "material-ui-icons/Image";
import { withStyles } from "material-ui/styles";
import * as actions from "../Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";

const styles = {};
class UserActivities extends Component {
    componentWillMount() {
        const { userId } = this.props.match.params;
        this.props.fetchUserActivities(userId);
    }

    renderActivityList(item) {
        return (
            <ListItem>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                <ListItemText
                    style={{overflow:"auto"}}
                    primary={item.theme}
                    secondary={`${item.budget} 元`}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Stars" />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }

    renderUserActivities(userActivities) {
        if (userActivities && typeof userActivities[0] === "string") {
            return (
                <div style={{ textAlign: "center" }}>{userActivities[0]}</div>
            );
        }
        const { classes } = this.props;
        return userActivities.map(item => {
            return (
                <Link
                    to={`/activity/${item.id}`}
                    key={item.id}
                    className="unlink"
                >
                    {this.renderActivityList(item)}
                </Link>
            );
        });
    }

    render() {
        const { userActivities } = this.props;
        return (
            <div className="wrapper">
                <PageHeader title="我的活动" history={this.props.history} />
                <ul className="unlist">
                    {this.renderUserActivities(userActivities)}
                </ul>
                <SideButton />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("userActivities", state.ActivityReducer.userActivities);
    return {
        userActivities: state.ActivityReducer.userActivities
    };
};
export default connect(mapStateToProps, actions)(
    withStyles(styles)(UserActivities)
);