import React from "react";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import pic from "../Assets/Images/profile.jpg";

const styles = theme => ({
    avatar: {
        width: 70,
        height: 70
    },

    myHeader: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        padding: 15,
        marginBottom: 5,
        backgroundColor: "#1976D2",
        color: "#fff"
    },

    myHeaderRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 20,
        fontSize: "1.2rem"
    }
});

const MyAccountLoggedinHeader = props => {
    const { classes } = props;
    return (
        <div className={classes.myHeader}>
            <Avatar alt="profile" src={pic} className={classes.avatar} />
            <div className={classes.myHeaderRight}>{props.user.mail}</div>
        </div>
    );
};

export default withStyles(styles)(MyAccountLoggedinHeader
    );