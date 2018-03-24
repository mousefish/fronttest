import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import FileInput from "./FileInput";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import PageHeader from "../PageHeader";

const styles = theme => ({
    imageWrapper: {
        // display: "flex",
        // flexFlow: "row wrap"
        position: "relative",
        textAlign: "center",
        maxHeight: 240,
        border: "1px solid green"
    },

    image: {
        flex: 1
    },
    btnGroup: {
        width: "95%",
        margin: "260px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        // border:"1px solid green"
    },
    button: {
        color: "#fff",
        width: "40%",
        padding: 15,
        backgroundColor: "#1976D2",
        fontSize:14
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
                    <div className="form-group">
                        <h4 className="category-title">上传照片</h4>
                        <div className={classes.imageWrapper}>
                            <Field
                                component={FileInput}
                                name="images"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    height: 240,
                                    border: "2px dashed #000"
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.btnGroup}>
                        <Button
                            style={{ backgroundColor: "#1976D2" }}
                            raised
                            className={classes.button}
                            onClick={previousPage}
                        >
                            返回修改
                        </Button>

                        <Button
                            type="submit"
                            style={{ backgroundColor: "#1976D2" }}
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
})(withStyles(styles)(connect(mapStateToProps)(WizardThird)));