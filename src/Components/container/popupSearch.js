import React, { Component } from "react";
import { Popup, Button } from "framework7-react";
import Autocomplete from "react-md/lib/Autocompletes";
// import DatePicker from "react-md/lib/Pickers/DatePickerContainer";
// import Radio from "react-md/lib/SelectionControls/Radio";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import popupSearchField from "./popupSearchField";
import popupSearchDateField from "./popupSearchDateField";
import * as actions from "../../Actions";
import HistorySearch from './HistorySearch';

class PopupSearch extends Component {
  renderFields() {
    return [
      <Field
        key="keyword"
        name="keyword"
        type="text"
        component={popupSearchField}
        placeholder="关键字搜索"
        icon="search"
      />,

      <Field
        key="cityname"
        name="cityname"
        type="text"
        component={popupSearchField}
        placeholder="成都"
        icon="location_city"
      />,


        <Field
          key="dapartdate"
          name="departdate"
          type="text"
          component={ popupSearchDateField }
          placeholder="出发日期和时间"

        />,

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Field
          key="minbudget"
          name="minbudget"
          type="number"
          component={popupSearchField}
          placeholder="最小预算"
          icon="attach_money"
        />

        <Field
          key="maxbudget"
          name="maxbudget"
          type="number"
          component={popupSearchField}
          placeholder="最大预算"
          icon="attach_money"
        />
      </div>
    ];
  }


  submitForm(values) {
    const {keyword, cityname, departdate, minbudget, maxbudget} = values
    this.props.sendSearchData({keyword, cityname, departdate, minbudget, maxbudget})
  }
  onCancel() {

  }
  render() {

    return (
      <Popup
        tabletFullscreen
        style={{ zIndex: 10600}}
        opened={this.props.popup}
      >

        <div>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
              backgroundColor: "#039be5"
            }}
          >
            <Button
              onClick={this.props.close_popup}
              color="white"
              big={true}
              iconMaterial={"clear"}
              style={{ width: "10%", color:"#fff" }}
            />
            <span style={{color: "#fff", padding:"12px"}}>搜索</span>
          </div>

          <div style={{ padding: "20px" }}>
            <form
              onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}
            >
              {this.renderFields()}

              <div style={{display:'flex'}}>
                <button className="red accent-4" style={{flex:'1'}} onClick={this.onCancel}>取消</button>
                <button className="light-blue accent-4" style={{flex:'1'}} type='submit'>搜索</button>
              </div>
            </form>

            <HistorySearch />

          </div>
        </div>
      </Popup>
    );
  }
}

const validate = values => {
  // console.log(values);
  const errors = {};

  if (!values.cityname) {
    errors.email = "City name required";
  }

  return errors;
};
PopupSearch = reduxForm({
  form: "popupSearchForm",
  validate
})(PopupSearch);

export default (PopupSearch = connect(null, actions)(PopupSearch));