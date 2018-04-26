import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import validate from "../../Utility/validate";
import Radio from "material-ui/Radio";
import { RadioGroup, TextField } from "redux-form-material-ui";

import { Link } from "react-router-dom";
import Bigbutton from "../../Pages/Bigbutton";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { FormControlLabel } from "material-ui/Form";
import PageHeader from "../../Pages/PageHeader";
import FileInput from "../../Pages/AddActivity/FileInput";
import defaultAvatar from "../../Assets/Images/defaultAvatar.png";
import AutocompleteField from "../../Components/container/AutocompleteField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import languages from "../../Data/languages";
import config from "../../config/config";
import * as actions from "../../Actions";
import ProgressBar from "./ProgressBar";



const styles = theme => ({
  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  },

  radioInner: {
    width: "95%",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    marginTop: 5
    // border:"1px solid red"
  },
  imageWrapper: {
    marginTop: 20,
    position: "relative",
    height: 128,
    width: 128
  },

  image: {
    flex: 1,
    maxWidth: "100%",
    height: 128,
    maxHeight: 128
    // border: "1px solid red"
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
    completed: 50,
    showCrop: true,
    showIcon: false
  };
  onGetImgUrl(file) {
    this.props.replaceWithNewImg(0, file);
  }

  async onCropImageObject(keyforUrl, width, height, x, y) {
    const { user } = this.props;
    let oldImageurl = user.basicInfo.imageurl ? user.basicInfo.imageurl : null;
    await this.props.cropImageObj(
      oldImageurl,
      null,
      0,
      keyforUrl,
      width,
      height,
      x,
      y
    );
    await this.props.fetchUser(0);
    setTimeout(() => {
      this.setState({
        showCrop: false,
        showIcon: true
      });
    }, 1000);
  }
  render() {
    const { handleSubmit, previousPage } = this.props;
    const { classes, user } = this.props;
    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader onClick={previousPage} title="完善个人基本资料" />
        <ProgressBar completed={this.state.completed} />
        <div className="form-group">
          <div className={classes.imageWrapper}>
            <img
              className={classes.image}
              src={
                user.basicInfo.imageurl ? (
                  config.BUCKET_URL + user.basicInfo.imageurl
                ) : (
                  defaultAvatar
                )
              }
            />

            <FileInput
              purpose="avatar"
              onGetImgUrl={file => this.onGetImgUrl(file)}
              onCropImageObject={(keyforUrl, width, height, x, y) =>
                this.onCropImageObject(keyforUrl, width, height, x, y)}
              showCrop={this.state.showCrop}
              showIcon={this.state.showIcon}
            />
            {this.props.errorSignup}
          </div>
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
            fullWidth
            key="age"
            name="age"
            type="text"
            component={AutocompleteField}
            props={this.props}
            label="年龄范围，按提示列表选择"
            marker="age"
          />

          <Field
            fullWidth
            name="city"
            type="text"
            component={AutocompleteField}
            label="当前居住的城市，按提示列表选择"
            props={this.props}
            marker="loc"
          />

          <Field
            fullWidth
            name="yearOfLiving"
            type="text"
            component={AutocompleteField}
            label="当前居住的城市的年限，按提示列表选择"
            props={this.props}
            marker="year"
          />

          <div style={{ marginTop: 10 }}>
            <h4 className="category-title">掌握的语言</h4>
            <Field
              key="language"
              name="language"
              component={popupSearchMultiServices}
              data={languages}
              label="掌握的语言"
              type="text"
            />
          </div>
        </div>
        <Bigbutton type="submit" text="下一步" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.UserReducer);
  return {
    user: state.UserReducer
  };
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: true,
  forceUnregisterOnUnmount: true,
  validate
})(
  withStyles(styles, { withTheme: true })(
    connect(mapStateToProps, actions)(wizardSecond)
  )
);