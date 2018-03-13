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
    width: "90%",
    margin: "auto",
    backgroundColor: "#1976D2"
  },

  button: {

  },

  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  },

  legal: {
    margin:"auto",
    marginTop: 25,
    width:"95%",
    lineHeight: 1.5,
    fontSize:12
    // border: "1px solid blue"
  },
  createNew:{
    textAlign:"center",
    fontSize:"1.2rem"
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

     // return(
     //   <PageHeader history={this.props.history} title="登录账户" />
     //    <LinearProgress
     //      className={classes.progress}
     //      mode="determinate"
     //      color="secondary"
     //      value={this.state.completed}
     //    />

     //  )

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
        <div className="centralize-button">
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
            id="btn"
            style={{margin:"5px 0"}}
          >
            点击登陆
          </Button>
           <p className="input-error centralize-button" style={{ textAlign: "center" }}>
          {this.props.errorMessage}
        </p>
        </div>

        <div className={classes.createNew}>
          还没有账户？ 点击<Link to="/signup" className="unlink">
            创建新账户
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