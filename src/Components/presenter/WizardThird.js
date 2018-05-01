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
import pair from "../../Data/CH_EN_PAIR";

const styles = theme => ({});

class wizardThird extends Component {
  state = {
    completed: 100
  };

  render() {
    const {
      classes,
      version,
      handleSubmit,
      pristine,
      previousPage,
      submitting
    } = this.props;

    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader onClick={previousPage} title={pair.completePersonalFile[version]} />
        <ProgressBar completed={this.state.completed} />
        <div className="form-group">
          <Field
            name="school"
            type="text"
            component={TextField}
            label={pair.school[version]}
          />

          <Field
            name="occupation"
            type="text"
            component={TextField}
            label={pair.job[version]}
          />

          <Field
            name="bio"
            type="text"
            component={TextField}
            id="multiline-flexible"
            multiline
            rowsMax="4"
            placeholder={pair.selfBio[version]}
            label={pair.bioContent[version]}
          />
        </div>
        <Bigbutton type="submit" text={pair.submit[version]} />
      </form>
    );
  }
}

export default reduxForm({
  form: "signupwizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(wizardThird));