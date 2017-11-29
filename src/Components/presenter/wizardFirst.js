import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

import renderField from "./renderField";
import { TextField } from "redux-form-material-ui";

import  Button  from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const wizardFirst = props => {
  const { classes } = props;
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component={TextField}
          label="输入邮箱地址"
        />
      </div>
      <div>
        <Field
          name="password"
          component={TextField}
          label="输入密码 - 六位数"
        />
      </div>

      <div>


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
})(withStyles(styles)(wizardFirst));