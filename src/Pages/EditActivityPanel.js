import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import * as actions from "../Actions";
import PageHeader from "./PageHeader";
import validate from "../Utility/validate";
import popupSearchDateField from "../Components/container/popupSearchDateField";
import SelectRangeField from "../Components/container/SelectRangeField";
import popupSearchMultiServices from "../Components/container/popupSearchMultiServices";
import AutocompleteField from "../Components/container/AutocompleteField";
import { TextField } from "redux-form-material-ui";
import Dialog from "material-ui/Dialog";
import services from "../Data/services";
import ConfirmDelete from "./ConfirmDelete";
import RegisterDialog from "./RegisterDialog";
import config from "../config/config";
import FileInput from "./AddActivity/FileInput";
import defaultBG from "../Assets/Images/defaultBG.png";
import Fixedbutton from "./Fixedbutton";

const styles = theme => ({
    root: {
        width: 500
    },

    btnGroup: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        // border: "1px solid green"
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
    },
    rangeContainer: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center"
    },
    formControl: {
        minWidth: 120,
        // border:'1px solid red',
        height: 60
    },
    imageUploadingError: {
        color: "red",
        textAlign: "center",
        margin: "10px auto"
    }
});

class EditActivityPanel extends Component {
    state = {
        open: false
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
        // console.log("values", values);
        const { edit, history } = this.props;
        const { activityId } = this.props.match.params;

        const keys = [
            "theme",
            "location",
            "budget",
            "minNumOfPeople",
            "maxNumOfPeople",
            "departdate",
            "finishdate",
            "services",
            "story"
        ];

        let edittedValues = {};
        keys.forEach(key => {
            if (key === "services") {
                if (_.isEqual(edit[key], values[key]) === false) {
                    edittedValues[key] = values[key];
                }
            } else {
                if (edit[key] !== values[key]) {
                    edittedValues[key] = values[key];
                }
            }
        });

        if (
            Object.keys(edittedValues).length === 0 &&
            !values.hasOwnProperty("images")
        ) {
            // TEMP VERSION FOR AVOIDING MISTAKE!!
            history.push(`/activity/${activityId}/CH`);
            return null;
        }

        this.props.updateUserActivity(activityId, edittedValues, history);
    }

    async onGetImgUrl(file) {
        const { edit } = this.props;
        await this.props.replaceWithNewImg(edit.userId, file);
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
                                defaultBG
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
                    />
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
        if (Object.keys(edit).length === 0) {
            return null;
        }
        if (edit.hasOwnProperty("warning")) {
            return <div style={{ textAlign: "center" }}>{edit.warning}</div>;
        }

        return (
            <div style={{ marginBottom: 60 }}>
                <div style={{ margin: "0 auto 20px auto" }}>
                    {this.renderImg(edit)}
                    <div className={classes.imageUploadingError}>
                        {this.props.imageError}
                    </div>
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
                        label="活动所在的国家和城市"
                        props={this.props}
                        defaultValue={edit.location}
                        marker="loc"
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
                            component={SelectRangeField}
                            title="最多人数"
                            props={this.props}
                        />
                    </div>
                </div>
                <div className="wrap form-group" key="date">
                    <h4 className="category-title">你的活动时间</h4>
                    <Field
                        key="dapartdate"
                        name="departdate"
                        type="text"
                        component={popupSearchDateField}
                        placeholder="活动出发时间"
                        defaultValue={new Date(edit.departdate)}
                    />
                    <Field
                        key="finishdate"
                        name="finishdate"
                        type="text"
                        component={popupSearchDateField}
                        defaultValue={new Date(edit.finishdate)}
                        placeholder="活动结束时间"
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
                <div className={classes.btnGroup}>
                    <Fixedbutton text="修改" type="submit" width="50%" />
                    <Fixedbutton
                        width="50%"
                        text="删除"
                        color="#D32F2F"
                        onClick={() => {
                            this.setState({
                                open: true
                            });
                        }}
                    />
                </div>
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
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("editreducer", state.ActivityReducer.edit);
    const {
        theme,
        location,
        budget,
        minNumOfPeople,
        maxNumOfPeople,
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
            minNumOfPeople,
            maxNumOfPeople,
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