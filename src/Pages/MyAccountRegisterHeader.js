import React from "react";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
    registerHeader: {
        display:"flex",
        flexFlow:"row nowrap",
        justifyContent:"space-around",
        padding: 15,
        marginBottom: 5,
        background: "linear-gradient(to bottom right, #2196F3 0%, #0D47A1 100%)",
    },
    button: {
        width:200,
        padding: 10,
        borderRadius: 45,
        border: "1px solid #1976D2",
        backgroundColor: "#fff",
        color: "#1976D2",
        fontSize: "1rem"
    }
});

const MyAccountRegisterHeader = props => {
    const { classes } = props;
    return (
        <div className={classes.registerHeader}>
            <Link to="/login" className="unlink">
                <button className={classes.button}>登陆/创建新账户</button>
            </Link>
        </div>
    );
};

export default withStyles(styles)(MyAccountRegisterHeader);