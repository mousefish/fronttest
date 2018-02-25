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

class PrivateBasicInfo extends Component {

    renderPage(){
        let originalUser = localStorage.getItem("user");
        let user;
        if(originalUser){
           user=JSON.parse(originalUser);
           return (
             <div>
                 <PageHeader history={this.props.history} title="我的信息" />
                <PersonProfileDetails profile={user} />
             </div>
           )
        }else{
            return <div>无权访问</div>
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="wrapper">
                {this.renderPage()}
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
    withRouter(withStyles(styles)(PrivateBasicInfo))
);