import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import Radio from "material-ui/Radio";
import { RadioGroup, TextField } from "redux-form-material-ui";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";

const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },

  button: {
    margin: theme.spacing.unit,
    width: "95%",
    padding: 20,
    fontSize: 16
  },

  wrapper: {
    width: "90%",
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

  radioInner: {
    width: "95%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around"
  },

  formInner: {
    width: "95%"
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

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
  ) : (
    false
  );

class wizardSecond extends Component {
  state = {
    completed: 70
  };
  render() {
    const { handleSubmit, previousPage } = this.props;
    const { classes } = this.props;
    return (
      <form className={classes.wrapper} onSubmit={handleSubmit}>
        <div className={classes.header}>
          <KeyboardArrowLeft
            style={{ float: "left", color: "grey" }}
            onClick={previousPage}
          />

          <h4 className={classes.text}>个人基本资料</h4>
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
            className={classes.formInner}
            name="username"
            type="text"
            component={TextField}
            label="用户名"
          />
        </div>
        <div className={classes.formWrapper}>
          <Field
            name="sex"
            component={RadioGroup}
            className={classes.radioInner}
          >
            <Radio value="male" label="male" />
            <Radio value="female" label="female" />
          </Field>
          <Field name="sex" component={renderError} />
        </div>

        <div className={classes.formWrapper}>
          <Field
            className={classes.formInner}
            name="age"
            type="number"
            component={TextField}
            label="年龄"
          />
        </div>
        <div className={classes.formWrapper}>
          <Field
            className={classes.formInner}
            name="city"
            type="text"
            component={TextField}
            label="当前居住城市"
          />
        </div>
        <div className={classes.formWrapper}>
          <Field
            className={classes.formInner}
            name="yearOfLiving"
            type="number"
            component={TextField}
            label="当前居住城市年限"
          />
        </div>
        <div className={classes.formWrapper}>
          <Field
            className={classes.formInner}
            name="hometown"
            type="text"
            component={TextField}
            label="老家城市"
            style={{ marginBottom: 20 }}
          />
        </div>

        <div className={classes.formWrapper}>
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
          >
            下一步
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
})(withStyles(styles)(wizardSecond));