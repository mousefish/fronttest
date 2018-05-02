import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import AutocompleteField from "../../Components/container/AutocompleteField";
import popupSearchDateField from "../../Components/container/popupSearchDateField";

import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { TextField } from "redux-form-material-ui";
import validate from "../../Utility/validate";
import * as actions from "../../Actions";
import services from "../../Data/services";
import PageHeader from "../PageHeader";
import Bigbutton from "../Bigbutton";
const styles = theme => ({
    textField: {
        padding: "8px 0"
        // border: "1px solid blue"
    }
});

class AddWish extends Component {
    submitForm(value) {
        console.log("value", value);
        this.props.submitWishData(value, this.props.history);
    }

    renderErrorMsg() {
        if (this.props.msg) {
            return <div>{this.props.msg}</div>;
        }
    }

    renderFields(classes) {
        return (
            <div>
                <div key="basic" className="form-group">
                    <h4 className="category-title">愿望基本信息</h4>
                    <Field
                        fullWidth
                        key="location"
                        name="location"
                        type="text"
                        component={AutocompleteField}
                        className="text-field"
                        label="你想去的城市，按提示列表选择"
                        props={this.props}
                        marker="loc"
                    />

                    <Field
                        fullWidth
                        key="budget"
                        name="budget"
                        type="text"
                        component={TextField}
                        className={classes.textField}
                        placeholder="你的预算/人"
                    />
                    <Field
                        fullWidth
                        key="numberOfPeople"
                        name="numberOfPeople"
                        type="text"
                        component={TextField}
                        className={classes.textField}
                        placeholder="你能接受的人数上限"
                    />
                </div>

                <div key="date" className="form-group">
                    <h4 className="category-title">行程时间</h4>
                    <Field
                        key="dapartdate"
                        name="departdate"
                        type="text"
                        component={popupSearchDateField}
                        placeholder="出发日期和时间"
                        version='CH'
                    />

                    <Field
                        key="finishdate"
                        name="finishdate"
                        type="text"
                        component={popupSearchDateField}
                        placeholder="结束日期和时间"
                        version='CH'
                    />
                </div>
            </div>
        );
    }

    render() {
        const classes = this.props.classes;
        const { handleSubmit } = this.props;

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="发布新愿望" />
                <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                    <div>{this.renderFields(classes)}</div>
                    <div className="form-group">
                        <h4 className="category-title">需要的向导服务</h4>
                        <Field
                            key="services"
                            name="services"
                            component={popupSearchMultiServices}
                            data={services}
                        />
                    </div>
                    <div className="form-group">
                        <h4 className="category-title">额外说明</h4>
                        <Field
                            fullWidth
                            key="note"
                            name="note"
                            component={TextField}
                            id="multiline-flexible"
                            multiline
                            rowsMax="4"
                            placeholder="对本地向导或者旅行体验的要求等等"
                            className={classes.textField}
                        />
                    </div>

                    <div className="centralize-button">
                        <Bigbutton text="提交" type="submit" />
                    </div>
                </form>
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