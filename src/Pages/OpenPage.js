import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Button from "material-ui/Button";
import Avatar from "material-ui/Avatar";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import logo from "../Assets/Images/logo.jpg";
import backgroundWall from "../Assets/Images/backgroundWall.png";
import wechat from "../Assets/Images/wechat.png";
import pair from "../Data/CH_EN_PAIR";

const styles = {
    container: {
        width: "100%",
        maxWidth: 400,
        margin: "auto"
    },

    loginBtnGroup: {
        textAlign: "center",
        padding: 10,
        marginTop: 20
    },

    button: {
        width: "75%",
        marginBottom: 15,
        letterSpacing: 2,
        borderRadius: 50
    },

    emailBtn: {
        color: "#1976D2",
        border: "1px solid #1976D2",
        padding: "14px 0"
    },

    wechatBtn: {
        color: "#43A047",
        border: "1px solid #43A047"
    },
    wechatBtnInner: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-around",
        alignItems: "center"
    },

    wechatIcon: {
        height: 30,
        width: 30,
        maxWidth: "100%",
        maxHeight: "100%",
        marginRight: 5
    },

    upper: {
        position: "relative",
        display: "flex",
        flexFlow: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 350,
        background: `url(${backgroundWall})`,
        paddingTop: 40,
        textAlign: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1976D2",
        opacity: 0.6
    },
    inner: {
        zIndex: 1000,
        width: "100%"
    },

    title: {
        color: "#fff",
        marginBottom: 20,
        fontWeight: "bold"
    },
    slogan: {
        color: "#fff",
        fontSize: "1.2rem",
        lineHeight: 1.8,
        fontWeight: "bold",
        textAlign: "center"
    },

    version: {
        color: "#fff",
        border: "1px solid #fff",
        padding: "5px 20px",

        borderRadius: 15
    },
    chineseVersion: {
        letterSpacing: 2
    },

    image: {
        width: "50%"
    },

    tab: {
        letterSpacing: 2,
        backgroundColor: "#1976D2"
    },

    avatar: {
        margin: 10
    },

    bigAvatar: {
        width: 100,
        height: 100
    },

    logoWrapper: {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center"
    }
};
class OpenPage extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    renderVersionChoice() {
        const { match, history, classes } = this.props;
        if (match.params.version === "CH") {
            return (
                <p
                    className={classes.version}
                    onClick={() => {
                        history.push("/openPage/EN");
                    }}
                >
                    English version
                </p>
            );
        }
        if (match.params.version === "EN") {
            return (
                <p
                    className={classNames(
                        classes.version,
                        classes.chineseVersion
                    )}
                    onClick={() => {
                        history.push("/openPage/CH");
                    }}
                >
                    中文版
                </p>
            );
        }
    }

    render() {
        const { classes, history, match: { params: { version } } } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.upper}>
                    <div className={classes.overlay} />
                    <div className={classes.inner}>
                        <div className={classes.logoWrapper}>
                            <Avatar
                                alt="utrip logo"
                                src={logo}
                                className={classNames(
                                    classes.avatar,
                                    classes.bigAvatar
                                )}
                            />
                            <p className={classes.slogan}>
                                {pair.slogan[version]}
                            </p>
                            {this.renderVersionChoice()}
                        </div>
                    </div>
                </div>
                <div>
                    <AppBar position="static">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            fullWidth
                            indicatorColor="#fff"
                            textColor="#fff"
                        >
                            <Tab
                                className={classes.tab}
                                label={pair.login[version]}
                            />
                            <Tab
                                className={classes.tab}
                                label={pair.signup[version]}
                            />
                        </Tabs>
                    </AppBar>
                    {value === 0 && (
                        <div className={classes.loginBtnGroup}>
                            <Button
                                className={classNames(
                                    classes.button,
                                    classes.wechatBtn
                                )}
                            >
                                <div className={classes.wechatBtnInner}>
                                    <img
                                        src={wechat}
                                        className={classes.wechatIcon}
                                    />
                                    <div>{pair.signupWithWechat[version]}</div>
                                </div>
                            </Button>
                            <Link
                                to={`/login/${version}`}
                                className="unlink withEmail"
                            >
                                <Button
                                    className={classNames(
                                        classes.button,
                                        classes.emailBtn
                                    )}
                                >
                                    {pair.loginWithEmail[version]}
                                </Button>
                            </Link>
                        </div>
                    )}
                    {value === 1 && (
                        <div className={classes.loginBtnGroup}>
                            <Link to={`/signup/${version}`} className="unlink">
                                <Button
                                    className={classNames(
                                        classes.button,
                                        classes.emailBtn
                                    )}
                                >
                                    {pair.createNewAccount[version]}
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(OpenPage);