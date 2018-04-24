import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import * as actions from "../../Actions";
import FileInput from "./FileInput";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import PageHeader from "../PageHeader";
import Bigbutton from "../Bigbutton";

const styles = theme => ({
    imageWrapper: {
        position: "relative",
        textAlign: "center",
        height: 225
        // border: "2px solid green"
    },

    btnGroup: {
        width: "95%",
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    item: {
        padding: "5px 0"
    }
});

class WizardThird extends Component {
    renderInputs() {
        const { values, classes } = this.props;
        return (
            <div>
                <div className={classes.item}>主题: {values.theme}</div>
                <div className={classes.item}>城市: {values.location}</div>
                <div className={classes.item}>活动费用: {values.budget}</div>
                <div className={classes.item}>
                    接收的人数: {values.minNumOfPeople} 人 — {values.maxNumOfPeople} 人
                </div>
                <div className={classes.item}>活动开始时间: {values.departdate}</div>
                <div className={classes.item}>活动结束时间: {values.finishdate}</div>
                <div className={classes.item}>向导服务: {values.services}</div>
                <div className={classes.item}>我的故事: {values.story}</div>
            </div>
        );
    }

    render() {
        const { handleSubmit, pristine, previousPage, submitting } = this.props;
        const { classes } = this.props;
        return (
            <div className="wrapper">
                <PageHeader onClick={previousPage} title="发布新活动" />

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h4 className="category-title">请确认输入</h4>
                        {this.renderInputs()}
                    </div>
                    <div className={classes.btnGroup}>
                        <div style={{width:"40%"}}>
                            <Bigbutton
                                text="返回修改"
                                color="#43A047"
                                onClick={previousPage}
                            />
                        </div>
                        <div style={{width:"40%"}}>
                            <Bigbutton
                                text="提交"
                                type="submit"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        values: state.form.wizard.values
    };
};
export default reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(connect(mapStateToProps, actions)(WizardThird)));