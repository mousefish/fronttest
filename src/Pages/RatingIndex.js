import React, { Component } from "react";
import * as actions from "../Actions";
import { Link } from "react-router-dom";
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
import { withStyles } from "material-ui/styles";
import PageHeader from "./PageHeader";
import { RatingItem, FoldBtn } from "./RatingItemNonParent";
import RatingItemParent from "./RatingItemParent";

const styles = {
    ratingIndex: {
        padding: 5,
        listStyle: "none"
    },
    nonParentRatingsWrapper: {
        marginBottom: 10
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
        replyToId: 0,
        showAll: {
            id: 0,
            show: false
        }
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handlePopup = (item, parentId) => {
        this.setState({
            open: true,
            to: item.username,
            creatorId: item.creatorId,
            activityId: item.activityId,
            parentId: parentId,
            replyToId: item.id
        });
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

    renderNonParentRatings(nonParentRatings, whomToReply, index) {
        const { classes } = this.props;
        let part = [];
        let all = [];
        // console.log(nonParentRatings);
        nonParentRatings.sort(
            (a, b) =>
                a.replyToId - b.replyToId ||
                new Date(a.createdAt).getTime() -
                    new Date(b.createdAt).getTime()
        );

        for (let index = 0; index < nonParentRatings.length; index++) {
            let item = nonParentRatings[index];
            if (item.replyToId !== item.parentId && !item.whomToReply) {
                continue;
            }
            if (index <= 3) {
                part.push(
                    <RatingItem
                        key={item.id}
                        item={item}
                        version=""
                        onClick={() => this.handlePopup(item, item.parentId)}
                    />
                );
            }
            all.push(
                <RatingItem
                    key={item.id}
                    item={item}
                    version=""
                    onClick={() => this.handlePopup(item, item.parentId)}
                />
            );
        }

        if (all.length > 4) {
            all.push(
                <FoldBtn
                    key="fold"
                    onClick={() => {
                        this.setState({
                            showAll: {
                                id: index,
                                show: false
                            }
                        });
                    }}
                    title="收起剩余回复"
                />
            );
        }

        if (part.length === 4) {
            if (all.length - part.length > 0) {
                part.push(
                    <FoldBtn
                        key="show"
                        onClick={() => {
                            this.setState({
                                showAll: {
                                    id: index,
                                    show: true
                                }
                            });
                        }}
                        title={`查看剩余 ${all.length - part.length - 1} 条评论`}
                    />
                );
            }
        }

        return this.state.showAll.id === index && this.state.showAll.show
            ? all
            : part;
    }

    renderItems(ratings) {
        const { classes } = this.props;
        let parentRatings = ratings.filter(item => {
            return item.parentId === 0 && item.replyToId === 0;
        });

        if (!ratings || ratings.length == 0) {
            return (
                <div key={0} className={classes.comment}>
                    暂时没有评论
                </div>
            );
        } else {
            return parentRatings.map((item, index) => {
                let nonParentRatings = ratings.filter(subItem => {
                    return subItem.parentId === item.id;
                });
                return (
                    <RatingItemParent
                        key={index}
                        item={item}
                        version=""
                        onClick={() => this.handlePopup(item, item.id)}
                    >
                        <div className={classes.nonParentRatingsWrapper}>
                            {nonParentRatings.length > 0 ? (
                                this.renderNonParentRatings(
                                    nonParentRatings,
                                    item.username,
                                    index
                                )
                            ) : (
                                ""
                            )}
                        </div>
                    </RatingItemParent>
                );
            });
        }
    }
    render() {
        const { ratings, classes, message } = this.props;
        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="活动评论" />
                {message}
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
    return {
        message: state.RatingReducer.message,
        ratings: state.RatingReducer.ratings
    };
};

export default connect(mapStateToProps, actions)(
    withStyles(styles)(RatingIndex)
);