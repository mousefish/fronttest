import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import * as actions from "../Actions";
import { Link } from "react-router-dom";
import classNames from "classnames";
import PageHeader from "./PageHeader";
import Avatar from "material-ui/Avatar";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import config from "../config/config";

const styles = theme => ({
    avatar: {
        width: 70,
        height: 70
    },

    headerWrapper: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        backgroundColor: "#1976D2",
        color: "#fff",
        marginBottom: 5,
        padding: 10
    },

    myHeader: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        paddingBottom: 10,
        paddingLeft: 10
    },

    myHeaderRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 20,
        fontSize: "1.2rem"
    },

    subHeader: {
        display: "flex",
        flexDirection: "row nowrap",
        justifyContent: "flex-end",
        color: "#fff"
    },

    subHeaderContent: {
        paddingLeft: 25
    },

    image: {
        width: "100%",
        maxWidth: "100%",
        height: 224,
        marginBottom: 40
    },

    innerWrapper: {
        textAlign: "center"
    },

    button: {
        margin: theme.spacing.unit,
        width: "95%"
    },

    smallButton: {
        margin: theme.spacing.unit,
        width: "55%"
    },

    root: {
        margin: theme.spacing.unit,
        width: "95%",
        padding: 15
    },

    highlight: {
        fontSize: "1.2rem",
        fontWeight: "bold",
        marginTop: 20
    }
});

class PublicProfile extends Component {
    componentWillMount() {
        const userId = this.props.match.params.userId;
        this.props.fetchUser(userId);
    }

    render() {
        const { classes, history } = this.props;
        const { user } = this.props;
        if (user && user.hasOwnProperty("warning")) {
            return <div>{user["warning"]}</div>;
        }

        return (
            <div>
                <div className={classes.headerWrapper}>
                    <KeyboardArrowLeft
                        className="arrow"
                        onClick={history.goBack}
                        style={{
                            width: 30,
                            height: 30,
                            color: "#fff",
                            marginBottom: 10
                        }}
                    />
                    <div className={classes.myHeader}>
                        <Avatar
                            alt="profile"
                            src={
                                user.imageurl ? (
                                    config.BUCKET_URL + user.imageurl
                                ) : (
                                    defaultAvatar
                                )
                            }
                            className={classes.avatar}
                        />
                        <div className={classes.myHeaderRight}>
                            {user.username}
                        </div>
                    </div>
                    <div className={classes.subHeader}>
                        <Link
                            to={`/story/${user.id}`}
                            className="unlink"
                            style={{ color: "#fff" }}
                        >
                            <span className={classes.subHeaderContent}>
                                他的圈子
                            </span>
                        </Link>
                        <Link
                            to={`/userActivities/${user.id}`}
                            className="unlink"
                            style={{ color: "#fff" }}
                        >
                            <span className={classes.subHeaderContent}>
                                他的活动
                            </span>
                        </Link>
                        <Link
                            to={`/userWishes/${user.id}`}
                            className="unlink"
                            style={{ color: "#fff" }}
                        >
                            <span className={classes.subHeaderContent}>
                                他的愿望
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="wrapper">
                    <div>
                        <span>{user.sex ? user.sex : ""}</span>{" "}
                        <span>{user.age ? user.age : ""}</span>{" "}
                        <span className={classes.highlight}>
                            {user.language && user.language.length > 0 ? (
                                `懂${user.language}`
                            ) : (
                                ""
                            )}
                        </span>{" "}
                        <span>
                            {user.school ? user.school + "毕业/在读" : ""}
                        </span>{" "}
                        <span> {user.occupation ? user.occupation : ""}</span>
                        <div className={classes.highlight}>
                            {user.bio ? user.bio : "还没有个人介绍"}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("here", state.UserReducer.basicInfo);
    return {
        user: state.UserReducer.basicInfo
    };
};

export default connect(mapStateToProps, actions)(
    withRouter(withStyles(styles)(PublicProfile))
);