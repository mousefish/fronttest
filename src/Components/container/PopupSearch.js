import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import Button from "material-ui/Button";
import AutocompleteField from "./AutocompleteField";
import popupSearchMultiServices from "./popupSearchMultiServices";
// import popupSearchMultiSelect from "./popupSearchMultiSelect";
import * as actions from "../../Actions";
import HistorySearch from "./HistorySearch";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { MenuItem } from "material-ui/Menu";
import { Select } from "redux-form-material-ui";
import classNames from "classnames";
import validate from "../../Utility/validate";
import Radio from "material-ui/Radio";
import { RadioGroup, TextField } from "redux-form-material-ui";
import { FormControlLabel } from "material-ui/Form";

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
    width: "100%",
    marginTop:30
  },
  radioInner: {
    width: "95%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    marginTop:20
  },

  formInner: {
    width: "95%"
  },

  text: {
    fontWeight: "bold"
  }
});

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span style={{ color: "red", fontSize: "12px" }}>{error}</span>
  ) : (
    false
  );

class PopupSearch extends Component {
  submitForm(values) {
    this.props.submitSearchData(
      values,
      this.props.history,
      this.props.handleRequestClose
    );
  }

  render() {
    const classes = this.props.classes;
    const { handleSubmit } = this.props;
    return (
      <form
        className="wrapper"
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <div className="flex-form-wrapper" style={{marginTop:10}}>
          <Field
            name="location"
            type="text"
            placehoder="选择一个城市"
            component={AutocompleteField}
            props={this.props}
          />

          <Field
            name="category"
            component={RadioGroup}
            className={classes.radioInner}
          >
            <FormControlLabel value="activity" control={<Radio />} label="活动" />
            <FormControlLabel value="wish" control={<Radio />} label="愿望" />
          </Field>
          <Field name="category" component={renderError} />

          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
            id="btn"
          >
            搜索
          </Button>
        </div>

        <div className="flex-form-wrapper">
          <HistorySearch />
        </div>
      </form>
    );
  }
}

PopupSearch = reduxForm({
  form: "PopupSearchForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(PopupSearch));

export default (PopupSearch = connect(null, actions)(withRouter(PopupSearch)));