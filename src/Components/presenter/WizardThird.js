import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import { Field, reduxForm } from "redux-form";
import validate from "../../Utility/validate";
import Bigbutton from "../../Pages/Bigbutton";
import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PageHeader from "../../Pages/PageHeader";
import ProgressBar from "./ProgressBar";

const styles = theme => ({});

class wizardThird extends Component {
  state = {
    completed: 100
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader onClick={previousPage} title="完善个人基本资料" />
        <ProgressBar completed={this.state.completed} />
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
        <Bigbutton type="submit" text="提交" />
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