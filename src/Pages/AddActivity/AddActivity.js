import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import PropTypes from "prop-types";
import * as actions from "../../Actions";
import { withRouter } from "react-router";
import Button from "material-ui/Button";

import WizardFirst from "./WizardFirst";
import WizardSecond from "./WizardSecond";
import WizardThird from "./WizardThird";

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
        console.log("values", values);
        this.props.submitActivityData(values, this.props.history);
    }

    render() {
        const { onSubmit, match: { params: { version } } } = this.props;
        const { page } = this.state;
        return (
            <div>
                {page === 1 && (
                    <WizardFirst version={version} onSubmit={this.nextPage} />
                )}
                {page === 2 && (
                    <WizardSecond
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}
                        version={version}
                    />
                )}
                {page === 3 && (
                    <WizardThird
                        previousPage={this.previousPage}
                        onSubmit={this.handleSubmit}
                        version={version}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        msg: state.ActivityReducer.message
    };
};

// AddActivity.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// };

export default connect(mapStateToProps, actions)(withRouter(AddActivity));