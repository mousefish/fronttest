import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../Utility/validate";
import { TextField } from "redux-form-material-ui";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { withRouter } from "react-router";
import PasswordSetVisibility from "../presenter/PasswordSetVisibility";
import PageHeader from "../../Pages/PageHeader";

const styles = theme => ({

  button: {
    width: "95%",
    backgroundColor: "#1976D2"
  },

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

        <div className="centralize-button">
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
            id="btn"
            style={{ margin: "5px 0" }}
          >
            点击登陆
          </Button>
          <p
            className="input-error centralize-button"
            style={{ textAlign: "center" }}
          >
            {this.props.errorMessage}
          </p>
          <div>
            <Link className="unlink" to="/openPage">
              {" "}
              <span className={classes.forget}>忘记密码？</span>
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.UserAuth.error
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