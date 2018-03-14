import React from "react";
import { withStyles } from "material-ui/styles";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

const styles = theme => ({
    item: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottom: "1px solid #BDBDBD",
        backgroundColor: "#fff",
        color: "#757575",
        fontSize:"1.1rem"
    }
});


const MyAccountItem = props => {
    const { item, classes, history, onClick } = props;
    return (
        <li
            className={classes.item}
            onClick={()=> onClick()}
        >
            <span>{item}</span>
            <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
        </li>
    );
};

export default withStyles(styles)(MyAccountItem);