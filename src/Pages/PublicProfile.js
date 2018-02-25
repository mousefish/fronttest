import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Avatar from "material-ui/Avatar";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import pic from "../Assets/Images/profile.jpg";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";

import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PageHeader from "./PageHeader";
import * as actions from "../Actions";

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
        paddingBottom: 10
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
    flex: {
        flex: 1
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
        if (!user) {
            return <div>loading</div>;
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
                            src={pic}
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
                                我的故事
                            </span>
                        </Link>
                        <span className={classes.subHeaderContent}>我的愿望</span>
                        <span className={classes.subHeaderContent}>我的活动</span>
                        <span className={classes.subHeaderContent}>我的收藏</span>
                    </div>
                </div>
                <div className="wrapper">{this.props.children}</div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        user: state.UserReducer
    };
};

export default connect(mapStateToProps, actions)(
    withRouter(withStyles(styles)(PublicProfile))
);