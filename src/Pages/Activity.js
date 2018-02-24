import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import * as actions from "../Actions";
import RatingForm from "./RatingForm";
import RatingIndex from "./RatingIndex";
import RatingSummary from "./RatingSummary";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PageHeader from "./PageHeader";

const styles = {};

class Activity extends Component {
    componentWillMount() {
        const activityId = this.props.match.params.activityId;
        this.props.fetchOneActivity(activityId);
    }

    render() {
        const activityId = this.props.match.params.activityId;
        const { classes, activity, message, ratings } = this.props;
        if (!activity) {
            return <div>loading</div>;
        }
        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="活动" />
                <div className="flex-inner-wrapper">
                    <RatingSummary activityId={activityId} />
                    <ul className="activity-info">
                        <li className="activity">
                            <div>活动主题： </div>
                            <div>{activity.theme}</div>
                        </li>
                        <li className="activity">
                            <div>活动地点：</div>
                            <div>{activity.location}</div>
                        </li>
                        <li className="activity">
                            <div>活动开始时间：</div>
                            <div>{activity.departdate}</div>
                        </li>
                        <li className="activity" style={{ marginBottom: 10 }}>
                            <div>活动结束时间</div>
                            <div>{activity.finishdate}</div>
                        </li>
                        <li style={{ marginBottom: 10 }}>
                            <h4 className="category-title">
                                我在{activity.location.split(" ")[0]}的故事
                            </h4>
                            <div>{activity.story}</div>
                        </li>
                        <li
                            style={{
                                textAlign: "center",
                                marginBottom: 10,
                                fontSize: "1.2rem"
                            }}
                        >
                            <Link
                                to={`/user/${activity.userId}`}
                                className="unlink"
                            >
                                来看看{activity.username}的档案
                            </Link>
                        </li>
                    </ul>
                </div>

                <RatingForm activityId={activityId} />
                <RatingIndex activityId={activityId} />
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