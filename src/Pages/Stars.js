import React, { Component } from "react";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import StarHalf from "material-ui-icons/StarHalf";
import { withStyles } from "material-ui/styles";

const style = {
    icon: {
        width: 15,
        height: 15,
        verticalAlign: -2
    },

};

const renderStar = (num, icon, props) => {
    const classes = { props };
    const starWrapper = [];

    for (let i = 0; i < 5; i++) {
        if (num - i > 0 && num - i < 1) {
            starWrapper[i] = (
                <StarHalf
                    key={i}
                    className={icon}
                />
            );
        } else if (i < num) {
            starWrapper[i] = (
                <Star
                    key={i}
                   className={icon}
                />
            );
        } else {
            starWrapper[i] = (
                <StarBorder
                    key={i}
                   className={icon}
                />
            );
        }
    }
    return starWrapper;
};

const star = props => {
    return <span>{renderStar(props.num, props.classes.icon, props)}</span>;
};

export default withStyles(style)(star);