import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import AddRouteField from "./AddRouteField";
import FIELDS from "./routeFormFields";
import popupSearchDateField from "../Components/container/popupSearchDateField";
import FileInput from "./FileInput";
import * as actions from "../Actions";
import { formValueSelector } from 'redux-form';

class AddRoute extends Component {
    onCancel() {}

    submitForm(values) {

        // console.log('formValues', c);

        console.log("values", values);
        const {
            location,
            budget,
            date,
            number_of_people,
            event_type,
            service,
            event_intro,
            notes,
            img1,
            img2,
            img3,
            img4
        } = values;

        this.props.addRoute({
            location,
            budget,
            date,
            number_of_people,
            event_type,
            service,
            event_intro,
            notes,
            images: { img1, img2, img3, img4 }
        });
    }

    renderFields() {
        return FIELDS.map(({ label, name }) => {
            if (name == "date") {
                return (
                    [<label>出发日期和时间</label>,
                    <Field
                        key="dapartdate"
                        name="departdate"
                        type="text"
                        component={popupSearchDateField}
                    />]
                );
            } else {
                return (
                    <div>
                    <Field
                        key={name}
                        name={name}
                        type="text"
                        component={AddRouteField}
                        label={label}
                    />
                    </div>
                );
            }
        });
    }
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 800,
                    margin: "auto",
                    marginBottom: 98,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 20
                }}
            >
            <div>{this.props.location}</div>
                <div>
                    <i
                        className="material-icons medium left"
                        onClick={() => this.props.history.push("/my")}
                    >
                        keyboard_arrow_left
                    </i>
                    <h5
                        style={{
                            borderBottom: "1px solid #e0e0e0",
                            paddingBottom: "10px"
                        }}
                    >
                        新的旅程，新的心情
                    </h5>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px"
                    }}
                >
                    <a
                        className="btn-flat"
                        style={{
                            borderRight: "1px solid #e0e0e0",
                            paddingRight: "20px"
                        }}
                    >
                        <i className="material-icons left">event_note</i>发布活动
                    </a>
                    <a className="btn-flat" style={{ paddingLeft: "20px" }}>
                        <i className="material-icons left">event_note</i>发布需求
                    </a>
                </div>

                <form
                    onSubmit={this.props.handleSubmit(this.props.onSubmitForm)}
                >
                    {this.renderFields()}

                    <Field
                        name="notes"
                        component="textarea"
                        placeholder="说点什么吧"
                        style={{ height: "10rem", marginBottom: "20px" }}
                    />
                    <div>上传文件</div>
                    <div style={{ display: "flex", maxWidth: "100%" }}>
                        <Field
                            component={FileInput}
                            name="img1"
                            style={{ padding: "20px 0 20px 0 ", flex: "1" }}
                        />
                        <Field
                            component={FileInput}
                            name="img2"
                            style={{ padding: "20px 0 20px 0 ", flex: "1" }}
                        />
                        <Field
                            component={FileInput}
                            name="img3"
                            style={{ padding: "20px 0 20px 0 ", flex: "1" }}
                        />
                        <Field
                            component={FileInput}
                            name="img4"
                            style={{ padding: "20px 0 20px 0 ", flex: "1" }}
                        />
                    </div>
                    <div style={{ display: "flex" }}>
                        <button
                            className="red accent-4"
                            style={{ flex: "1" }}
                            onClick={this.onCancel}
                        >
                            取消活动
                        </button>
                        <button
                            className="light-blue accent-4"
                            style={{ flex: "1" }}
                            type="submit"
                        >
                            创建活动
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};
    FIELDS.forEach(item => {
        if (!values[item.name]) {
            return (errors[item.name] = "Value required");
        }
    });

    // if (!values.img1){
    //     return errors.img1='Image required'
    // }

    return errors;
};

AddRoute = reduxForm({
    form: "addRouteForm",
    validate
})(AddRoute);

export default (AddRoute = connect(mapStateToProps, actions)(AddRoute));