import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import validate from "../../Utility/validate";
import Button from "material-ui/Button";
import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { LinearProgress } from "material-ui/Progress";
import PageHeader from "../../Pages/PageHeader";

const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },

  head: {
    marginTop: 6,
    fontWeight: "bold"
  },

  btnGroup: {
    width: "95%",
    margin: "20px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
    // border:"1px solid green"
  },
  button: {
    width: "40%",
    letterSpacing: 2,
    padding: 12,
    fontSize: 18,
    backgroundColor: "#1976D2",
    color: "#fff"
  },
  textField: {
    padding: "8px 0"
    // border: "1px solid blue"
  },

  item: {
    padding: "5px 0"
  }
});

class wizardFourth extends Component {
  state = {
    completed: 100
  };

  renderInputs() {
    const { values, classes } = this.props;
    return (
      <div>
        <div className={classes.item}>邮件: {values.email}</div>
        <div className={classes.item}>用户名: {values.username}</div>
        <div className={classes.item}>年龄: {values.age}</div>
        <div className={classes.item}>性别: {values.sex}</div>
        <div className={classes.item}>居住城市: {values.city}</div>
        <div className={classes.item}>居住年限: {values.yearOfLiving}</div>
        <div className={classes.item}>老家: {values.hometown}</div>
        <div className={classes.item}>语言种类: {values.language}</div>
        <div className={classes.item}>毕业院校: {values.school}</div>
        <div className={classes.item}>专业: {values.major}</div>
        <div className={classes.item}>爱好: {values.hobby}</div>
        <div className={classes.item}>性格: {values.personality}</div>
      </div>
    );
  }
  render() {
    const { classes } = this.props;
    const { handleSubmit, pristine, previousPage, submitting } = this.props;

    return (
      <form className="wrapper" onSubmit={handleSubmit}>
        <PageHeader onClick={previousPage} title="其他信息" />
        <LinearProgress
          className={classes.progress}
          mode="determinate"
          value={this.state.completed}
        />
        <div className="form-group">
          <h4 className={classes.head}>请确认输入</h4>
          {this.renderInputs()}
        </div>
        <div className={classes.btnGroup}>
          <Button raised className={classes.button} onClick={previousPage}>
            返回修改
          </Button>

          <Button type="submit" className={classes.button} raised>
            提交
          </Button>
        </div>
      </form>
    );
  }
}
const mapStateToProps = state => {
  // console.log("values", state.form.wizard.values);
  return {
    values: state.form.wizard.values
  };
};
export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(connect(mapStateToProps)(wizardFourth)));