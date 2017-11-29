import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

import { Radio } from "material-ui/Radio";

import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioGroup,
  SelectField,
  Slider,
  TextField
} from "redux-form-material-ui";

import  Button  from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const wizardSecond = props => {
  const { handleSubmit, previousPage } = props;
  const { classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="username" type="text" component={TextField} label="用户名" />
      </div>
      <div>
        <Field name="sex" type="text" component={TextField} label="性别" />
      </div>

      <div>
        <Field name="age" type="number" component={TextField} label="年龄" />
      </div>
      <div>
        <Field name="city" type="text" component={TextField} label="当前居住城市" />
      </div>
      <div>
        <Field
          name="yearOfLiving"
          type="number"
          component={TextField}
          label="当前居住城市年限"
        />
      </div>
      <div>
        <Field name="hometown" type="text" component={TextField} label="老家城市" />
      </div>

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
       <Button type="submit" color="primary" raised className={classes.button}>
          下一步
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(wizardSecond));