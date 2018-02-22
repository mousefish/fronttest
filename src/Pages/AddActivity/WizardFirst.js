import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import Button from "material-ui/Button";
import popupSearchDateField from "../../Components/container/popupSearchDateField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import AutocompleteField from "../../Components/container/AutocompleteField";
import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "./validate";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: "95%",
    }
});

class WizardFirst extends Component {
    goBack() {
        this.props.history.goBack();
    }

    renderFields(classes) {
        return [
            <div className="flex-form-wrapper">
                <Field
                    key="theme"
                    name="theme"
                    type="text"
                    component={TextField}
                    className="text-field"
                    placeholder="活动的主题(例：骨灰级成都吃货地图)"
                />
            </div>,
            <div className="flex-form-wrapper" style={{ width: "95%" }}>
                <Field
                    key="location"
                    name="location"
                    type="text"
                    component={AutocompleteField}
                    className="text-field"
                    placeholder="活动所在的国家和城市"
                    props={this.props}
                />
            </div>,
            <div className="flex-form-wrapper">
                <Field
                    key="budget"
                    name="budget"
                    type="text"
                    component={TextField}
                    className="text-field"
                    placeholder="活动费用/人"
                />
            </div>,

            <div className="flex-form-wrapper" style={{ width: "95%" }}>
                <h4 className="category-title">
                    你的活动时间
                </h4>
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
                <div className="wizard-header" onClick={this.goBack.bind(this)}>
                    <KeyboardArrowLeft className="arrow" />

                    <h4 className="category-title">发布新活动</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>{this.renderFields(classes)}</div>

                    <div
                        className="flex-form-wrapper"
                        style={{ width: "95%" }}
                    >
                        <h4 className="category-title">
                            你可以提供的向导服务
                        </h4>
                        <Field
                            key="services"
                            name="services"
                            component={popupSearchMultiServices}
                            data={["徒步旅行", "汽车接送", "购物打折"]}
                        />
                    </div>

                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                        id="btn"
                    >
                        下一步
                    </Button>
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