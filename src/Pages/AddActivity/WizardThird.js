import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import * as actions from "../../Actions";
import Button from "material-ui/Button";
import FileInput from "./FileInput";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import PageHeader from "../PageHeader";

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
        alignItems: "center"
        // border:"1px solid green"
    },
    button: {
        width: "40%",
        letterSpacing: 2,
        padding: 12,
        fontSize: 18,
        backgroundColor:"#1976D2",
        color: "#fff"
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
                    接收的人数上限: {values.numberOfPeople}
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
                        <Button
                            raised
                            className={classes.button}
                            onClick={previousPage}
                        >
                            返回修改
                        </Button>

                        <Button
                            type="submit"
                            raised
                            className={classes.button}
                        >
                            提交
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.form.wizard.values);
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