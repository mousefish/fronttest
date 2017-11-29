import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';

import renderField from './renderField';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from 'redux-form-material-ui';

const wizardFirst = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        type="text"
        component={TextField}
        label="输入邮箱地址"
      />


      <Field
        name="password"
        type="password"
        component={TextField}
        label="输入密码 - 六位数"
      />


      <div>
        <button type="submit" className="next">
          下一步
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(wizardFirst)