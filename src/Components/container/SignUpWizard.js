import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import WizardFirst from "../presenter/WizardFirst";
import WizardSecond from "../presenter/WizardSecond";
import WizardThird from "../presenter/WizardThird";

class SignUpWizard extends Component {
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
    console.log(values);
    this.props.userSignupRequest(values, this.props.history);
  }

  // Use this function to show the error message from backend
  renderErrorMsg() {
    if (this.props.errorMsg) {
      return (
        <div style={{ width: "100%", color: "red", textAlign:'center' }}>{this.props.errorMsg}</div>
      );
    }
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
        {this.renderErrorMsg()}
      </div>
    );
  }
}

SignUpWizard.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { errorMsg: state.UserAuth.error };
};

export default connect(mapStateToProps, actions)(withRouter(SignUpWizard));