import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import Stars from "./Stars";
import Star from "material-ui-icons/Star";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";
import classNames from "classnames";
import config from "../config/config";

const styles = {
    comment: {
        borderBottom: "1px solid #BDBDBD",
        padding: "5px 0"
    },
    feedback: {
        // border:"1px solid red",
        marginBottom: 10,
        marginLeft: 45
    },
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },
    avatar: {
        width: 30,
        height: 30,
        margin: "10px 5px 5px 0",
        display: "inline-block"
    },

    bigAvatar: {
        width: 40,
        height: 40,
        display: "inline-block"
    },
    time: {
        float: "right",
        fontSize: 12
    }
};

const renderStars = num => {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push(<Star key={i} />);
    }

    return result;
};


const RatingItemParent = props => {
    const { classes, item, onClick, version } = props;
    return (
        <li className={classes.comment} key={item.id}>
            <div>
                <Avatar
                    alt="rater pic"
                    src={
                        item.imageurl ? (
                            config.BUCKET_URL + item.imageurl
                        ) : (
                            defaultAvatar
                        )
                    }
                    className={classNames(classes.avatar, classes.bigAvatar)}
                />
                <span style={{ verticalAlign: 18 }}>
                    <Link to={`/user/${item.userId}`} className="unlink">
                        {item.username}
                    </Link>：{renderStars(item.numOfStars)}
                </span>
            </div>
            <div className={classes.feedback}>
                {item.feedback ? item.feedback : "无"}
            </div>
            <div className={classes.time}>
                {item.createdAt}发布 |{" "}
                <span className="unlink" onClick={onClick}>
                    回复
                </span>
            </div>
            <div style={{ clear: "both", marginBottom: 10 }} />
            {props.children}
        </li>
    );
};

export default withStyles(styles)(RatingItemParent);