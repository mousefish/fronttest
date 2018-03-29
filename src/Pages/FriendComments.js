import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Button from "material-ui/Button";
import Star from "material-ui-icons/Star";
import Avatar from "material-ui/Avatar";
import pic from "../Assets/Images/profile.jpg";
import Stars from "./Stars";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";

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
        margin: "10px 10px 10px 0"
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
        alignItems: "center"
        // border: "1px solid red"
    },

    comment: {
        margin: "auto",
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
    },

    commentZone: {
        marginTop: 30
    },
    title: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between"
    },
    average: {
        fontWeight: "bold"
    }
});

class FriendComments extends Component {
    state = {
        showAll: false
    };
    renderButton(comments) {
        const { classes } = this.props;
        if (comments && typeof comments[0] !== "string") {
            return (
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
            );
        }
    }
    renderComments(comments) {
        const { classes } = this.props;
        if (comments && comments.length > 0) {
            if (typeof comments[0] === "string") {
                return <div>{comments[0]}</div>;
            } else {
                let average = comments[0].average;
                return comments.map((item, index) => {
                    return (
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
                                    用户 {item.userId}
                                </div>
                                <div>
                                    <Stars num={item.numOfStars} />
                                </div>
                            </div>
                            <div className={classes.comment}>
                                {item.feedback}
                            </div>
                            <div style={{ float: "right" }}>
                                {item.createdAt}
                            </div>
                            <div style={{ clear: "both" }} />
                        </li>
                    );
                });
            }
        }
    }

    renderAverage(comments) {
        const { classes } = this.props;

        if (comments && comments[0] && comments[0].average) {
            return (
                <h2 className={classes.average}>
                    {comments[0].average} <Stars num={comments[0].average} />
                </h2>
            );
        }
    }

    render() {
        const { comments, classes } = this.props;
        return (
            <div className={classes.commentZone}>
                <div className={classes.title}>
                    <h4>大家对我的评价</h4>
                    <div>{this.renderAverage(comments)}</div>
                </div>
                <ul className={classes.friendWrapper}>
                    {this.renderComments(comments)}
                </ul>

                <div>{this.renderButton(comments)}</div>
            </div>
        );
    }
}

export default withStyles(styles)(FriendComments);