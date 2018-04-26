import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import AddActivity from "./AddActivity/AddActivity";
import AddWish from "./AddWish/AddWish";
import logo from "../Assets/Images/logo.jpg";
import PageHeader from "./PageHeader";
import Bigbutton from "./Bigbutton";
const styles = theme => ({
    logo: {
        flex: 1,
        width: "30%",
        maxWidth: "100%",
        margin: "auto",
        marginBottom: 45
    },
    instruction: {
        width: "95%",
        margin: "auto"
    },
    title: {
        fontWeight: "bold"
    },
    logoWrapper: {
        marginTop: 30,
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
                    <Bigbutton text="发布新活动" />
                </Link>
                <Link to="/addWish" className="unlink centralize-button">
                    <Bigbutton text="发布新愿望" color="#43A047" />
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(ActivityWishPanel);