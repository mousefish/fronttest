import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";

class RatingSummary extends Component {
    componentWillMount() {
        const { activityId } = this.props;
        this.props.fetchRatingSummary(activityId);
    }
    renderSummary() {
        const { summary } = this.props;
        if (!summary) {
            return <div>loading</div>;
        }
        return (
            <div style={{textAlign:"center", marginBottom:20}}>
                共<span className="number-emphasized">
                    {summary.numOfRater}
                </span>人评价，平均<span className="number-emphasized">
                    {summary.averageScore}
                </span>星
            </div>
        );
    }

    render() {
        return <div>{this.renderSummary()}</div>;
    }
}

const mapStateToProps = state => {
    return {
        summary: state.RatingReducer.summary
    };
};

export default connect(mapStateToProps, actions)(RatingSummary);