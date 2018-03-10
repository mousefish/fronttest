import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui-icons/LocationOn";
import OpenInNew from "material-ui-icons/OpenInNew";
import AttachMoney from "material-ui-icons/AttachMoney";
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
    },
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },

    left: {
        paddingRight: 20,
        // border:"1px solid green",
        fontSize: 12
    },

    detailPanel: {
        // border: "1px solid green",
        padding: 0,
        listStyle: "none",
        color:"#424242"
    },

    detailTitle: {
        margin: 5,
        color: "#1976D2"
    },
    detailContent: {
        margin: 5,
        paddingBottom: 5,
        marginBottom: 10,
        borderBottom: "1px solid #BDBDBD"
    },

    container: {
        // border: "1px solid blue",
        display: "flex",
        flexFlow: "column",
        justifyContent: "flexStart",
        alignItems: "center",
        paddingLeft: 5
    },
    commentArea: {
        // border: "1px solid red",
        padding:5
    },
    writeArea: {
        // border: "1px solid red"
    },

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
            return new Promise((resolve, reject) => {
                resolve(this.props.submitLikes(itemId));
            }).then(() => {
                this.props.verifyYourFav(itemId);
            });
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

                <div className={classes.container}>
                    <h3 style={{ fontWeight: "bold" }}>{activity.theme}</h3>
                    <div className="activity-line-wrapper">
                        <div className={classes.left}>
                            <LocationOn className={classes.icon} />
                            {activity.location}
                        </div>
                    </div>

                    <div className="activity-line-wrapper">
                        <IconButton
                            aria-label="Add to favorites"
                            className={isYourFav ? classes.heartOn : ""}
                        >
                            <FavoriteIcon
                                aria-label="Add to favorites"
                                onClick={() => {
                                    this.handleLikes(activityId);
                                }}
                            />
                        </IconButton>
                        <span />
                        <IconButton aria-label="Share">
                            <ShareIcon />
                        </IconButton>
                    </div>

                    <div>
                        <div style={{ overflowY: "scroll" }}>
                            {activity.story}
                        </div>
                    </div>
                </div>

                <ul className={classes.detailPanel}>
                    <li>
                        <div className={classes.detailTitle}>活动发起人</div>
                        <div className={classes.detailContent}>
                            {" "}
                            <Link
                                style={{color:"#424242"}}
                                to={`/user/${activity.userId}`}
                                className="unlink"
                            >
                                {activity.username}&nbsp;
                                <OpenInNew className={classes.icon}/>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className={classes.detailTitle}>活动日期</div>
                        <div className={classes.detailContent}>
                            {activity.departdate} — {activity.finishdate}
                        </div>
                    </li>

                     <li>
                        <div className={classes.detailTitle}>活动价格</div>
                        <div className={classes.detailContent}>
                            {activity.budget}
                        </div>
                    </li>

                    <li>
                        <div className={classes.detailTitle}>提供的服务</div>
                        <div className={classes.detailContent}>
                            {activity.services}
                        </div>
                    </li>
                    <li>
                        <div className={classes.detailTitle}>口碑</div>
                        <div className={classes.detailContent}>
                            <RatingSummary activityId={activityId} />
                        </div>
                    </li>
                </ul>
                <div className={classes.commentArea}>
                    <div className={classes.writeArea}>
                        <RatingForm activityId={activityId} />
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("isYourFav", state.ActivityReducer.isYourFav);
    return {
        activity: state.ActivityReducer.activity,
        isYourFav: state.ActivityReducer.isYourFav
    };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Activity));