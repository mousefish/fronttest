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

const styles = {
    container: {
        width: "100%",
        maxWidth: 600,
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
        fontWeight:"bold",
        textAlign:"center",
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
        height: 100,
    },

    logoWrapper: {
     display:"flex",
     flexFlow:"column",
     justifyContent:"center",
     alignItems:"center",
    },
};
class OpenPage extends Component {
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
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
                                    classes.bigAvatar,
                                )}
                            />
                             <p className={classes.slogan}>你与世界之间，只差一个携U行的距离</p>
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
                            <Tab className={classes.tab} label="登陆" />
                            <Tab className={classes.tab} label="注册" />
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
                                    <div>用微信登陆</div>
                                </div>
                            </Button>
                            <Link to="/login" className="unlink">
                                <Button
                                    className={classNames(
                                        classes.button,
                                        classes.emailBtn
                                    )}
                                >
                                    用邮箱登陆
                                </Button>
                            </Link>
                        </div>
                    )}
                    {value === 1 && (
                        <div className={classes.loginBtnGroup}>
                            <Link to="/signup" className="unlink">
                                <Button
                                    className={classNames(
                                        classes.button,
                                        classes.emailBtn
                                    )}
                                >
                                    创建新账户
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