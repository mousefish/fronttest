import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../Actions";

const styles = {
    wrapper: {
        width: "95vw",
        maxWidth: 600,
        margin: "auto",
        marginBottom: 50,
        marginTop: 20
    }
};
class Activity extends Component {
    componentWillMount() {
        const activityId = this.props.match.params.activityId;
        this.props.fetchOneActivity(activityId);
    }

    render() {
        const { activity } = this.props;
        if(!activity){
            return <div>loading</div>
        }

        return (
            <div style={styles.wrapper}>
              This is Activity <span>{activity.id}</span>
                <ul>
                    <li>{activity.theme}</li>
                    <li>{activity.location}</li>
                    <li>{activity.story}</li>
                    <Link to={`/user/${activity.userId}`}>
                    来看看<li>{activity.username}</li>的档案</Link>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
     return { activity:state.ActivityDataReducer.activity }
}

export default connect(mapStateToProps, actions)(Activity);