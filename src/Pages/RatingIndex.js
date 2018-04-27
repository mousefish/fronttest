import React, { Component } from "react";
import * as actions from "../Actions";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/zh-cn.js";
import { connect } from "react-redux";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import classNames from "classnames";
import config from "../config/config";
import Star from "material-ui-icons/Star";
import { withStyles } from "material-ui/styles";
import PageHeader from "./PageHeader";
import Avatar from "material-ui/Avatar";
import Stars from "./Stars";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";

const styles = {
    container: {
        width: "95vw",
        maxWidth: 600,
        margin: "auto"
    },
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },
    avatar: {
        width: 30,
        height: 30,
        margin: "10px 5px 5px 0",
        display: "inline-block"
    },

    bigAvatar: {
        width: 40,
        height: 40,
        display: "inline-block"
    },

    ratingIndex: {
        padding: 5,
        listStyle: "none"
    },
    comment: {
        borderBottom: "1px solid #BDBDBD",
        padding: "5px 0"
    },
    feedback: {
        // border:"1px solid red",
        marginBottom: 10,
        marginLeft: 45
    },
    time: {
        float: "right",
        fontSize: 12
    },
    subtime: {
        float: "right",
        fontSize: 10
    },
    subComments: {
        fontSize: 12,
        marginLeft: 40,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#EEEEEE",
        borderBottom: "1px solid #E0E0E0"
    },
    header: {
        // border:"1px solid red",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    reply: {
        padding: "15px 0"
    }
};

class RatingIndex extends Component {
    state = {
        open: false,
        to: "",
        feedback: "",
        creatorId: 0,
        activityId: 0,
        parentId: 0,
        replyToId: 0
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    sendReply = () => {
        let {
            feedback,
            creatorId,
            activityId,
            parentId,
            replyToId
        } = this.state;
        let value = {
            feedback,
            creatorId,
            activityId,
            parentId,
            replyToId
        };
        // console.log(value);
        if (value.feedback.trim().length > 0) {
            this.props.sendRating(value);
        }

        this.setState({ open: false });
    };

    componentWillMount() {
        const { activityId } = this.props.match.params;
        this.props.fetchRatings(activityId);
    }

    renderStars(num) {
        let result = [];
        for (let i = 0; i < num; i++) {
            result.push(<Star key={i} />);
        }

        return result;
    }

    renderNonParentRatings(nonParentRatings, parentId, whomToReply) {
        const { classes, ratings } = this.props;
        return nonParentRatings.map((item, index) => {
            if (item.parentId === parentId) {
                return (
                    <div className={classes.subComments} key={index}>
                        <div className={classes.header}>
                            <Avatar
                                alt="rater pic"
                                src={
                                    item.imageurl ? (
                                        config.BUCKET_URL + item.imageurl
                                    ) : (
                                        defaultAvatar
                                    )
                                }
                                className={classNames(classes.avatar)}
                            />
                            <div className={classes.reply}>
                                <Link
                                    to={`/user/${item.userId}`}
                                    className="unlink"
                                >
                                    {item.username}
                                </Link>
                                {item.parentId === item.replyToId ? (
                                    ""
                                ) : (
                                    <span>
                                        回复@{
                                            <span className="unlink">
                                                {item.whomToReply}
                                            </span>
                                        }
                                    </span>
                                )}：{item.feedback}
                            </div>
                        </div>
                        <div className={classes.subtime}>
                            {moment(item.createdAt).format("LLL")}发布 |{" "}
                            <span
                                className="unlink"
                                onClick={() => {
                                    this.setState({
                                        open: true,
                                        to: item.username,
                                        creatorId: item.creatorId,
                                        activityId: item.activityId,
                                        parentId: parentId,
                                        replyToId: item.id
                                    });
                                }}
                            >
                                回复
                            </span>
                        </div>
                        <div style={{ clear: "both" }} />
                    </div>
                );
            }
        });
    }

    renderItems(ratings) {
        const { classes } = this.props;
        let nonParentRatings = ratings.filter(item => {
            return item.parentId !== 0 && item.replyToId !== 0;
        });

        if (!ratings || ratings.length == 0) {
            return (
                <div key={0} className={classes.comment}>
                    暂时没有评论
                </div>
            );
        } else {
            return ratings.map((item, index) => {
                if (item.parentId === 0 || item.replyToId === 0) {
                    return (
                        <li className={classes.comment} key={item.id}>
                            <div>
                                <Avatar
                                    alt="rater pic"
                                    src={
                                        item.imageurl ? (
                                            config.BUCKET_URL + item.imageurl
                                        ) : (
                                            defaultAvatar
                                        )
                                    }
                                    className={classNames(
                                        classes.avatar,
                                        classes.bigAvatar
                                    )}
                                />
                                <span style={{ verticalAlign: 18 }}>
                                    <Link
                                        to={`/user/${item.userId}`}
                                        className="unlink"
                                    >
                                        {item.username}
                                    </Link>：{this.renderStars(item.numOfStars)}
                                </span>
                            </div>
                            <div className={classes.feedback}>
                                {item.feedback ? item.feedback : "无"}
                            </div>
                            <div className={classes.time}>
                                {moment(item.createdAt).format("LLL")}发布 |{" "}
                                <span
                                    className="unlink"
                                    onClick={() => {
                                        this.setState({
                                            open: true,
                                            to: item.username,
                                            creatorId: item.creatorId,
                                            activityId: item.activityId,
                                            parentId: item.id,
                                            replyToId: item.id
                                        });
                                    }}
                                >
                                    回复
                                </span>
                            </div>
                            <div style={{ clear: "both", marginBottom: 10 }} />
                            <div style={{ marginBottom: 10 }}>
                                {nonParentRatings.length > 0 ? (
                                    this.renderNonParentRatings(
                                        nonParentRatings,
                                        item.id,
                                        item.username
                                    )
                                ) : (
                                    ""
                                )}
                            </div>
                        </li>
                    );
                }
            });
        }
    }
    render() {
        const { ratings, classes } = this.props;

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="活动评论" />
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        回复@{this.state.to}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="回复内容"
                            multiline
                            type="text"
                            fullWidth
                            onChange={e => {
                                this.setState({ feedback: e.target.value });
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            取消
                        </Button>
                        <Button onClick={this.sendReply} color="primary">
                            发送
                        </Button>
                    </DialogActions>
                </Dialog>
                <ul className={classes.ratingIndex}>
                    {this.renderItems(ratings)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.RatingReducer.ratings);
    return {
        ratings: state.RatingReducer.ratings
    };
};

export default connect(mapStateToProps, actions)(
    withStyles(styles)(RatingIndex)
);