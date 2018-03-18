import React, { Component } from "react";
import * as actions from "../Actions";
import { connect } from "react-redux";
import Star from "material-ui-icons/Star";
import { withStyles } from "material-ui/styles";
import PageHeader from "./PageHeader";
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
        marginTop: 10
    }
};

class RatingIndex extends Component {
    componentDidMount() {
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
            return <div key={0} className={classes.comment}>暂时没有评论</div>;
        } else {
            return ratings.map(item => {
                return (
                    <li className={classes.comment} key={item.userId}>
                        <div>
                            用户 {item.userId}：{this.renderStars(item.numOfStars)}
                        </div>
                        <div className={classes.feedback}>
                            {item.feedback ? item.feedback : "无"}
                        </div>
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
    return {
        ratings: state.RatingReducer.ratings
    };
};

export default connect(mapStateToProps, actions)(
    withStyles(styles)(RatingIndex)
);