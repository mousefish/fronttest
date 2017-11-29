import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../Actions";
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import WizardFirst from '../presenter/wizardFirst';
import WizardSecond from '../presenter/wizardSecond';
import WizardThird from '../presenter/wizardThird';


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

  handleSubmit(values){
    console.log(values);
    this.props.userSignupRequest(
      values,
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
    )
  }
}

SignUpWizard.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default connect(null, actions)(withRouter(SignUpWizard));

