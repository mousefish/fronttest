import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import backgroundWall from "../Assets/Images/backgroundWall.png";

const styles = {
    container: {
        width: "100%",
        maxWidth: 600,
        margin: "auto",
    },

    loginBtnGroup:{
        textAlign:"center",
        padding:10,
        marginTop:20
    },

    button: {
        width: "75%",
        border:"1px solid #1976D2",
        color:"#1976D2",
        marginBottom:15,
        letterSpacing:2,
        borderRadius:50,
        padding:"15px 0"
    },

    upper: {
        position: "relative",
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 350,
        background: `url(${backgroundWall})`,
        padding: "10px 10px 10px 10px",
        textAlign: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#1976D2",
        opacity:0.6
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
    intro: {
        color: "#fff",
        fontSize: "1.2rem",
        lineHeight: 1.8
    },

    image: {
        width: "50%"
    },

    tab: {
        letterSpacing: 2,
        backgroundColor:"#1976D2"
    }

    // logoWrapper: {
    //     textAlign: "center",
    //     // border: "1px solid red",
    //     marginBottom: -25,
    //     zIndex:-100
    // },

    // logo: {
    //     maxWidth: 90,
    //     zIndex:-100
    // },
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
        return (
            <div className={classes.container}>
                <div className={classes.upper}>
                    <div className={classes.overlay} />
                    <div className={classes.inner}>
                        <h2 className={classes.title}>什么是旅行？</h2>
                        <p className={classes.intro}>
                            在携U行的定义里，旅行就是像本地人一样去体验，热爱一个城市。没有走马观花，没有强迫消费，有的只是涤荡灵魂，深入骨髓的文化撞击，和地道真实的生活体验。
                            携U行的唯一使命就是去创造毕生难忘的深度体验。
                        </p>
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
                    <div className={classes.loginBtnGroup}>
                        <Button className={classes.button}>用微信登陆</Button>
                        <Button className={classes.button}>用百度登陆</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(OpenPage);