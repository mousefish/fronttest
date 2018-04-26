import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import validate from "../../Utility/validate";
import PasswordSetVisibility from "../presenter/PasswordSetVisibility";
import * as actions from "../../Actions";
import PageHeader from "../../Pages/PageHeader";
import Bigbutton from "../../Pages/Bigbutton";

const styles = theme => ({

  legal: {
    margin: "auto",
    marginTop: 45,
    width: "95%",
    lineHeight: 1.5,
    fontSize: 12
    // border: "1px solid blue"
  }
});

class SignupForm extends Component {
  state = {
    completed: 25,
    initialState: ""
  };

  submitForm(values) {
    this.props.userSignupRequest(values, this.props.history);
  }

  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <form
        className="wrapper"
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <PageHeader history={this.props.history} title="创建新账户" />
        <div className="form-group">
          <Field
            fullWidth
            name="email"
            component={TextField}
            label="输入邮箱地址"
            placeholder="输入邮箱地址"
          />

          <Field
            name="password"
            type="password"
            component={PasswordSetVisibility}
            label="输入密码：8—25位数"
            placeholder="输入密码：8—25位数"
          />

          <Field
            name="username"
            type="text"
            component={TextField}
            label="输入用户名"
            placeholder="输入用户名"
          />
        </div>
        <div className={classes.legal}>
          注册代表已经同意<Link to="/" className="unlink">
            服务条款
          </Link>，<Link to="/" className="unlink">
            隐私政策
          </Link>，<Link to="/" className="unlink">
            免责声明
          </Link>，<Link to="/" className="unlink">
            保障计划条款
          </Link>，<Link to="/" className="unlink">
            使用政策须知
          </Link>
        </div>

        <Bigbutton type="submit" text="点击注册" />
        <p
          className="input-error centralize-button"
          style={{ textAlign: "center" }}
        >
          {this.props.errorMessage}
        </p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.UserAuth.errorSignup
  };
};

SignupForm = reduxForm({
  form: "SignupForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(SignupForm));

export default (SignupForm = connect(mapStateToProps, actions)(
  withRouter(SignupForm)
));