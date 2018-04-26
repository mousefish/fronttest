import React from "react";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";

const styles = theme => ({
    button: {
        lineHeight: 0.6,
        height: 60,
        borderRadius: 0,
        fontSize: "1.5rem",
        margin:0,
        color:"#fff"
    },
});

const Buttons = props => {
    const { width, classes, color, type, text, onClick } = props;
    return (
        <Button
            className={classes.button}
            style={{ background: color || "#1976D2", width: width || "" }}
            type={type || ""}
            raised
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default withStyles(styles)(Buttons);