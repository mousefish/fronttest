import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import * as actions from "../../Actions";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import Button from "material-ui/Button";

import WizardFirst from "./WizardFirst";
import WizardSecond from "./WizardSecond";
import WizardThird from "./WizardThird";

const styles = theme => ({
    wrapper: {
        width: "90%",
        margin: "auto",
        marginBottom: 50,
        marginTop: 20
    }
});

class AddActivity extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            page: 1
        };
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 });
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 });
    }

    handleSubmit(values) {
        const images = [];
        for(let i = 1 ; i <= 8; i ++){
            if(values['img'+i]){
                images.push(values['img'+i]);
            }
        }
        let { location,departdate,finishdate, budget,services,story } = values;
        console.log("images",images);
        const modifiedValues={
            location,
            departdate,
            finishdate,
            budget,
            services,
            story,
            images
        };
        this.props.submitActivityData(modifiedValues, this.props.history);
    }

    // Use this function to show the error message from backend
    renderErrorMsg() {
        if (this.props.errorMsg) {
            return <div>{this.props.errorMsg}</div>;
        }
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <div>
                {page === 1 && (
                    <WizardFirst
                        onSubmit={this.nextPage}
                        title={
                            this.props.location.state.isActivity ? (
                                "发布新活动"
                            ) : (
                                "发布新需求"
                            )
                        }
                    />
                )}
                {page === 2 && (
                    <WizardSecond
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                    />
                )}
                {page === 3 && (
                    <WizardThird
                        previousPage={this.previousPage}
                        onSubmit={this.handleSubmit}
                    />
                )}
                // {this.renderErrorMsg()}
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return { errorMsg: state.UserAuth.error };
// };

AddActivity.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default connect(null, actions)(withRouter(AddActivity));