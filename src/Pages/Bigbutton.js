import React from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = theme => ({
    button: {
        width: "95%"
    }
});

const Buttons = props => {
    const { width, classes, color, type, text, onClick } = props;
    return (
        <Button
            className={classes.button}
            style={{ background: color || "#1976D2", width: width || "" }}
            type={type || ""}
            raised
            id="btn"
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default withStyles(styles)(Buttons);