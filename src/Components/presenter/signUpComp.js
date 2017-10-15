import React, { Component } from "react";
import axios from "axios";
import AuthApi from "../../ManagedApi/AuthApi";
import PropTypes from "prop-types";
import classnames from "classnames";
import { sinUpValidation } from "../../Utlity/commonValidation";
import { connect } from "react-redux";
// Use * for simplicity (also added index.js in Action folder to import and export all the action files)
import * as actions from "../../Actions";
import { toast } from "react-toastify";
import { reduxForm, Field } from "redux-form";
import RegisterField from "./RegisterField";
import FIELDS from "./formFields";

class SignUpComp extends Component {

  // Pass the 3 values to action creator
  submitForm(values) {
    const { username, email, password } = values;
    // console.log('username',username);
    this.props.userSignupRequest({ username, email, password }, this.props.history);
  }

// Use this function to avoid list elements with duplicate properties
  renderFields() {
    return FIELDS.map(({ label, name, type }) => (
      <Field
        key={name}
        name={name}
        type={type}
        component={RegisterField}
        label={label}
      />
    ));
  }

 // Use this function to show the error message from backend
  renderErrorMsg(){
    if(this.props.errorMsg){
      return (<div className='alert alert-danger'>{this.props.errorMsg}</div>)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
          {this.renderFields()}
          {this.renderErrorMsg()}
          <button type="submit" className="btn waves-effect waves-light">Register</button>
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
  } else if (values.password.length <= 6) {
    errors.password = "Password must be more than 6 characters.";
  }

  if (values.password_confirm !== values.password) {
    errors.password_confirm = "Password should be consistent";
  }

  return errors;
};

const mapStateToProps = (state) =>{
  return { errorMsg: state.UserAuth.error}
}

SignUpComp.propType = {
  userSignUpRequest: PropTypes.func.isRequired
};

SignUpComp.contextTypes = {
  router: PropTypes.object.isRequired
};

// Adopted the new wrapping method (from stackoverflow) since the new version of the redux-form
// does not wrap connect anymore.
// ****** This does not work anymore:
//      export default reduxForm({
//     form: "registerForm",
//     validate
// }, null, actions)(registerForm)******;

SignUpComp = reduxForm({
  form: "registerForm",
  validate
})(SignUpComp);

export default (SignUpComp = connect(mapStateToProps, actions)(SignUpComp));