import React, { Component } from "react";
import * as actions from "../Actions";
import moment from "moment";
import "moment/locale/zh-cn.js";
import { connect } from "react-redux";
import classNames from "classnames";
import config from "../config/config";
import Star from "material-ui-icons/Star";
import { withStyles } from "material-ui/styles";
import PageHeader from "./PageHeader";
import Avatar from "material-ui/Avatar";
import Stars from "./Stars";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";
// Data [ { id: 5,
//   feedback: 'pretty good!',
//   numOfStars: 4,
//   userId: 6,
//   createdAt: 2018-01-10T03:33:40.722Z,
//   updatedAt: 2018-01-10T03:33:40.722Z,
//   activityId: 1,
//   username: 'Robert' },
// { count: 1 },
// { average: 4 } ]

const styles = {
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },
    avatar: {
        margin: "10px 10px 10px 0"
    },

    bigAvatar: {
        width: 40,
        height: 40,
        display: "inline-block"
    },

    ratingIndex: {
        padding: 5,
        listStyle: "none"
    },
    comment: {
        borderBottom: "1px solid #BDBDBD",
        padding: 10
    },
    feedback: {
        // border:"1px solid red",
        marginTop: 10,
        marginBottom: 10
    },
    time:{
     float: "right",
     fontSize: 12
    }
};

class RatingIndex extends Component {
    componentWillMount() {
        const { activityId } = this.props.match.params;
        this.props.fetchRatings(activityId);
    }

    renderStars(num) {
        let result = [];
        for (let i = 0; i < num; i++) {
            result.push(<Star key={i} />);
        }

        return result;
    }

    renderItems(ratings) {
        const { classes } = this.props;
        if (!ratings || ratings.length == 0) {
            return (
                <div key={0} className={classes.comment}>
                    暂时没有评论
                </div>
            );
        } else {
            return ratings.map(item => {
                return (
                    <li className={classes.comment} key={item.userId}>
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
                                className={classNames(
                                    classes.avatar,
                                    classes.bigAvatar
                                )}
                            />
                            <span style={{ verticalAlign: 20 }}>
                                {item.username}：{this.renderStars(item.numOfStars)}
                            </span>
                        </div>
                        <div className={classes.feedback}>
                            {item.feedback ? item.feedback : "无"}
                        </div>
                        <div className={classes.time}>
                            {moment(item.createdAt).format("LLL")}发布
                        </div>
                        <div style={{ clear: "both" }} />
                    </li>
                );
            });
        }
    }
    render() {
        const { ratings, classes } = this.props;
        return (
            <div>
                <PageHeader history={this.props.history} title="活动评论" />
                <ul className={classes.ratingIndex}>
                    {this.renderItems(ratings)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.RatingReducer.ratings);
    return {
        ratings: state.RatingReducer.ratings
    };
};

export default connect(mapStateToProps, actions)(
    withStyles(styles)(RatingIndex)
);