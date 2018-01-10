import React, { Component } from "react";
import * as actions from "../Actions";
import { connect } from "react-redux";
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

class RatingIndex extends Component {
    componentDidMount() {
        const { activityId } = this.props;
        this.props.fetchRatings(activityId);
    }

    renderItems(ratings) {
        if (!ratings || ratings.length == 0) {
            return <div>暂时没有评论</div>;
        } else {
            return ratings.map(item => {
                return (
                    <li key={item.userId}>
                        <div>
                            User {item.userId} gave{" "}
                            <span>{item.numOfStars} stars</span>
                        </div>
                        <div>{item.feedback}</div>
                    </li>
                );
            });
        }
    }
    render() {
        const { ratings } = this.props;
        return (
            <div>
                <h3>------------以下显示评论区----------------</h3>
                <ul>{this.renderItems(ratings)}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ratings: state.RatingReducer.ratings
    };
};

export default connect(mapStateToProps, actions)(RatingIndex);