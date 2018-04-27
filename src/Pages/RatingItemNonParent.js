import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Avatar from "material-ui/Avatar";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";
import classNames from "classnames";
import moment from "moment";
import "moment/locale/zh-cn.js";
import config from "../config/config";

const styles = {
    subComments: {
        fontSize: 12,
        marginLeft: 40,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#EEEEEE",
        borderBottom: "1px solid #E0E0E0"
    },
    header: {
        // border:"1px solid red",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "flex-start"
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
    },
    subtime: {
        float: "right",
        fontSize: 10
    },

    reply: {
        padding: "15px 0"
    }
};
const RatingItemNonParent = props => {
    const { classes, item, index, onClick } = props;
    return (
        <div className={classes.subComments} key={index}>
            <div className={classes.header}>
                <Avatar
                    alt="rater pic"
                    src={
                        item.imageurl ? (
                            config.BUCKET_URL + item.imageurl
                        ) : (
                            defaultAvatar
                        )
                    }
                    className={classNames(classes.avatar)}
                />
                <div className={classes.reply}>
                    <Link to={`/user/${item.userId}`} className="unlink">
                        {item.username}
                    </Link>
                    {item.parentId === item.replyToId ? (
                        ""
                    ) : (
                        <span>
                            回复@{
                                <span className="unlink">
                                    {item.whomToReply}
                                </span>
                            }
                        </span>
                    )}：{item.feedback}
                </div>
            </div>
            <div className={classes.subtime}>
                {moment(item.createdAt).format("LLL")}发布 |{" "}
                <span className="unlink" onClick={onClick}>
                    回复
                </span>
            </div>
            <div style={{ clear: "both" }} />
        </div>
    );
};

export default withStyles(styles)(RatingItemNonParent);