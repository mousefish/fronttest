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
        <PageHeader onClick={previousPage} title="完善个人基本资料" />
        <LinearProgress
          className={classes.progress}
          mode="determinate"
          value={this.state.completed}
        />
        <div className="form-group">
          <Field
            name="school"
            type="text"
            component={TextField}
            label="毕业或在读院校"
          />

          <Field
            name="occupation"
            type="text"
            component={TextField}
            label="职业：学生，公务员，导游，自由职业......"
          />

          <Field
            name="bio"
            type="text"
            component={TextField}
            id="multiline-flexible"
            multiline
            rowsMax="4"
            placeholder="关于我的个人介绍"
            label="100字以内个人介绍：逗逼铲屎官，爱狗子，爱生活"
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