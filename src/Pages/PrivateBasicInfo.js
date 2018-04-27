import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Button from "material-ui/Button";
import Radio from "material-ui/Radio";
import { RadioGroup, TextField } from "redux-form-material-ui";
import { FormControlLabel } from "material-ui/Form";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import IconButton from "material-ui/IconButton";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "material-ui/Dialog";
import PageHeader from "./PageHeader";
import * as actions from "../Actions";
import validate from "../Utility/validate";
import AutocompleteField from "../Components/container/AutocompleteField";
import popupSearchMultiServices from "../Components/container/popupSearchMultiServices";
import PasswordSetVisibility from "../Components/presenter/PasswordSetVisibility";
import FileInput from "./AddActivity/FileInput";
import defaultAvatar from "../Assets/Images/defaultAvatar.png";
import config from "../config/config";
import languages from "../Data/languages";
import Bigbutton from "./Bigbutton";

const styles = theme => ({
    button: {
        width: "95%",
        backgroundColor: "#1976D2"
    },

    shortBtn: {
        width: "30%",
        border: "1px solid #1976D2",
        borderRadius: 5,
        padding: "5px 0",
        letterSpacing: 2,
        margin: "15px 0",
        color: "#1976D2",
        textAlign: "center"
    },
    errMsg: {
        color: "red"
    },
    // may need to define the max width later!
    imageWrapper: {
        position: "relative",
        height: 128
        // border: "2px solid green"
    },
    image: {
        flex: 1,
        maxWidth: "100%",
        height: 128,
        maxHeight: 128
        // border: "1px solid red"
    },
    radioInner: {
        width: "95%",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        marginTop: 5
        // border:"1px solid red"
    },
    textField: {
        padding: "10px 0"
    },
    imageUploadingError: {
        color: "red",
        margin: "10px 0"
    }
});

class PrivateBasicInfo extends Component {
    componentWillMount() {
        let token = localStorage.getItem("jwtToken");
        if (token) {
            // 0 means the person itself is reviewing his/ her file
            this.props.fetchUser(0);
        } else {
            return null;
        }
    }

