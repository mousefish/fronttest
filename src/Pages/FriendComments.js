import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import moment from "moment";
import "moment/locale/zh-cn.js";
import classNames from "classnames";
import config from "../config/config";
import Button from "material-ui/Button";
import Star from "material-ui-icons/Star";
import Avatar from "material-ui/Avatar";
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
        paddingBottom: 10
        // border: "1px solid red"
    },

    commentRow: {
        padding: "20px 0px 10px 5px",
        borderBottom: "1px solid #BDBDBD"
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
                        <li className={classes.commentRow} key={index}>
                            <div className={classes.subHeader}>
                                <div className={classes.subHeader}>
                                    <Avatar
                                        alt="rater pic"
                                        src={
                                            item.imageurl ? (
                                                config.BUCKET_URL +
                                                item.imageurl
                                            ) : (
                                                defaultAvatar
                                            )
                                        }
                                        className={classNames(
                                            classes.avatar,
                                            classes.bigAvatar
                                        )}
                                    />
                                    {item.username}
                                </div>
                                <div>
                                    <Stars num={item.numOfStars} />
                                </div>
                            </div>
                            <div className={classes.comment}>
                                {item.feedback}
                            </div>
                            <div style={{ float: "right", fontSize: 12 }}>
                                {moment(item.createdAt).format("LLL")}
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
                    <h4>
                        共{" "}
                        <span style={{ fontWeight: "bold" }}>
                            {comments && comments[0] && comments[0].count ? (
                                comments[0].count
                            ) : (
                                0
                            )}
                        </span>{" "}
                        人评价
                    </h4>
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