import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import IconButton from "material-ui/IconButton";
import Dialog from "material-ui/Dialog";
import * as actions from "../Actions";
import RatingForm from "./RatingForm";
import RatingIndex from "./RatingIndex";
import RatingSummary from "./RatingSummary";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PageHeader from "./PageHeader";
import RegisterDialog from "./RegisterDialog";

const styles = theme => ({
    editBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0"
    },
    editBtn: {
        border: "1px solid #1976D2",
        padding: "7px 15px",
        borderRadius: 40,
        color: "#1976D2"
    },
    divider: {
        width: "100%",
        border: "6px solid #BDBDBD",
        margin: "15px 0 20px 0"
    },

    heartOn: {
        color: "#F44336"
    }
});

class Activity extends Component {
    state = {
        open: false
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillMount() {
        const { activityId } = this.props.match.params;
        this.props.fetchOneActivity(activityId);
        if (localStorage["user"]) {
            this.props.verifyYourFav(activityId);
        }
    }

    renderEditChoice() {
        const { userId, id } = this.props.activity;
        const { classes } = this.props;
        if (!localStorage["user"]) {
            return null;
        }
        let you = JSON.parse(localStorage["user"]);
        if (you) {
            if (you.id === userId) {
                return (
                    <div>
                        <div className={classes.editBar}>
                            <div>
                                <div>{you.mail}</div>
                                <div>{you.username}</div>
                            </div>
                            <Link className="unlink" to={`/editActivity/${id}`}>
                                <div className={classes.editBtn}>修改我的活动</div>
                            </Link>
                        </div>
                        <div className={classes.divider} />
                    </div>
                );
            }
        }
    }

    handleLikes(itemId) {
        // cannot "like" until you login/signup
        if (!localStorage.getItem("jwtToken")) {
            this.setState({
                open: true
            });
        } else {
            // let func 1 finish, then run func 2 based on the result of func 1
            return new Promise((resolve, reject)=>{
                resolve(this.props.submitLikes(itemId));
            }).then(()=>{
                this.props.verifyYourFav(itemId);
            })
        }
    }

    render() {
        const { activityId } = this.props.match.params;
        const {
            classes,
            fullScreen,
            activity,
            message,
            ratings,
            isYourFav
        } = this.props;
        // better use an object to pass the warning message since initial value is obj.
        // also, if we use if(!activity) here, since React's default value is undefined,
        // so even for the values that DO exist, the warning message will still show for a second before the content shows!
        // But be careful dealing with the following data, since when undefine, undefined does not have any property!!!
        // for example
        // 我在{activity.location ? activity.location.split(" ")[0]:""}的故事
        if (activity.hasOwnProperty("warning")) {
            return (
                <div>
                    <PageHeader history={this.props.history} title="活动" />
                    <div style={{ textAlign: "center" }}>
                        {activity.warning}
                    </div>
                </div>
            );
        }
        return (
            <div className="wrapper">
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <RegisterDialog onClick={this.handleClose} />
                </Dialog>
                <PageHeader history={this.props.history} title="活动" />
                {this.renderEditChoice()}
                <div className="flex-inner-wrapper">
                    <div>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon
                                aria-label="Add to favorites"
                                onClick={() => {
                                    this.handleLikes(activityId);
                                }}
                            />
                        </IconButton>
                        {isYourFav ? "你已经收藏" : "收藏"}
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                    </div>
                    <RatingSummary activityId={activityId} />
                    <ul className="activity-info">
                        <li className="activity">
                            <div>活动主题</div>
                            <div>{activity.theme}</div>
                        </li>
                        <li className="activity">
                            <div>活动地点</div>
                            <div>{activity.location}</div>
                        </li>
                        <li className="activity">
                            <div>活动预算</div>
                            <div>{activity.budget} 元</div>
                        </li>
                        <li className="activity">
                            <div>活动开始时间</div>
                            <div>{activity.departdate}</div>
                        </li>
                        <li className="activity" style={{ marginBottom: 10 }}>
                            <div>活动结束时间</div>
                            <div>{activity.finishdate}</div>
                        </li>
                        <li style={{ marginBottom: 10 }}>
                            <h4 className="category-title">
                                我在{activity.location ? (
                                    activity.location.split(" ")[0]
                                ) : (
                                    ""
                                )}的故事
                            </h4>
                            <div style={{ overflowY: "scroll" }}>
                                {activity.story}
                            </div>
                        </li>
                        <li
                            style={{
                                textAlign: "center",
                                marginBottom: 10,
                                fontSize: "1.2rem"
                            }}
                        >
                            <Link
                                to={`/user/${activity.userId}`}
                                className="unlink"
                            >
                                来看看{activity.username}的档案
                            </Link>
                        </li>
                    </ul>
                </div>

                <RatingForm activityId={activityId} />
                <RatingIndex activityId={activityId} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("isYourFav", state.ActivityReducer.isYourFav);
    return {
        activity: state.ActivityReducer.activity,
        isYourFav: state.ActivityReducer.isYourFav
    };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Activity));