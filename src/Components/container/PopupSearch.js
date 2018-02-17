import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import Button from "material-ui/Button";
import autocompleteField from "./autocompleteField";
// import popupSearchTextField from './popupSearchTextField'
import popupSearchMultiServices from "./popupSearchMultiServices";
import * as actions from "../../Actions";
import HistorySearch from "./HistorySearch";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";



const styles = theme => ({
  wrapper: {
    width: "90%",
    marginTop: 20,
    margin: "auto"
  },

  sectionWrapper: {
    textAlign: "center",
    marginBottom: 35
  },

  button: {
    margin: theme.spacing.unit,
    marginTop: 30,
    width: "95%",
    padding: 15,
    fontSize: 16
  },
  autocomplete:{
    border:'1px solid red'
  }
});

class PopupSearch extends Component {

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
          <Field
            name="location"
            type='text'
            placehoder='选择一个城市'
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

        <HistorySearch />

        <Button type="submit" color="primary" raised className={classes.button}>
          搜索
        </Button>
      </form>
    );
  }
}

PopupSearch = reduxForm({
  form: "PopupSearchForm"
})(withStyles(styles)(PopupSearch));


export default (PopupSearch = connect(null, actions)(withRouter(PopupSearch)));
