import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import Button from "material-ui/Button";
import autocompleteField from "./autocompleteField";
import popupSearchMultiServices from "./popupSearchMultiServices";
// import popupSearchMultiSelect from "./popupSearchMultiSelect";
import * as actions from "../../Actions";
import HistorySearch from "./HistorySearch";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { MenuItem } from "material-ui/Menu";
import { Select } from "redux-form-material-ui";

const styles = theme => ({
  wrapper: {
    width: "90%",
    height:'100%',
    margin: "auto",
    marginTop: 20,
    // border: "1px solid red",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between"
  },

  sectionWrapper: {
    display:'flex',
    flexFlow: "column",
    justifyContent: "flex-start",
    textAlign: "center",
    height:'25%',
    // border:'1px solid red'
  },

  button: {
    margin: theme.spacing.unit,
    marginTop:'calc(25% - 15px)',
    width: "95%",
    padding: 15,
    fontSize: 16
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
        className={classes.wrapper}
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <div className={classes.sectionWrapper}>
         <h4 style={{ fontWeight: "bold" }}>输入城市</h4>
          <Field
            name="location"
            type="text"
            placehoder="选择一个城市"
            component={autocompleteField}
            props={this.props}
          />
        </div>

        <div className={classes.sectionWrapper}>
          <h4 style={{ fontWeight: "bold" }}>向导服务</h4>
          <Field
            name="services"
            component={popupSearchMultiServices}
            data={["徒步旅行", "汽车接送", "购物打折"]}
          />
        </div>
        <div className={classes.sectionWrapper}>
          <HistorySearch />
        </div>
         <div className={classes.sectionWrapper}>
        <Button type="submit" color="primary" raised className={classes.button}>
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