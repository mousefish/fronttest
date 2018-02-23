import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";

import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";

import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";

import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PersonProfileDetails from "../Components/container/PersonProfileDetails";
import PageHeader from "./PageHeader";
import * as actions from "../Actions";

const styles = theme => ({
    image: {
        width: "100%",
        maxWidth: "100%",
        height: 224,
        marginBottom: 40
    },

    innerWrapper: {
        textAlign: "center"
    },

    button: {
        margin: theme.spacing.unit,
        width: "95%"
    },

    smallButton: {
        margin: theme.spacing.unit,
        width: "55%"
    },

    root: {
        margin: theme.spacing.unit,
        width: "95%",
        padding: 15
    },
    flex: {
        flex: 1
    }
});

class MyInfo extends Component {
    state={
        user:{}
    }
    componentWillMount(){
        let user = JSON.parse(localStorage.getItem("user"));
        if(user){
            this.setState({
                user
            });
        }
    }

    render() {
        const { classes } = this.props;
        const { user } = this.state;
        if (user.size === 0) {
            return <div>你无权访问该页面！</div>;
        }

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="我的信息" />
                <PersonProfileDetails profile={user} />
                <div className="flex-inner-wrapper customized-align">
                    <Link to={`/story/${user.id}`} className="unlink">
                        <span style={{ fontSize: "1.5rem" }}>我在这座城市的故事</span>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer
    };
};

export default connect(mapStateToProps, actions)(
    withRouter(withStyles(styles)(MyInfo))
);