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

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class PopupSearch extends Component {
  state = {
    name: []
  };
  submitForm(values) {
    console.log("values:", values);
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
        <div className="flex-inner-wrapper">
          <h4 className="category-title">输入城市</h4>
          <Field
            name="location"
            type="text"
            placehoder="选择一个城市"
            component={AutocompleteField}
            props={this.props}
          />
        </div>

        <div className="flex-inner-wrapper">
          <h4 className="category-title">向导服务</h4>
          <Field
            name="services"
            component={popupSearchMultiServices}
            data={["徒步旅行", "汽车接送", "购物打折"]}
          />
        </div>
        <div className="flex-inner-wrapper">
          <HistorySearch />
        </div>
        <div className="flex-inner-wrapper">
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
      </form>
    );
  }
}

PopupSearch = reduxForm({
  form: "PopupSearchForm"
})(withStyles(styles)(PopupSearch));

export default (PopupSearch = connect(null, actions)(withRouter(PopupSearch)));