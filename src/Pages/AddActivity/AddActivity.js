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
        let depart = new Date(values.departdate.replace(/年|月|日/g, "/"));
        let finish = new Date(values.finishdate.replace(/年|月|日/g, "/"));
        let departUTC = depart.toUTCString();
        let finishUTC = finish.toUTCString();
        this.props.submitActivityData(
            { ...values, departdate: departUTC, finishdate: finishUTC },
            this.props.history
        );
    }

    render() {
        const { onSubmit } = this.props;
        const { page } = this.state;
        return (
            <div>
                {page === 1 && <WizardFirst onSubmit={this.nextPage} />}
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