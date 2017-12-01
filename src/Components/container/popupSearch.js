import React, { Component } from "react";

import Autocomplete from "react-md/lib/Autocompletes";
// import DatePicker from "react-md/lib/Pickers/DatePickerContainer";
// import Radio from "react-md/lib/SelectionControls/Radio";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import popupSearchField from "./popupSearchField";
import popupSearchDateField from "./popupSearchDateField";
import * as actions from "../../Actions";
import HistorySearch from "./HistorySearch";

import { withStyles } from "material-ui/styles";


const styles = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
};

class popSearch extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div>i AM HERE!</div>
    );
  }
}

export default withStyles(styles)(popSearch);