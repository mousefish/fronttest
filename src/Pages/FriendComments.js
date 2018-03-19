import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Button from "material-ui/Button";
import Star from "material-ui-icons/Star";
import Avatar from "material-ui/Avatar";
import pic from "../Assets/Images/profile.jpg";

const styles = theme => ({
    friendWrapper: {
        listStyle: "none",
        padding: 0
    },
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },
    avatar: {
        margin: 10
    },

    bigAvatar: {
        width: 40,
        height: 40,
        display: "inline-block"
    },

    subHeader: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        // border: "1px solid red"
    },

    comment: {
        margin: "auto",
        paddingLeft: 12,
        // border: "1px solid red"
    },

    space: {
        marginBottom: 20
    },
    button: {
        // margin: theme.spacing.unit,
        backgroundColor: "#1976D2",
        width: "100%",
        padding: 10,
        fontSize: "1.1rem",
        letterSpacing: 2
    }
});

class FriendComments extends Component {
    state = {
        showAll: false
    };

    renderStars(numOfStars) {
        const classes = this.props.classes;
        var starWrapper = [];
        for (let i = 0; i < numOfStars; i++) {
            starWrapper.push(<Star key={i} className={classes.icon} />);
        }

        return starWrapper;
    }

    renderFriends(friendData) {
        const classes = this.props.classes;
        const initalFriendData = [friendData[0]];
        let friends = this.state.showAll ? friendData : initalFriendData;
        return friends.map((friend, index) => {
            return [
                <li className={classes.space} key={index}>
                    <div className={classes.subHeader}>
                        <div className={classes.subHeader}>
                            <Avatar
                                alt="friend pic"
                                src={pic}
                                className={classNames(
                                    classes.avatar,
                                    classes.bigAvatar
                                )}
                            />
                            {friend.name}
                        </div>
                        <div>{this.renderStars(friend.stars)}</div>
                    </div>
                    <div className={classes.comment}>
                        {friend.comment}
                    </div>
                    <div style={{ float: "right" }}>{friend.date}</div>
                    <div style={{ clear: "both" }} />
                </li>
            ];
        });
    }

    render() {
        const classes = this.props.classes;
        const friendData = this.props.storyData.friendComments;
        return (
            <div>
                <ul className={classes.friendWrapper}>
                    {this.renderFriends(friendData, classes)}
                </ul>

                <Button
                    raised
                    color="primary"
                    className={classes.button}
                    onClick={() =>
                        this.setState(prevState => ({
                            showAll: !prevState.showAll
                        }))}
                >
                    {this.state.showAll ? "收回评论" : "查看全部评论"}
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storyData: state.StoryDataReducer
    };
};
export default connect(mapStateToProps)(withStyles(styles)(FriendComments));