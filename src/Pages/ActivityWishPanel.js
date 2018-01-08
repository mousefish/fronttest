import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import bg from "../Assets/Images/bg.jpg";
import AddActivity from "./AddActivity/AddActivity";
import AddWish from "./AddWish/AddWish";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: "95%",
        padding: 15
    },

    wrapper: {
        width: "90%",
        margin: "auto",
        marginBottom: 50,
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },

    imageWrapper: {
        width: "100%",
        maxWidth: "100%",
        maxHeight: "50%"
    },

    buttonWrapper: {
        width: "80%",
        marginBottom: 20
    },

    space: {
        marginTop: 50
    },

    button: {
        width: "100%",
        padding: 15,
        fontSize: 16
    }
});

class ActivityWishPanel extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
                <img src={bg} alt="chengdu" className={classes.imageWrapper} />
                <Link
                    to="/addActivity"
                    className={classNames(classes.buttonWrapper, classes.space)}
                >
                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                    >
                        发布新活动
                    </Button>
                </Link>

                <Link
                    to="/addWish"
                    className={classes.buttonWrapper}
                >
                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                    >
                        发布新愿望
                    </Button>
                </Link>
            </div>
        );
    }
}

export default withStyles(styles)(ActivityWishPanel);