import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import { Field, reduxForm } from "redux-form";
import validate from "../../Utility/validate";
import Button from "material-ui/Button";
import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { LinearProgress } from "material-ui/Progress";
import PageHeader from "../../Pages/PageHeader";

const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },
  button: {
    width: "95%",
    backgroundColor: "#1976D2"
  },
  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  }
});

class wizardThird extends Component {
  state = {
    completed: 75
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader onClick={previousPage} title="选填信息" />
        <LinearProgress
          className={classes.progress}
          mode="determinate"
          value={this.state.completed}
        />
        <div className="form-group">

          <Field
            className={classes.textField}
            name="hometown"
            type="text"
            component={TextField}
            label="老家城市"
          />

          <Field
            className={classes.textField}
            name="school"
            type="text"
            component={TextField}
            label="毕业院校"
          />

          <Field
            className={classes.textField}
            name="major"
            type="text"
            component={TextField}
            label="毕业专业"
          />


          <Field
            className={classes.textField}
            name="hobby"
            type="text"
            component={TextField}
            label="爱好"
          />

          <Field
            className={classes.textField}
            name="personality"
            type="text"
            component={TextField}
            label="性格"
          />
        </div>
        <div className="centralize-button">
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
})(withStyles(styles)(wizardThird));