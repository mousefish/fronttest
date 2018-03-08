import React, { Component } from "react";
import * as actions from "../Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class UserActivities extends Component {
    componentWillMount() {
        const userId = this.props.match.params.userId;
        this.props.fetchUserActivities(userId);
    }

    renderUserActivities(userActivities) {
        return userActivities.map(item => {
            return (
                <Link
                    to={`/activity/${item.id}`}
                    className="unlink"
                    key={item.id}
                >
                    <li key={item.id}>{item.theme}</li>
                </Link>
            );
        });
    }

    render() {
        return (
            <div>{this.renderUserActivities(this.props.userActivities)}</div>
        );
    }
}

const mapStateToProps = state => {
    console.log("here", state.ActivityReducer.userActivities);
    return {
        userActivities: state.ActivityReducer.userActivities
    };
};
export default connect(mapStateToProps, actions)(UserActivities);