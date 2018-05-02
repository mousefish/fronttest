import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import validate from "../../Utility/validate";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import * as actions from "../../Actions";
import { TextField } from "redux-form-material-ui";
import PasswordSetVisibility from "../presenter/PasswordSetVisibility";
import PageHeader from "../../Pages/PageHeader";
import Bigbutton from "../../Pages/Bigbutton";
import pair from "../../Data/CH_EN_PAIR";

const styles = theme => ({
  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  }
});

class LoginForm extends Component {
  state = {
    completed: 100
  };

  submitForm(values) {
    const { history, match: { params: { version } } } = this.props;
    this.props.userLogin(values, history, version);
  }

  render() {
    const {
      classes,
      handleSubmit,
      match: { params: { version } }
    } = this.props;

    return (
      <form
        className="wrapper"
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <PageHeader
          history={this.props.history}
          title={pair.loginWithEmail[version]}
        />
        <div className="form-group">
          <Field
            fullWidth
            name="email"
            component={TextField}
            className="text-field"
            label={pair.inputEmailAddress[version]}
            className={classes.textField}
            placeholder={pair.inputEmailAddress[version]}
          />

          <Field
            name="password"
            type="password"
            component={PasswordSetVisibility}
            className="text-field"
            label={pair.inputPassword[version]}
            props={this.props}
            className={classes.textField}
          />
        </div>

        <Bigbutton text={pair.clickToRegister[version]} type="submit" />
        <div style={{ margin: "auto" }}>
          <p className="input-error">
            {version === "CH" ? (
              this.props.errorMessage
            ) : (
              "Either Email or password is not corrent."
            )}
          </p>
          <Link className="unlink" to="/openPage">
            {" "}
            {pair.forgotPassword[version]}
          </Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.UserAuth.errorLogin
  };
};

LoginForm = reduxForm({
  form: "loginForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(LoginForm));

export default (LoginForm = connect(mapStateToProps, actions)(
  withRouter(LoginForm)
));