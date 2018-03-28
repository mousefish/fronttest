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
import Dialog from "material-ui/Dialog";
import services from "../Data/services";
import ConfirmDelete from "./ConfirmDelete";
import RegisterDialog from "./RegisterDialog";
import config from "../config/config";
import testPic from "../Assets/imgForTest/shanghai1.jpg";
import test2 from "../Assets/imgForTest/4.jpg";
import FileInput from "./AddActivity/FileInput";

const styles = theme => ({
    root: {
        width: 500
    },
    button: {
        // margin: theme.spacing.unit,
        width: "50%",
        color: "#fff",
        lineHeight: 0.6,
        height: 60,
        borderRadius: 0,
        fontSize: "1.5rem"
    },
    btnGroup: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        // border:"1px solid green"
    },

    textField: {
        padding: "8px 0"
        // border: "1px solid blue"
    },

    // may need to define the max width later!
    imageWrapper: {
        position: "relative",
        textAlign: "center",
        height: 225
        // border: "2px solid green"
    },
    image: {
        flex: 1,
        maxWidth: "100%",
        height: 225,
        maxHeight: 225
        // border: "1px solid red"
    }
});

class EditActivityPanel extends Component {
    state = {
        open: false,
        showCrop: true,
        showIcon: false
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillMount() {
        const { activityId } = this.props.match.params;
        this.props.fetchOneUserActivityForEditting(activityId);
    }

    //  need userId to push back to this user's activity list
    deleteActivity(userId) {
        const { activityId } = this.props.match.params;
        const { history } = this.props;
        this.props.deleteUserActivity(activityId, history, userId);
    }

    submitForm(values) {
        // console.log("values",values)
        const { edit, history } = this.props;
        const { activityId } = this.props.match.params;

        const keys = [
            "theme",
            "location",
            "budget",
            "numberOfPeople",
            "departdate",
            "finishdate",
            "services",
            "story"
        ];

        let edittedValues = {};
        keys.forEach(item => {
            if (edit[item] !== values[item]) {
                edittedValues[item] = values[item];
            }
        });

        if (
            Object.keys(edittedValues).length === 0 &&
            !values.hasOwnProperty("images")
        ) {
            // need a dialogue here!
            // alert("没有值发生改变！");
            history.push(`/activity/${activityId}`);
            return null;
        }

        this.props.updateUserActivity(activityId, edittedValues, history);
    }

    onGetImgUrl(file) {
        const { edit } = this.props;
        this.props.replaceWithNewImg(edit.userId, file);
    }

    async onCropImageObject(keyforUrl, width, height, x, y) {
        const { edit } = this.props;
        let oldImageurl = edit.imageurl ? edit.imageurl : null;

        await this.props.cropImageObj(
            oldImageurl,
            edit.id,
            edit.userId,
            keyforUrl,
            width,
            height,
            x,
            y
        );

        const { activityId } = this.props.match.params;
        await this.props.fetchOneUserActivityForEditting(activityId);

        setTimeout(() => {
            this.setState({
                showCrop: false,
                showIcon: true
            });
        }, 1000);
    }

    renderImg(edit) {
        const { classes } = this.props;
        if (edit) {
            return (
                <div className={classes.imageWrapper}>
                    <img
                        className={classes.image}
                        src={
                            edit.imageurl ? (
                                config.BUCKET_URL + edit.imageurl
                            ) : (
                                testPic
                            )
                        }
                    />

                    <FileInput
                        onGetImgUrl={file => this.onGetImgUrl(file)}
                        onCropImageObject={(keyforUrl, width, height, x, y) =>
                            this.onCropImageObject(
                                keyforUrl,
                                width,
                                height,
                                x,
                                y
                            )}
                        showCrop={this.state.showCrop}
                        showIcon={this.state.showIcon}
                    />
                    {this.props.imageError}
                </div>
            );
        }
    }
    renderEditPanel(classes) {
        if (this.props.error) {
            return <div>{this.props.error}</div>;
        }
        if (!localStorage["jwtToken"]) {
            return null;
        }

        const { edit, msg } = this.props;
        // receive { warning:"xxx"} from backend. edit initial value is {}, so still use obj to pass warning msg here
        if (edit.hasOwnProperty("warning")) {
            return <div style={{ textAlign: "center" }}>{edit.warning}</div>;
        }

        return (
            <div style={{ marginBottom: 60 }}>
                <div style={{ margin: "0 auto 20px auto" }}>
                    {this.renderImg(edit)}
                </div>

                <div className="wrap form-group" key="basic">
                    <h4 className="category-title">你的基本活动信息</h4>
                    <Field
                        fullWidth
                        key="theme"
                        name="theme"
                        type="text"
                        component={TextField}
                        className={classes.textField}
                        placeholder="活动的主题(例：骨灰级成都吃货地图)"
                    />

                    <Field
                        key="location"
                        name="location"
                        type="text"
                        component={AutocompleteField}
                        placeholder="活动所在的国家和城市"
                        props={this.props}
                    />

                    <Field
                        fullWidth
                        key="budget"
                        name="budget"
                        type="text"
                        component={TextField}
                        className={classes.textField}
                        placeholder="活动费用/人"
                    />
                    <Field
                        fullWidth
                        key="numberOfPeople"
                        name="numberOfPeople"
                        type="text"
                        component={TextField}
                        className={classes.textField}
                        placeholder="你能接收的人数上限"
                    />
                </div>
                <div className="wrap form-group" key="date">
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
                <div className="wrap form-group" key="service">
                    <h4 className="category-title">你可以提供的向导服务</h4>
                    <Field
                        key="services"
                        name="services"
                        component={popupSearchMultiServices}
                        data={services}
                    />
                </div>
                <div className="wrap form-group" key="story">
                    <h4 className="category-title">我在这个地方的故事</h4>
                    <Field
                        fullWidth
                        key="story"
                        name="story"
                        component={TextField}
                        id="multiline-flexible"
                        multiline
                        rowsMax="4"
                        placeholder="不超过300个字"
                        className={classes.textField}
                    />
                </div>
                <div className="input-success">{msg}</div>
            </div>
        );
    }

    render() {
        const { classes, handleSubmit, fullScreen, edit } = this.props;
        return (
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <div>
                        <ConfirmDelete
                            edit={edit}
                            onClick={this.handleClose}
                            onDelete={() => {
                                this.deleteActivity(this.props.edit.userId);
                            }}
                        />
                    </div>
                </Dialog>
                <form
                    style={{ marginBottom: 0 }}
                    onSubmit={handleSubmit(this.submitForm.bind(this))}
                >
                    <PageHeader
                        history={this.props.history}
                        style={{
                            width: "95vw",
                            maxWidth: 600
                        }}
                        title="修改活动"
                    />
                    {this.renderEditPanel(classes)}
                    <div className={classes.btnGroup}>
                        <Button
                            type="submit"
                            color="primary"
                            style={{ backgroundColor: "#1976D2" }}
                            raised
                            className={classes.button}
                        >
                            修改
                        </Button>
                        <Button
                            color="primary"
                            style={{ backgroundColor: "#D32F2F" }}
                            raised
                            className={classes.button}
                            onClick={() => {
                                this.setState({
                                    open: true
                                });
                            }}
                        >
                            删除
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {
        theme,
        location,
        budget,
        numberOfPeople,
        story,
        departdate,
        finishdate,
        services
    } = state.ActivityReducer.edit;
    return {
        imageError: state.ImageReducer.error,
        edit: state.ActivityReducer.edit,
        error: state.ActivityReducer.error,
        msg: state.ActivityReducer.message,
        initialValues: {
            theme,
            location,
            budget,
            numberOfPeople,
            story,
            departdate,
            finishdate,
            services
        }
    };
};

EditActivityPanel = reduxForm({
    form: "UpdateUserActivity",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
    enableReinitialize: true
})(withStyles(styles, { withTheme: true })(EditActivityPanel));

export default (EditActivityPanel = connect(mapStateToProps, actions)(
    EditActivityPanel
));