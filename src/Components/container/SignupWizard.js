import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import WizardSecond from "../presenter/WizardSecond";
import WizardThird from "../presenter/WizardThird";

class SignupWizard extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      page: 1,
      activeStep: 0
    };
  }
  nextPage() {
    this.setState({
      page: this.state.page + 1,
      activeStep: this.state.activeStep + 1
    });
  }

  previousPage() {
    this.setState({
      page: this.state.page - 1,
      activeStep: this.state.activeStep - 1
    });
  }

  handleSubmit(values) {
    if (Object.keys(values).length === 0) {
      this.props.history.push("/activity");
      return null;
    }
    // console.log("submit", values);
    this.props.completeUserProfile(values, this.props.history);
  }

  render() {
    const { onSubmit } = this.props;
    const { page, activeStep } = this.state;
    return (
      <div>
        {page === 1 && (
          <WizardSecond
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
            activeStep={activeStep}
          />
        )}
        {page === 2 && (
          <WizardThird
            previousPage={this.previousPage}
            activeStep={activeStep}
            onSubmit={this.handleSubmit}
          />
        )}

        <div className="input-error" style={{ textAlign: "center" }}>
          {this.props.errorMsg}
        </div>
      </div>
    );
  }
}

// SignUpWizard.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };
const mapStateToProps = state => {
  return {
    errorMsg: state.UserAuth.errorSignup
  };
};

export default connect(mapStateToProps, actions)(withRouter(SignupWizard));