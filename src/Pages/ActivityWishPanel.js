import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import bg from "../Assets/Images/bg.jpg";
import AddActivity from "./AddActivity/AddActivity";
import AddWish from "./AddWish/AddWish";
import logo from "../Assets/Images/logo.jpg";
import PageHeader from "./PageHeader";

const styles = theme => ({
    button: {
        width: "100%"
    },

    blueBtn: {
        backgroundColor: "#1976D2"
    },
    greenBtn: {
        backgroundColor: "#43A047"
    },

    logo: {
        flex: 1,
        width: "40%",
        maxWidth: "100%",
        margin: "auto",
        marginBottom: 65
    },
    title: {
        fontWeight: "bold"
    },
    logoWrapper: {
        textAlign: "center"
    }
});

class ActivityWishPanel extends Component {
    render() {
        const { classes, history } = this.props;

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="发布活动或者愿望" />
                <div className={classes.logoWrapper}>
                    <img src={logo} alt="logo" className={classes.logo} />
                </div>
                <div className={classes.instruction}>
                    <h4 className={classes.title}>发布须知：</h4>
                    <p>发布活动或者愿望意味着您了解必须承担的责任，并将遵守携U行的所有法律条款。</p>
                </div>
                <Link to="/addActivity" className="unlink centralize-button">
                    <Button
                        raised
                        className={classNames(classes.button, classes.blueBtn)}
                        id="btn"
                    >
                        发布新活动
                    </Button>
                </Link>
                <Link to="/addWish" className="unlink centralize-button">
                    <Button
                        raised
                        className={classNames(classes.button, classes.greenBtn)}
                        id="btn"
                    >
                        发布新愿望
                    </Button>
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(ActivityWishPanel);