import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { withStyles } from "material-ui/styles";
import * as actions from "../Actions";
import RatingForm from "./RatingForm";
import RatingIndex from "./RatingIndex";
import RatingSummary from "./RatingSummary";


const styles = theme => ({
    wrapper: {
        width: "95vw",
        maxWidth: 600,
        margin: "auto",
        marginBottom: 50,
        marginTop: 20
    },

});

class Activity extends Component {
    componentWillMount() {
        const activityId = this.props.match.params.activityId;
        this.props.fetchOneActivity(activityId);
    }

    render() {
        const { classes } = this.props;
        const { activity } = this.props;
        const { message } = this.props;
        const { ratings } = this.props;

        if (!activity) {
            return <div>loading</div>;
        }

        return (
            <div className={classes.wrapper}>
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

export default connect(mapStateToProps, actions)(withStyles(styles)(Activity));