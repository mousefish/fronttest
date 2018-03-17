import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import logo from "../Assets/Images/logo.jpg";
import trip from "../Assets/Images/trip.jpg";
import LoginForm from "../Components/container/LoginForm";

const styles = {
    container: {
        // border: "1px solid red",
        width: "100%",
        maxWidth: 600,
        margin: "auto"
    },

    upper: {
        position: "relative",
        padding: "20px 20px 10px 20px",
        marginBottom: 20,
        background:
            "linear-gradient(to bottom right, #0D47A1 0%, #2196F3 100%)",
        marginBottom: 50
    },

    logoWrapper: {
        textAlign: "center",
        // border: "1px solid red",
        marginBottom: -15
    },

    logo: {
        maxWidth: 90
    },

    title: {
        color: "#fff",
        marginBottom:20
    },
    intro: {
        color: "#fff",
        fontSize: "1.2rem",
        lineHeight: 1.6
    }
};
class OpenPage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.upper}>
                    <h1 className={classes.title}>什么是旅行？</h1>
                    <p className={classes.intro}>
                        在携U行的定义里，旅行就是像本地人一样去体验，热爱一个城市。没有走马观花，没有强迫消费。有的只是涤荡灵魂，深入骨髓的文化撞击，和地道真实的生活体验。
                        携U行的唯一使命就是去创造毕生难忘的深度体验。
                    </p>
                </div>

                <div className={classes.logoWrapper}>
                    <img className={classes.logo} src={logo} />
                </div>

                <LoginForm />
            </div>
        );
    }
}

export default withStyles(styles)(OpenPage);