import React, { Component } from "react";
import * as actions from "../Actions";
import { connect } from "react-redux";
import Star from "material-ui-icons/Star";
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

    renderStars(num){
        let result = []
        for(let i = 0 ; i < num; i++){
            result.push(<Star key={i} />)
        }

        return result
    }

    renderItems(ratings) {
        if (!ratings || ratings.length == 0) {
            return <div>暂时没有评论</div>;
        } else {
            return ratings.map(item => {
                return (
                    <li className="comment" key={item.userId}>
                           用户 {item.userId} 说：<span>{this.renderStars(item.numOfStars)}</span>
                        <div>{item.feedback}</div>
                    </li>
                );
            });
        }
    }
    render() {
        const { ratings } = this.props;
        return (
            <div className="flex-inner-wrapper">
                <ul className="activity-info">{this.renderItems(ratings)}</ul>
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