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
    margin: theme.spacing.unit,
    width: "95%"
  }
});

class wizardFirst extends Component {
  state = {
    completed: 35
  };

  render() {
    const { classes, history, handleSubmit } = this.props;

    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader history={this.props.history} title="创建新账户" />

        <div className="flex-form-wrapper">
          <LinearProgress
            className={classes.progress}
            mode="determinate"
            value={this.state.completed}
          />
        </div>
        <div className="flex-form-wrapper">
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
            component={PasswordSetVisibility}
            className="text-field"
            label="输入密码 - 六位数"
          />
        </div>

        <div className="flex-form-wrapper">
          <Button
            type="submit"
            color="primary"
            raised
            className="text-field"
            id="btn"
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