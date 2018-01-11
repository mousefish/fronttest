import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";

class RatingSummary extends Component {

    componentWillMount(){
        const { activityId } = this.props;
        this.props.fetchRatingSummary(activityId);
    }

    renderSummary(){
        const { summary } = this.props;
        if(!summary) {
           return <div>loading</div>
        }
        return <div>共{summary.numOfRater}人 平均{summary.averageScore}星</div>
    }

    render(){
        return(
        <div>{this.renderSummary()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        summary: state.RatingReducer.summary,
    }
}

export default connect(mapStateToProps, actions)(RatingSummary);
