import React from "react";
import { withStyles } from "material-ui/styles";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

const styles = theme => ({
    item: {
        display:"flex",
        flexFlow:"row nowrap",
        justifyContent:'space-between',
        alignItems:"center",
        padding: 10,
        borderBottom: "1px solid lightgrey",
        backgroundColor: "#fff",
        color:"grey"
    }
});
const MyItem = props => {
    const { item, classes } = props
    return (
        <li key={item} className={classes.item}>
            <span>{item}</span>
            <KeyboardArrowRight style={{color: "lightgrey" }}/>


        </li>
    );
};


export default withStyles(styles)(MyItem);
