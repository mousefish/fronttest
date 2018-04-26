import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import Button from "material-ui/Button";
import AutocompleteField from "./AutocompleteField";
import popupSearchMultiServices from "./popupSearchMultiServices";
import * as actions from "../../Actions";
import HistorySearch from "./HistorySearch";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import classNames from "classnames";
import validate from "../../Utility/validate";

// import Search from "material-ui-icons/Search";
import PageHeader from "../../Pages/PageHeader";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
import SearchResult from "./SearchResult";

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
    marginTop: 10,
    display: "flex",
    position: "relative",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    paddingLeft: 12,
    alignItems: "center",
    paddingRight: 10
  },

  button: {
    position: "absolute",
    right: -25,
    top: -9

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
  },
  tab: {
    letterSpacing: 2
  },
  tabGroup:{
    margin: "15px 0 35px 0"
  }
});

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? (
    <span style={{ color: "red", fontSize: "11px", marginLeft: 10 }}>
      {error}
    </span>
  ) : (
    false
  );

class SearchPanel extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  submitForm(values) {
    if (!values.hasOwnProperty("fromChip")) {
      let categoryValue;
      if (this.state.value === 0) {
        categoryValue = "活动";
      }
      if (this.state.value === 1) {
        categoryValue = "愿望";
      }
      if (this.state.value === 2) {
        categoryValue = "向导";
      }
      values["category"] = categoryValue;
      // console.log("here", values)
    }

    this.props.submitSearchData(
      values,
      this.props.history,
      this.props.handleRequestClose
    );
  }

  render() {
    const { classes, theme } = this.props;
    const { handleSubmit } = this.props;
    return (
      <div className="searchPanelWrapper">
        <PageHeader title="搜索" history={this.props.history} />
        <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
          <div className={classes.tabGroup} >
            <AppBar
              position="static"
              color="default"
              style={{ boxShadow: "none" }}
            >
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="#1976D2"
                textColor="#1976D2"
                fullWidth
              >
                <Tab className={classes.tab} label="活动" />
                <Tab className={classes.tab} label="愿望" />
                <Tab className={classes.tab} label="向导" />
              </Tabs>
            </AppBar>
          </div>
          <Field name="category" component={renderError} />

          <div className={classes.searchBar}>
            <Field
              name="location"
              type="text"
              placehoder="选择一个城市"
              component={AutocompleteField}
              onClick={value => {
                this.submitForm({ location: value });
              }}
              value={this.state.location}
              props={this.props}
              marker="loc"
            />
          </div>
        </form>

        <div>
          <HistorySearch onClick={value => this.submitForm(value)} />
        </div>
        <div>
          <SearchResult />
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
})(withStyles(styles, { withTheme: true })(SearchPanel));

export default (SearchPanel = connect(null, actions)(withRouter(SearchPanel)));