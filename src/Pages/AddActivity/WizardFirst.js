import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import Button from "material-ui/Button";
import popupSearchDateField from "../../Components/container/popupSearchDateField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import AutocompleteField from "../../Components/container/AutocompleteField";
import SelectRangeField from "../../Components/container/SelectRangeField";

import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import services from "../../Data/services";
import PageHeader from "../PageHeader";

const styles = theme => ({
    button: {
        width: "95%",
        backgroundColor: "#1976D2"
    },
    formControl: {
        minWidth: 120
    },

    textField: {
        padding: "8px 0"
        // border: "1px solid blue"
    },

    rangeContainer: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

class WizardFirst extends Component {
    renderFields(classes) {
        return [
            <div className="form-group" key="basic">
                <h4 className="category-title">基本活动信息</h4>
                <Field
                    fullWidth
                    key="theme"
                    name="theme"
                    type="text"
                    component={TextField}
                    placeholder="活动的主题，字数不多于15个"
                    label="活动的主题，字数不多于15个"
                    className={classes.textField}
                />

                <Field
                    fullWidth
                    key="location"
                    name="location"
                    type="text"
                    component={AutocompleteField}
                    placeholder="活动所在的城市，按提示列表选择"
                    label="活动所在的城市，按提示列表选择"
                    props={this.props}
                    marker="loc"
                />

                <Field
                    fullWidth
                    key="budget"
                    name="budget"
                    type="text"
                    component={TextField}
                    placeholder="活动费用/人"
                    label="活动费用/人"
                    className={classes.textField}
                />
                <div className={classes.rangeContainer}>
                        <Field
                            key="minNumOfPeople"
                            name="minNumOfPeople"
                            type="text"
                            component={SelectRangeField}
                            title="最少人数"
                            props={this.props}
                        />

                        <Field
                            key="maxNumOfPeople"
                            name="maxNumOfPeople"
                            type="text"
                            title="最多人数"
                            component={SelectRangeField}
                            props={this.props}
                        />

                </div>
            </div>,

            <div className="form-group" key="date">
                <h4 className="category-title">活动时间</h4>
                <Field
                    key="dapartdate"
                    name="departdate"
                    type="text"
                    component={popupSearchDateField}
                    placeholder="出发日期和时间"
                />

                <Field
                    key="finishdate"
                    name="finishdate"
                    type="text"
                    component={popupSearchDateField}
                    placeholder="结束日期和时间"
                />
            </div>
        ];
    }

    render() {
        const classes = this.props.classes;
        const { handleSubmit } = this.props;

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="发布新活动" />
                <form onSubmit={handleSubmit}>
                    <div>{this.renderFields(classes)}</div>

                    <div className="form-group">
                        <h4 className="category-title">向导服务</h4>
                        <Field
                            key="services"
                            name="services"
                            component={popupSearchMultiServices}
                            data={services}
                        />
                    </div>
                    <div className="centralize-button">
                        <Button
                            type="submit"
                            color="primary"
                            raised
                            className={classes.button}
                            id="btn"
                        >
                            下一步
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withRouter(withStyles(styles)(WizardFirst)));