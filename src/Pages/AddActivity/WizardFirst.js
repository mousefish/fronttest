import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import popupSearchDateField from "../../Components/container/popupSearchDateField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import AutocompleteField from "../../Components/container/AutocompleteField";
import SelectRangeField from "../../Components/container/SelectRangeField";

import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import services from "../../Data/services";
import PageHeader from "../PageHeader";
import Bigbutton from "../Bigbutton";

const styles = theme => ({
    root: {
        flexGrow: 1
    },

    formControl: {
        minWidth: 120,
        // border:'1px solid red',
        height: 60
    },

    textField: {
        paddingTop: 8
        // border: "1px solid blue"
    },

    rangeContainer: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8
    },
    container: {
        flexGrow: 1,
        position: "relative"
    },
    inputRoot: {
        flexWrap: "wrap"
    }
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
                    label="活动的主题，15字以内"
                />

                <Field
                    fullWidth
                    key="location"
                    name="location"
                    type="text"
                    component={AutocompleteField}
                    label="活动所在的城市，从提示列表选择"
                    props={this.props}
                    marker="loc"
                />

                <Field
                    fullWidth
                    key="budget"
                    name="budget"
                    type="text"
                    component={TextField}
                    label="活动费用/人"
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
                        <Bigbutton text="下一步" type="submit" />
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