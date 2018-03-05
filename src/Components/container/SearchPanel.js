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
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import Search from "material-ui-icons/Search";
import PageHeader from "../../Pages/PageHeader";
const styles = theme => ({
  wrapper: {
    width: "95%",
    maxWidth: 600,
    height: "100%",
    margin: "auto",
    marginBottom: 45,
    display: "flex",
    flexFlow: "column",
    justifyContent: "flex-start"
  },

  searchBar: {
    marginTop:10,
    display: "flex",
    position:"relative",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    paddingLeft: 12,
    alignItems: "center",
    paddingRight:10,
  },

  button: {
    position:"absolute",
    right:-25,
    top:-9,

    // margin: theme.spacing.unit,
    // width: "100%",
    // marginTop: 30,
    // marginBottom:0
  },
  radioInner: {
    width: "95%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-around",
    alignItems: "flex-start"
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
    <span style={{ color: "red", fontSize: "11px", marginLeft:10 }}>{error}</span>
  ) : (
    false
  );

class SearchPanel extends Component {
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
      <div className="wrapper">
        <PageHeader title="搜索" history={this.props.history} />
        <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
          <Field
            name="category"
            component={RadioGroup}
            className={classes.radioInner}
          >
            <FormControlLabel value="activity" control={<Radio />} label="活动" />
            <FormControlLabel value="wish" control={<Radio />} label="愿望" />
          </Field>

          <Field name="category" component={renderError} />

          <div className={classes.searchBar}>
            <Field
              name="location"
              type="text"
              placehoder="选择一个城市"
              component={AutocompleteField}
              props={this.props}
            />

            <Button type="submit" className={classes.button}>
              <Search style={{ color: "lightgrey" }} />
            </Button>
          </div>

        </form>


        <div style={{ marginTop: 60 }}>
          <HistorySearch onClick={value => this.submitForm(value)} />
        </div>
      </div>
    );
  }
}

SearchPanel = reduxForm({
  form: "PopupSearchForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(SearchPanel));

export default (SearchPanel = connect(null, actions)(withRouter(SearchPanel)));
