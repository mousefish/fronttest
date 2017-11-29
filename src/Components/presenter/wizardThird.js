import React from 'react';
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";

const wizardThird = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="school"
        type="text"
        component={renderField}
        label="毕业院校"
      />
      <Field
        name="major"
        type="text"
        component={renderField}
        label="毕业专业"
      />
      <Field
        name="language"
        type="text"
        component={renderField}
        label="语言能力"
      />
      <Field
        name="hobby"
        type="text"
        component={renderField}
        label="爱好"
      />
      <Field
        name="personality"
        type="text"
        component={renderField}
        label="性格"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}
export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(wizardThird)