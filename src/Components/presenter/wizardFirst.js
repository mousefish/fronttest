import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import { TextField } from "redux-form-material-ui";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";

const styles = theme => ({
  progress: {
    width: "90%",
    margin: "auto"
  },

  button: {
    margin: theme.spacing.unit,
    width: "90%",
    padding: 20,
    fontSize: 16
  },

  wrapper: {
    width: "95%",
    margin: "auto",
    marginBottom: 98,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    // border:'1px solid green'
  },

  formWrapper: {
    width: "90%",
    margin: "auto",
    textAlign: "center",
    padding: "10px 0"
    // border:'1px solid red'
  },

  formInner: {
    width: "90%"
  },

  header: {
    width: "100%",
    height: "20%",
    textAlign: "center",
    padding: 10
  },
  text: {
    fontWeight: "bold"
  }
});

class wizardFirst extends Component {
  state = {
    completed: 35
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <form className={classes.wrapper} onSubmit={handleSubmit}>
        <div className={classes.header}>
          <KeyboardArrowLeft style={{ float: "left" }} />
          <h4 className={classes.text}>创建新账户</h4>
        </div>
        <div className={classes.formWrapper}>
          <LinearProgress
            className={classes.progress}
            mode="determinate"
            value={this.state.completed}
          />
        </div>
        <div className={classes.formWrapper}>
          <Field
            name="email"
            component={TextField}
            className={classes.formInner}
            label="输入邮箱地址"
          />
        </div>
        <div className={classes.formWrapper}>
          <Field
            name="password"
            component={TextField}
            className={classes.formInner}
            label="输入密码 - 六位数"
          />
        </div>

        <div className={classes.formWrapper}>
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
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