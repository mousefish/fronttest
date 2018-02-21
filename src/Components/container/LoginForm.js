import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../presenter/validate";
import { TextField } from "redux-form-material-ui";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { withRouter } from "react-router";

const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },

  button: {
    margin: theme.spacing.unit,
    width: "95%"
  },

  text: {
    fontWeight: "bold"
  },

  hint: {
    position: "absolute",
    right: 6,
    bottom: 10,
    fontSize: 10,
    color: "grey",
    zIndex: 1000
  },

  hintColor: {
    color: "grey"
  }
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    completed: 100
  };

  submitForm(values) {
    console.log(values);
    this.props.userLogin(values, this.props.history);
  }

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <form
        className="wrapper"
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <div className="wizard-header">
          <Link to="/loginSignUp">
            <KeyboardArrowLeft style={{ float: "left", color: "grey" }} />
          </Link>
          <h4 className={classes.text}>登陆账户</h4>
        </div>
        <div className="flex-form-wrapper">
          <LinearProgress
            className={classes.progress}
            mode="determinate"
            value={this.state.completed}
          />
        </div>
        <div className="flex-form-wrapper">
          <span className={classes.hint}>
            <Link to="/" className={classes.hintColor}>
              忘记邮箱？
            </Link>
          </span>
          <Field
            name="email"
            component={TextField}
            className="text-field"
            label="输入邮箱地址"
          />
        </div>
        <div className="flex-form-wrapper" style={{ marginBottom: 20 }}>
          <Field
            name="password"
            type="password"
            component={TextField}
            className="text-field"
            label="输入密码 - 六位数"
          />
          <span className={classes.hint}>
            <Link to="/" className={classes.hintColor}>
              忘记密码？
            </Link>
          </span>
        </div>

        <div className="flex-form-wrapper">
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
            id="btn"
          >
            点击登陆
          </Button>
        </div>
        <div style={{ color: "red" }}>{this.props.errorMsg}</div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMsg: state.UserAuth.error.loginErr || state.UserAuth.error.error
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