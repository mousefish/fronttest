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
  progress: {
    width: "95%",
    margin: "auto",
    backgroundColor: "#1976D2"
  },

  button: {
    width: "95%",
    backgroundColor: "#1976D2"
  },

  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  },

  createNew: {
    position:"fixed",
    bottom:0,
    left:0,
    width:"100%",
    letterSpacing:2,
    textAlign: "center",
    fontSize: "1.1rem",
    marginBottom:10
  },

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
            label="输入密码 - 六位数"
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
        <p>或者</p>
        <div>用微信登陆</div>
        </div>

        <div className={classes.createNew}>
        还没有账号？
          <Link to="/signup" className="unlink">
            创建新账号
          </Link>
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