import React from "react";
import { withStyles } from "material-ui/styles";
import config from "../config/config";
import Avatar from "material-ui/Avatar";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";

const styles = theme => ({
    avatar: {
        width: 70,
        height: 70
        // boxShadow:"2px 2px 5px #fff"
    },

    myHeader: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        padding: 15,
        marginBottom: 5,
        background:
            "linear-gradient(to bottom right, #2196F3 0%, #0D47A1 100%)",
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
    const { classes, imageurl } = props;
    return (
        <div className={classes.myHeader}>
            <Avatar
                alt="user"
                src={imageurl ? config.BUCKET_URL + imageurl : defaultAvatar}
                className={classes.avatar}
            />
            <div className={classes.myHeaderRight}>欢迎你！{props.userName}</div>
        </div>
    );
};

export default withStyles(styles)(MyAccountLoggedinHeader);