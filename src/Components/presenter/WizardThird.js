import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import Button from "material-ui/Button";

import { TextField } from "redux-form-material-ui";

import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";

const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },
  button: {
    margin: theme.spacing.unit,
    width: "95%",

  },
  formInner: {
    width: "95%"
  },

  text: {
    fontWeight: "bold"
  }
});

class wizardThird extends Component {
  state = {
    completed: 100
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <div className="wizard-header">
          <KeyboardArrowLeft
            style={{ float: "left", color: "grey" }}
            onClick={previousPage}
          />

          <h4 className={classes.text}>其他信息</h4>
        </div>
        <div className="flex-form-wrapper">
          <LinearProgress
            className={classes.progress}
            mode="determinate"
            value={this.state.completed}
          />
        </div>
        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="school"
            type="text"
            component={TextField}
            label="毕业院校"
          />
        </div>
        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="major"
            type="text"
            component={TextField}
            label="毕业专业"
          />
        </div>
        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="language"
            type="text"
            component={TextField}
            label="语言能力"
          />
        </div>

        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="hobby"
            type="text"
            component={TextField}
            label="爱好"
          />
        </div>

        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="personality"
            type="text"
            component={TextField}
            label="性格"
          />
        </div>
        <div className="flex-form-wrapper">
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
            id='btn'
          >
            提交
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
})(withStyles(styles)(wizardThird));
