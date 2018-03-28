import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../Utility/validate";
import { TextField } from "redux-form-material-ui";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import PasswordSetVisibility from "./PasswordSetVisibility";
import PageHeader from "../../Pages/PageHeader";

const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },

  button: {
    width: "95%",
    backgroundColor:"#1976D2"

  },

  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  },

  legal: {
    margin:"auto",
    marginTop: 45,
    width:"95%",
    lineHeight: 1.5,
    fontSize:12
    // border: "1px solid blue"
  }
});

class wizardFirst extends Component {
  state = {
    completed: 25
  };

  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader history={this.props.history} title="创建新账户" />
          <LinearProgress
            className={classes.progress}
            mode="determinate"
            value={this.state.completed}
          />
        <div className="form-group">
          <Field
            fullWidth
            name="email"
            component={TextField}
            className={classes.textField}
            label="输入邮箱地址"
          />

          <Field
            name="password"
            type="password"
            component={PasswordSetVisibility}
            className={classes.textField}
            label="输入密码 - 六位数"
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
            style={{marginTop:5}}
          >
            点击注册
          </Button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(wizardFirst));