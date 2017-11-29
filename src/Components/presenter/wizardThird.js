import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import  Button  from 'material-ui/Button';

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


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const wizardThird = props => {
  const { classes } = props;
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
     <div>
      <Field
        name="school"
        type="text"
        component={TextField}
        label="毕业院校"
      />
    </div>
    <div>
      <Field
        name="major"
        type="text"
        component={TextField}
        label="毕业专业"
      />
      </div>
      <div>
      <Field
        name="language"
        type="text"
        component={TextField}
        label="语言能力"
      />
      </div>
      <div>
      <Field
        name="hobby"
        type="text"
        component={TextField}
        label="爱好"
      />
      </div>
      <div>
      <Field
        name="personality"
        type="text"
        component={TextField}
        label="性格"
      />
      </div>
      <div>
        <Button color="primary" className={classes.button} onClick={previousPage}>
          Previous
        </Button>
        <Button type="submit" color="primary" raised className={classes.button} disabled={pristine || submitting}>
           提交
        </Button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(wizardThird))