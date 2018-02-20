import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../Actions";
import RatingForm from "./RatingForm";
import RatingIndex from "./RatingIndex";
import RatingSummary from "./RatingSummary";


class Activity extends Component {
    componentWillMount() {
        const activityId = this.props.match.params.activityId;
        this.props.fetchOneActivity(activityId);
    }

    render() {
        const { activity, message, ratings, } = this.props;

        if (!activity) {
            return <div>loading</div>;
        }

        return (
            <div className="wrapper">
                This is Activity <span>{activity.id} (add style later)</span>
                <ul>
                    <li>{activity.theme}</li>
                    <li>{activity.location}</li>
                    <li>{activity.story}</li>
                    <Link to={`/user/${activity.userId}`}>
                        来看看<li>{activity.username}</li>的档案
                    </Link>
                </ul>
                <RatingSummary activityId={activity.id} />
                <RatingForm activityId={activity.id} />
                <RatingIndex activityId={activity.id} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        activity: state.ActivityReducer.activity
    };
};

export default connect(mapStateToProps, actions)(Activity);