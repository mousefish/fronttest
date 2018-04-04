import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import backgroundWall from "../Assets/Images/backgroundWall.png";

const styles = {
    container: {
        width: "100%",
        maxWidth: 600,
        margin: "auto"
    },

    upper: {
        position: "relative",
        display:"flex",
        flexFlow:"column",
        justifyContent:"center",
        alignItems:"center",
        height: 350,
        marginBottom: 10,
        background: `url(${backgroundWall})`,
        padding: "10px 10px 10px 10px",
        textAlign: "center",
        margin: "auto"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,80,0.6)",

    },
    inner:{
      zIndex:1000,
      width:"100%",
      margin:"auto",

    },

    image: {
        width: "50%"
    },

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

    title: {
        color: "#fff",
        marginBottom: 20,
         fontWeight:"bold"

    },
    intro: {
        color: "#fff",
        fontSize: "1.2rem",
        lineHeight: 1.8,
    }
};
class OpenPage extends Component {
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
            </div>
        );
    }
}

export default withStyles(styles)(OpenPage);