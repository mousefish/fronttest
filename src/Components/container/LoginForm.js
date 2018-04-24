import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../Utility/validate";
import { TextField } from "redux-form-material-ui";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { withRouter } from "react-router";
import PasswordSetVisibility from "../presenter/PasswordSetVisibility";
import PageHeader from "../../Pages/PageHeader";
import Bigbutton from "../../Pages/Bigbutton";

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
    this.props.userLogin(values, this.props.history);
  }

  render() {
    const { classes, handleSubmit, forOpen } = this.props;

    return (
      <form
        className="wrapper"
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <PageHeader history={this.props.history} title="用邮箱登陆" />
        <div className="form-group">
          <Field
            fullWidth
            name="email"
            component={TextField}
            className="text-field"
            label="输入邮箱地址"
            className={classes.textField}
            placeholder="输入邮箱地址"
          />

          <Field
            name="password"
            type="password"
            component={PasswordSetVisibility}
            className="text-field"
            label="输入 8 — 25 位密码"
            props={this.props}
            className={classes.textField}
          />
        </div>

        <Bigbutton text="点击登录" type="submit" />
        <div style={{ margin: "auto" }}>
          <p className="input-error">{this.props.errorMessage}</p>
          <Link className="unlink" to="/openPage">
            {" "}
            忘记密码？
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