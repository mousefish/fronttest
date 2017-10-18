import React, { Component } from "react";
import { Popup, Button } from "framework7-react";
import Autocomplete from "react-md/lib/Autocompletes";
// import DatePicker from "react-md/lib/Pickers/DatePickerContainer";
// import Radio from "react-md/lib/SelectionControls/Radio";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import popupSearchField from "./popupSearchField";
import popupSearchDateField from "./popupSearchDateField";


class PopupSearch extends Component {
  renderFields() {
    return [
      <Field
        key="keyword"
        name="keyword"
        type="text"
        component={popupSearchField}
        placeholder="关键字搜索"
      />,

      <Field
        key="cityname"
        name="cityname"
        type="text"
        component={popupSearchField}
        placeholder="成都"
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
        />

        <Field
          key="maxbudget"
          name="maxbudget"
          type="number"
          component={popupSearchField}
          placeholder="最大预算"
        />
      </div>
    ];
  }

  submitForm() {}
  onCancel() {

  }
  render() {
    return (
      <Popup
        tabletFullscreen
        style={{ zIndex: 10600 }}
        opened={this.props.popup}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
              backgroundColor: "blue"
            }}
          >
            <Button
              onClick={this.props.close_popup}
              color="black"
              big={true}
              iconMaterial={"clear"}
              style={{ width: "10%" }}
            />
            <p>搜索</p>
          </div>

          <div style={{ padding: "20px" }}>
            <form
              onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}
            >
              {this.renderFields()}

              <div style={{display:'flex'}}>
                <button className="light-blue" style={{flex:'1'}} type='submit'>搜索</button>
                <button className="light-pink" style={{flex:'1'}} onClick={this.onCancel}>取消</button>
              </div>
            </form>
          </div>
        </div>
      </Popup>
    );
  }
}

PopupSearch = reduxForm({
  form: "popupSearchForm"
})(PopupSearch);

export default (PopupSearch = connect(null, null)(PopupSearch));