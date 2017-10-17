import React, { Component } from "react";
import classnames from "classnames";
import { loginValidation } from "../../Utlity/commonValidation";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../Actions";
import RegisterField from "./RegisterField";

class LoginComp extends Component {
  // Pass the 3 values to action creator

  submitForm(values) {
    const { username, password } = values;
    // console.log('username',username);
    this.props.userLogin({ username, password }, this.props.history);
  }

  renderFields() {
    return [
      <Field
        key="Username"
        name="username"
        type="text"
        component={RegisterField}
        label="Username"
      />,

      <Field
        key="Password"
        name="Password"
        type="password"
        component={RegisterField}
        label="Password"
      />
    ];
  }

  // Use this function to show the error message from backend
  renderErrorMsg() {
    if (this.props.errorMsg) {
      return <div className="alert alert-danger">{this.props.errorMsg}</div>;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
          {this.renderFields()}
          {this.renderErrorMsg()}
          <button type="submit" className="btn waves-effect waves-light">
            Login
          </button>
        </form>
      </div>
    );
  }
}

// redux form validation: values are by default passed to the function.
// If errors list is empty, there are no errors to show up, otherwise, the errors will show up.

const validate = values => {
  // console.log(values);
  const errors = {};
  if (!values.username) {
    errors.username = "Username required.";
  }
  if (!values.email) {
    errors.email = "Email required.";
  } else if (
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Password required.";
  }

  return errors;
};

const mapStateToProps = state => {
  return { errorMsg: state.UserAuth.error };
};

LoginComp = reduxForm({
  form: "loginform",
  validate
})(LoginComp);

export default (LoginComp = connect(mapStateToProps, actions)(LoginComp));