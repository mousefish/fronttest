import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import AutocompleteField from "../../Components/container/AutocompleteField";
import popupSearchDateField from "../../Components/container/popupSearchDateField";

import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { TextField } from "redux-form-material-ui";
import validate from "../../Utility/validate";
import * as actions from "../../Actions";
import services from "../../Data/services";
import PageHeader from "../PageHeader";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        marginTop: 30,
        width: "95%",
        padding: 15,
        fontSize: 16
    }
});

class AddWish extends Component {
    submitForm(value) {
        console.log("wish value", value);
        this.props.submitWishData(value, this.props.history);
    }

    renderErrorMsg() {
        if (this.props.msg) {
            return <div>{this.props.msg}</div>;
        }
    }

    renderFields(classes) {
        return [
            <div
                key="location"
                className="flex-form-wrapper"
                style={{ width: "95%" }}
            >
                <Field
                    key="location"
                    name="location"
                    type="text"
                    component={AutocompleteField}
                    className="text-field"
                    placeholder="你想去的城市"
                    props={this.props}
                />
            </div>,
            <div key="budget" className="flex-form-wrapper">
                <Field
                    key="budget"
                    name="budget"
                    type="text"
                    component={TextField}
                    className="text-field"
                    placeholder="你的预算/人"
                />
            </div>,

            <div
                key="date"
                className="flex-form-wrapper"
                style={{ width: "95%" }}
            >
                <h4 className="category-title">你的行程时间</h4>
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
                <PageHeader history={this.props.history} title="发布新愿望" />
                <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                    <div>{this.renderFields(classes)}</div>
                    <div className="flex-form-wrapper" style={{ width: "95%" }}>
                        <h4 className="category-title">你需要的向导服务</h4>
                        <Field
                            key="services"
                            name="services"
                            component={popupSearchMultiServices}
                            data={services}
                        />
                    </div>

                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                        id="btn"
                    >
                        提交
                    </Button>
                </form>
                <div className="input-success">{this.props.msg}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { msg: state.WishReducer.message };
};

AddWish = reduxForm({
    form: "AddWish",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(AddWish));

export default (AddWish = connect(mapStateToProps, actions)(
    withRouter(AddWish)
));