import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const wizardSecond = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" component={renderField} label="用户名" />
      <div>
        <label>性别</label>
        <div>

            <Field name="sex" component="input" type="radio" value="male" /> 男

          <label>
            <Field name="sex" component="input" type="radio" value="female" /> 女
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" /> 其他
          </label>

          <Field name="sex" component={renderError} />
          <Field name="age" type="number" component={renderField} label="年龄" />
          <Field
            name="city"
            type="text"
            component={renderField}
            label="当前居住城市"
          />
          <Field
            name="yearOfLiving"
            type="text"
            component={renderField}
            label="当前居住城市年限"
          />
          <Field
            name="hometown"
            type="text"
            component={renderField}
            label="老家城市"
          />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(wizardSecond);