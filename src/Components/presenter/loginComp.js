import React, { Component } from "react";
import classnames from "classnames";
import { loginValidation } from "../../Utlity/commonValidation";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../Actions";
import RegisterField from "./RegisterField";
import TLogo from "../../Assets/Images/logo.jpg";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';

class LoginComp extends Component {
  // Pass the 3 values to action creator

  submitForm(values) {
    const { username, password } = values;
    console.log('history',this.props);
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
        name="password"
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
      <div
        style={{
          maxWidth: 800,
          margin: "auto",
          marginLeft: 5,
          marginRight: 5,
          marginTop: 20,
          position: "relative"
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "20px"
          }}
        >
          <Link to='/'><img
            src={TLogo}
            style={{
              width: 100,
              height: 100
            }}
          />
          </Link>
        </div>
        <form onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
          {this.renderFields()}
          {this.renderErrorMsg()}
          <button type="submit" className="btn waves-effect waves-light">
            Login
          </button>
        </form>
        <p>
          New user? <Link to="/signup">Register here</Link>
        </p>
        <span style={{ position: "absolute", right: "0", bottom: "100px" }}>
          <a href="#">Forgot?</a>
        </span>
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

export default (LoginComp = connect(mapStateToProps, actions)(withRouter(LoginComp)));