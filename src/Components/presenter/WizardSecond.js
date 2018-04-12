import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../../Utility/validate";
import Radio from "material-ui/Radio";
import { RadioGroup, TextField } from "redux-form-material-ui";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { FormControlLabel } from "material-ui/Form";
import PageHeader from "../../Pages/PageHeader";
import AutocompleteField from "../../Components/container/AutocompleteField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import languages from "../../Data/languages";
const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },

  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  },

  button: {
    width: "95%",
    backgroundColor: "#1976D2"
  },

  radioInner: {
    width: "95%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    marginTop: 5
    // border:"1px solid red"
  }
});

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span style={{ color: "red", fontSize: "10px" }}>{error}</span>
  ) : (
    false
  );

class wizardSecond extends Component {
  state = {
    completed: 50
  };
  render() {
    const { handleSubmit, previousPage } = this.props;
    const { classes } = this.props;
    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader onClick={previousPage} title="个人基本资料" />
        <LinearProgress
          className={classes.progress}
          mode="determinate"
          value={this.state.completed}
        />
        <div className="form-group">
          <Field
            className={classes.textField}
            name="username"
            type="text"
            component={TextField}
            label="用户名"
          />

          <Field
            name="sex"
            component={RadioGroup}
            className={classes.radioInner}
          >
            <FormControlLabel value="男" control={<Radio />} label="男" />
            <FormControlLabel value="女" control={<Radio />} label="女" />
            <FormControlLabel value="其他" control={<Radio />} label="其他" />
          </Field>
          <Field name="sex" component={renderError} />

          <Field
            className={classes.textField}
            name="age"
            type="text"
            component={AutocompleteField}
            placeholder="年龄范围，按提示列表选择"
            props={this.props}
            label="年龄范围"
            marker="age"
          />

          <Field
            className={classes.textField}
            name="city"
            type="text"
            component={AutocompleteField}
            placeholder="当前居住的城市，按提示列表选择"
            props={this.props}
            marker="loc"
          />

          <Field
            className={classes.textField}
            name="yearOfLiving"
            type="text"
            component={AutocompleteField}
            label="当前居住城市年限"
            placeholder="当前居住的城市的年限，按提示列表选择"
            props={this.props}
            marker="year"
          />

          <div style={{marginTop:10}}>
            <h4 className="category-title">掌握的语言</h4>
            <Field
              className={classes.textField}
              key="language"
              name="language"
              component={popupSearchMultiServices}
              data={languages}
              label="掌握的语言"
              type="text"
            />
          </div>
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
})(withStyles(styles)(wizardSecond));