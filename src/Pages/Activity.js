import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Avatar from "material-ui/Avatar";
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
import test from "../Assets/imgForTest/dalian1.jpg";
import test2 from "../Assets/imgForTest/4.jpg";

const styles = theme => ({
    editBar: {
        // border:"1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0 30px 0",
        padding: 5
    },
    editBtn: {
        border: "1px solid #1976D2",
        padding: "7px 15px",
        borderRadius: 40,
        color: "#1976D2"
    },
    heartOn: {
        color: "#F44336",
        border: "1px solid #F44336"
    },
    heartOut: {
        color: "#757575",
        border: "1px solid #757575"
    },
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },

    detailPanel: {
        // border: "1px solid green",
        padding: 0,
        listStyle: "none",
        color: "#424242"
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
        marginTop:40,
        display: "flex",
        flexFlow: "column",
        justifyContent: "flexStart",
        alignItems: "center",
        paddingLeft: 5
    },

    line: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-around",
        // border: "1px solid blue",
        width: 200,
        margin: "20px 0",
        padding:"0 20px"
    },

    commentArea: {
        // border: "1px solid red",
        padding: 5
    },
    writeArea: {
        // border: "1px solid red"
    },

    bg: {
        marginBottom: 10,
        position: "relative",
        textAlign: "center"
    },
    bgImg: {
        maxWidth: "100%",
        height: 250
    },

    bgImgLayer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        // border:"1px solid red",
        backgroundColor: "#1976D2",
        opacity: 0.2
    },
    row: {
        // border:"1px solid red",
        position:"absolute",
        bottom:-35,
        left:"50%",
        marginLeft:-45

    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 80,
        height: 80
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
        if (localStorage["jwtToken"]) {
            this.props.verifyYourFav(activityId);
        }
    }

    renderEditChoice() {
        const { id, isYourActivity } = this.props.activity;
        const { classes, activity } = this.props;

        if (isYourActivity) {
            return (
                <div className={classes.editBar}>
                    <div style={{ lineHeight: 1.8, marginTop: 1 }}>
                        <div>{activity.mail}</div>
                        <div>{activity.username}</div>
                    </div>
                    <div>
                        <Link className="unlink" to={`/editActivity/${id}`}>
                            <div className={classes.editBtn}>修改我的活动</div>
                        </Link>
                    </div>
                </div>
            );
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

    renderServices(services) {
        if (services) {
            return services.map(item => {
                return <span key={item}>{item}&nbsp; </span>;
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
            <div>
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
                <div className={classes.bg}>
                    <img className={classes.bgImg} src={test} />
                    <div className={classes.bgImgLayer} />
                    <div className={classes.row}>
                        <Avatar
                            alt="tour guide"
                            src={test2}
                            className={classNames(
                                classes.avatar,
                                classes.bigAvatar
                            )}
                        />
                    </div>
                </div>
                <div className={classes.container}>
                    <h3 style={{ fontWeight: "bold" }}>{activity.theme}</h3>
                    <div>
                        <LocationOn className={classes.icon} />&nbsp;{activity.location}
                    </div>

                    <div className={classes.line}>
                        <IconButton
                            aria-label="Add to favorites"
                            className={
                                isYourFav ? classes.heartOn : classes.heartOut
                            }
                            onClick={() => {
                                this.handleLikes(activityId);
                            }}
                        >
                            <FavoriteIcon aria-label="Add to favorites" />
                        </IconButton>
                        <span />
                        <IconButton
                            style={{ border: "1px solid #757575" }}
                            aria-label="Share"
                        >
                            <ShareIcon />
                        </IconButton>
                    </div>
                </div>

                <div className="wrapper">
                    <div>
                        <div style={{ paddingLeft: 5, overflowY: "scroll" }}>
                            {activity.story}
                        </div>
                    </div>

                    <ul className={classes.detailPanel}>
                        <li>
                            <div className={classes.detailTitle}>活动发起人</div>
                            <div className={classes.detailContent}>
                                {" "}
                                <Link
                                    style={{ color: "#424242" }}
                                    to={`/user/${activity.userId}`}
                                    className="unlink"
                                >
                                    {activity.username}&nbsp;
                                    <OpenInNew className={classes.icon} />
                                </Link>
                            </div>
                        </li>

                        <li>
                            <div className={classes.detailTitle}>活动开始和结束日期</div>
                            <div className={classes.detailContent}>
                                {activity.departdate} — {activity.finishdate}
                            </div>
                        </li>

                        <li>
                            <div className={classes.detailTitle}>活动价格</div>
                            <div className={classes.detailContent}>
                                {activity.budget} 元 / 人
                            </div>
                        </li>

                        <li>
                            <div className={classes.detailTitle}>提供的服务</div>
                            <div className={classes.detailContent}>
                                {this.renderServices(activity.services)}
                            </div>
                        </li>
                        <li>
                            <div className={classes.detailTitle}>口碑</div>
                            <div className={classes.detailContent}>
                                <Link
                                    style={{ color: "#424242" }}
                                    className="unlink"
                                    to={`/ratingIndex/${activityId}`}
                                >
                                    <RatingSummary activityId={activityId} />
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <div className={classes.commentArea}>
                        <div className={classes.writeArea}>
                            <RatingForm activityId={activityId} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("isYourFav", state.ActivityReducer.isYourFav);
    // console.log("isYourActivity", state.ActivityReducer.activity.isYourActivity)
    return {
        activity: state.ActivityReducer.activity,
        isYourFav: state.ActivityReducer.isYourFav,
        isYourActivity: state.ActivityReducer.activity.isYourActivity
    };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Activity));