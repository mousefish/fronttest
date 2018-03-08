import React, { Component } from "react";
import * as actions from "../Actions";
import { connect } from "react-redux";

class UserActivities extends Component {
    componentWillMount() {
        const userId = this.props.match.params.userId;
        this.props.fetchUserActivities(userId);
    }

    renderUserActivities(userActivities) {
        return userActivities.map(item => {
            return <li key={item.id}>{item.theme}</li>;
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