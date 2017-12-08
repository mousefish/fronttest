import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import PropTypes from 'prop-types';
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
    },

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

    handleSubmit(values){
    console.log(values);
    this.props.submitActivityData(
      values,
      this.props.history
    );
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


const mapStateToProps = state => {
  return { errorMsg: state.UserAuth.error };
}

AddActivity.propTypes = {
  onSubmit: PropTypes.func.isRequired
}


export default connect(mapStateToProps, actions)(withRouter(AddActivity));