    state = {
        open: false,
        mailMarker: ""
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    async onGetImgUrl(file) {
        await this.props.replaceWithNewImg(0, file);
    }

    async onCropImageObject(keyforUrl, width, height, x, y) {
        const { user } = this.props;
        let oldImageurl = user.imageurl ? user.imageurl : null;
        await this.props.cropImageObj(
            oldImageurl,
            null,
            0,
            keyforUrl,
            width,
            height,
            x,
            y
        );
        this.setState({
            open: false
        });
    }

    renderImg() {
        const { classes, user } = this.props;
        if (user) {
            return (
                <div className={classes.imageWrapper}>
                    <img
                        className={classes.image}
                        src={
                            user.imageurl ? (
                                config.BUCKET_URL + user.imageurl
                            ) : (
                                defaultAvatar
                            )
                        }
                    />
                    <FileInput
                        purpose="avatar"
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
    submitForm(values) {
        let result = {};
        const { initialValues } = this.props;
        let keys = Object.keys(values);
        keys.forEach(key => {
            if (
                values[key] !== initialValues[key] ||
                !initialValues.hasOwnProperty(key)
            ) {
                result[key] = values[key];
            }
        });
        // console.log("result", result);
        if (Object.keys(result).length > 0) {
            this.props.updateUserBasicInfo(result);
        }

        this.setState({
            open: false
        });
    }

    renderEdit() {
        const { user, classes, msg } = this.props;
        // need to add this condition to avoid passing undefined value to AutoComplete field
        if (Object.keys(user).length === 0) {
            return null;
        }
        return (
            <div className="wrapper">
                <div className="form-group">
                    {this.renderImg()}
                    <div className={classes.imageUploadingError}>
                        {this.props.imageError}
                    </div>
                </div>
                <div className="form-group">
                    <Field
                        fullWidth
                        key="email"
                        name="email"
                        component={TextField}
                        label="邮箱地址"
                        placeholder="邮箱地址"
                    />
                    <div
                        className={classes.shortBtn}
                        onClick={() => this.setState({ open: true })}
                    >
                        修改密码
                    </div>
                    <Field
                        key="username"
                        name="username"
                        type="text"
                        component={TextField}
                        placeholder="用户名"
                        label="用户名"
                    />
                </div>

                <div className="form-group">
                    <Field
                        key="sex"
                        name="sex"
                        component={RadioGroup}
                        className={classes.radioInner}
                    >
                        <FormControlLabel
                            value="男"
                            control={<Radio />}
                            label="男"
                        />
                        <FormControlLabel
                            value="女"
                            control={<Radio />}
                            label="女"
                        />
                        <FormControlLabel
                            value="其他"
                            control={<Radio />}
                            label="其他"
                        />
                    </Field>

                    <Field
                        className={classes.textField}
                        key="age"
                        name="age"
                        type="text"
                        component={AutocompleteField}
                        placeholder="年龄范围，按提示列表选择"
                        props={this.props}
                        label="年龄范围"
                        marker="age"
                        defaultValue={user.age}
                        id="integration-downshift1"
                    />

                    <Field
                        className={classes.textField}
                        ket="city"
                        name="city"
                        type="text"
                        component={AutocompleteField}
                        placeholder="当前居住的城市，按提示列表选择"
                        label="当前居住的城市，按提示列表选择"
                        props={this.props}
                        marker="loc"
                        defaultValue={user.city}
                        id="integration-downshift2"
                    />

                    <Field
                        className={classes.textField}
                        key="yearOfLiving"
                        name="yearOfLiving"
                        type="text"
                        component={AutocompleteField}
                        label="当前居住城市年限"
                        placeholder="当前居住的城市的年限，按提示列表选择"
                        props={this.props}
                        marker="year"
                        defaultValue={user.yearOfLiving}
                        id="integration-downshift3"
                    />

                    <h6>掌握的语言</h6>
                    <Field
                        className={classes.textField}
                        key="language"
                        name="language"
                        component={popupSearchMultiServices}
                        data={languages}
                        label="掌握的语言"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <Field
                        key="school"
                        name="school"
                        type="text"
                        component={TextField}
                        label="毕业或在读院校"
                    />

                    <Field
                        key="occupation"
                        name="occupation"
                        type="text"
                        component={TextField}
                        label="职业：学生，公务员，导游，自由职业......"
                    />

                    <Field
                        fullWidth
                        key="bio"
                        name="bio"
                        component={TextField}
                        id="multiline-flexible"
                        multiline
                        rowsMax="4"
                        placeholder="关于我的个人介绍"
                        label="关于我的个人介绍"
                        className={classes.textField}
                    />
                </div>

                <div className="centralize-button">
                    <Bigbutton type="submit" text="保存修改" />
                    <div className="input-success">{msg}</div>
                </div>
            </div>
        );
    }

    render() {
        const { classes, handleSubmit, user } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                <PageHeader history={this.props.history} title="修改个人资料" />
                <Dialog
                    open={this.state.open}
                    aria-labelledby="form-dialog-title"
                >
                    <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
                        <DialogContent>
                            <Field
                                key="password"
                                name="password"
                                type="password"
                                component={PasswordSetVisibility}
                                label="输入密码：8—25位数"
                                placeholder="输入密码：8—25位数"
                            />
                        </DialogContent>

                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                稍后再说
                            </Button>

                            <Button color="primary" type="submit">
                                更改
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
                {this.renderEdit()}
            </form>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.UserReducer.basicInfo);
    const {
        mail,
        username,
        sex,
        age,
        city,
        yearOfLiving,
        school,
        occupation,
        language,
        bio
    } = state.UserReducer.basicInfo;
    return {
        user: state.UserReducer.basicInfo,
        msg: state.UserReducer.msg,
        imageError: state.ImageReducer.error,
        initialValues: {
            email: mail,
            username,
            sex,
            age,
            city,
            yearOfLiving,
            school,
            occupation,
            language,
            bio
        }
    };
};

PrivateBasicInfo = reduxForm({
    form: "UpdatePrivateBasicInfo",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate,
    enableReinitialize: true
})(withStyles(styles, { withTheme: true })(PrivateBasicInfo));

export default (PrivateBasicInfo = connect(mapStateToProps, actions)(
    PrivateBasicInfo
));