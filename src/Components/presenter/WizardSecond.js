import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../Utility/validate";
import Radio from "material-ui/Radio";
import { RadioGroup, TextField } from "redux-form-material-ui";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { FormControlLabel } from "material-ui/Form";
import PageHeader from "../../Pages/PageHeader";

const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },

  button: {
    margin: theme.spacing.unit,
    width: "95%"
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
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader onClick={previousPage} title="个人基本资料" />
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
            name="username"
            type="text"
            component={TextField}
            label="用户名"
          />
        </div>
        <div className="flex-form-wrapper">
          <Field
            name="sex"
            component={RadioGroup}
            className={classes.radioInner}
          >
            <FormControlLabel value="male" control={<Radio />} label="男" />
            <FormControlLabel value="female" control={<Radio />} label="女" />
            <FormControlLabel value="other" control={<Radio />} label="其他" />
          </Field>
          <Field name="sex" component={renderError} />
        </div>

        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="age"
            type="number"
            component={TextField}
            label="年龄"
          />
        </div>
        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="city"
            type="text"
            component={TextField}
            label="当前居住城市"
          />
        </div>
        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="yearOfLiving"
            type="number"
            component={TextField}
            label="当前居住城市年限"
          />
        </div>
        <div className="flex-form-wrapper">
          <Field
            className={classes.formInner}
            name="hometown"
            type="text"
            component={TextField}
            label="老家城市"
            style={{ marginBottom: 20 }}
          />
        </div>

        <div className="flex-form-wrapper">
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
            id="btn"
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