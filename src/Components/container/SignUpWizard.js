import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import WizardFirst from "../presenter/WizardFirst";
import WizardSecond from "../presenter/WizardSecond";
import WizardThird from "../presenter/WizardThird";

class SignupWizard extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  // the email is not valid, then the user cannot go to the next page!
  verifyEmail(value) {
    let p = new Promise((resolve, reject) => {
      resolve(this.props.verifySignupEmail({ email: value.email }));
    });
    return p.then(() => {
      if (this.props.canGo) {
        this.nextPage();
      }
    });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleSubmit(values) {
    console.log("submit", values);
    this.props.userSignupRequest(values, this.props.history);
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && (
          <WizardFirst
            history={this.props.history}
            onSubmit={this.verifyEmail}
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
    errorMsg: state.UserAuth.error,
    canGo: state.UserAuth.go
  };
};

export default connect(mapStateToProps, actions)(withRouter(SignupWizard));