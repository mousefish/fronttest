import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
import { withStyles } from "material-ui/styles";
import OpenInNew from "material-ui-icons/OpenInNew";
import Stars from "./Stars";

const styles = {
    summaryPanel: {
        // border:"1px solid red",
        // textAlign:"center"
    },
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },
};
class RatingSummary extends Component {
    componentWillMount() {
        const { activityId } = this.props;
        this.props.fetchRatingSummary(activityId);
    }

    renderSummary() {
        const { summary, classes } = this.props;
        if (!summary) {
            return <div>loading</div>;
        }
        return (
            <span className={classes.summaryPanel}>
                {summary.numOfRater}人评价&nbsp;{" "}
                <Stars num={summary.averageScore} />&nbsp;
                <OpenInNew className={classes.icon} />
            </span>
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

export default connect(mapStateToProps, actions)(
    withStyles(styles)(RatingSummary)
);