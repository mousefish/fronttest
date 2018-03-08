import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import * as actions from "../Actions";
import PageHeader from "./PageHeader";
import Button from "material-ui/Button";
import validate from "../Utility/validate";
import popupSearchDateField from "../Components/container/popupSearchDateField";
import popupSearchMultiServices from "../Components/container/popupSearchMultiServices";
import AutocompleteField from "../Components/container/AutocompleteField";
import { TextField } from "redux-form-material-ui";
import services from "../Data/services";

const styles = theme => ({
    button: {
        // margin: theme.spacing.unit,
        width: "40%",
        height: "30px",
        color: "#fff",
        lineHeight: 0.6
    },
    btnGroup: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0"
    }
});

class EditPanel extends Component {
    componentWillMount() {
        const { activityId } = this.props.match.params;
        this.props.fetchOneUserActivityForEditting(activityId);
    }

    submitForm(values) {}

    renderEditPanel(classes) {
        if (this.props.error) {
            return <div>{this.props.error}</div>;
        }
        if (!localStorage["user"]) {
            return null;
        }
        let you = JSON.parse(localStorage["user"]);
        const { edit } = this.props;
        // console.log(edit.userId, you.id)

        if (edit.size === 0 || edit.userId !== you.id) {
            console.log("!!!!");
            return <div>你没有权限修改该活动！</div>;
        }

        return (
            <div>
                <div className="flex-form-wrapper" key="theme">
                    <Field
                        key="theme"
                        name="theme"
                        type="text"
                        component={TextField}
                        className="text-field"
                        placeholder="活动的主题(例：骨灰级成都吃货地图)"
                    />
                </div>
                <div
                    className="flex-form-wrapper"
                    style={{ width: "95%" }}
                    key="location"
                >
                    <Field
                        key="location"
                        name="location"
                        type="text"
                        component={AutocompleteField}
                        className="text-field"
                        placeholder="活动所在的国家和城市"
                        props={this.props}
                    />
                </div>
                <div className="flex-form-wrapper" key="budget">
                    <Field
                        key="budget"
                        name="budget"
                        type="text"
                        component={TextField}
                        className="text-field"
                        placeholder="活动费用/人"
                    />
                </div>
                <div
                    className="flex-form-wrapper"
                    style={{ width: "95%" }}
                    key="date"
                >
                    <h4 className="category-title">你的活动时间</h4>
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
                <div
                    className="flex-form-wrapper"
                    style={{ width: "95%" }}
                    key="service"
                >
                    <h4 className="category-title">你可以提供的向导服务</h4>
                    <Field
                        key="services"
                        name="services"
                        component={popupSearchMultiServices}
                        data={services}
                    />
                </div>
                <div
                    className="flex-form-wrapper"
                    style={{ width: "95%" }}
                    key="story"
                >
                    <h4 className="category-title">我在这个地方的故事</h4>
                    <Field
                        key="story"
                        name="story"
                        component={TextField}
                        id="multiline-flexible"
                        multiline
                        rowsMax="4"
                        placeholder="我在这里生活了10年......"
                        style={{width:"100%"}}
                    />
                </div>
                <div className={classes.btnGroup}>
                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                        id="btn"
                    >
                        修改
                    </Button>
                    <Button
                        type="submit"
                        color="primary"
                        style={{ backgroundColor: "#D32F2F" }}
                        raised
                        className={classes.button}
                        id="btn"
                    >
                        删除
                    </Button>
                </div>
            </div>
        );
    }

    render() {
        const { classes, handleSubmit } = this.props;
        return (
            <form
                className="wrapper"
                onSubmit={handleSubmit(this.submitForm.bind(this))}
            >
                <PageHeader history={this.props.history} title="修改活动" />
                {this.renderEditPanel(classes)}
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        edit: state.ActivityReducer.edit,
        error: state.ActivityReducer.error,
        initialValues: {
            theme: state.ActivityReducer.edit.theme,
            location: state.ActivityReducer.edit.location,
            budget: state.ActivityReducer.edit.budget,
            dapartdate: state.ActivityReducer.edit.departdate,
            story: state.ActivityReducer.edit.story,
            location:state.ActivityReducer.edit.location,
            departdate:state.ActivityReducer.edit.departdate,
            finishdate:state.ActivityReducer.edit.finishdate,
            services:state.ActivityReducer.edit.services
        }
    };
};

EditPanel = reduxForm({
    form: "UpdateUserActivity",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
    enableReinitialize: true
})(withStyles(styles, { withTheme: true })(EditPanel));

export default (EditPanel = connect(mapStateToProps, actions)(EditPanel));