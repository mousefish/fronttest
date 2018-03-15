import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import Radio, { RadioGroup } from "material-ui/Radio";
import { FormControlLabel } from "material-ui/Form";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";

import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";

import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import BasicInfoItem from "../Components/container/BasicInfoItem";
import PageHeader from "./PageHeader";
import * as actions from "../Actions";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "material-ui/Dialog";

import TextField from "material-ui/TextField";
import Translation from "../Data/UserBasicInfoENtoCH";

import verfiyAndSubmit from "../Utility/verfiyAndSubmit";

const sexOptions = ["男", "女", "其他"];
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: "95%"
    },
    errMsg: {
        color: "red"
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
        key: "",
        value: "",
        err: "",
        mailMarker: ""
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handlePopup(data) {
        // valueToBeUpdated {key: "mail", value: "xyz@abc.com"}
        //  Needs to clear the err message to avoid showing the previous one
        // need this to verify password: password cannot be part of email!
        if (data.key === "mail") {
            this.setState({
                mailMarker: data.value
            });
            // when user only update password, not clicking on or updating on email!
        }else if(data.key === "password"){
            this.setState({
                mailMarker: this.props.user.basicInfo.mail
            });
        };
        this.setState({
            open: true,
            original: data.value,
            key: data.key,
            value: data.value,
            err: ""
        });
    }

    handleChange(e) {
        if (this.state.key === "mail") {
            // need this to verify password: password cannot be part of email!
            this.setState({
                mailMarker: e.target.value
            });
        }
        this.setState({ value: e.target.value });
    }

    submitUpdates = () => {
        this.setState({
            err: ""
        });
        verfiyAndSubmit(this);
    };

    // renderPage is called everytime the Dialog is opened and closed!!!
    renderPage() {
        if (!this.props.user) {
            return <div>loading...</div>;
        }

        return (
            <div>
                <PageHeader history={this.props.history} title="我的信息" />
                <BasicInfoItem
                    profile={this.props.user.basicInfo}
                    onClick={data => this.handlePopup(data)}
                />
            </div>
        );
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="wrapper" style={{fontSize:"1.1rem"}}>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        更改{Translation[this.state.key]}信息
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{ width: 400 }} />
                        {this.state.key === "sex" ? (
                            <RadioGroup
                                ref={node => {
                                    this.radioGroup = node;
                                }}
                                aria-label="gender"
                                name="gener"
                                value={this.state.value}
                                onChange={e => {
                                    this.setState({ value: e.target.value });
                                }}
                            >
                                {sexOptions.map(option => (
                                    <FormControlLabel
                                        value={option}
                                        key={option}
                                        control={<Radio />}
                                        label={option}
                                    />
                                ))}
                            </RadioGroup>
                        ) : (
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label={Translation[this.state.key]}
                                type="email"
                                value={this.state.value}
                                onChange={e => this.handleChange(e)}
                                fullWidth
                            />
                        )}
                        <div className={classes.errMsg}>
                            {this.state.err || this.props.user.err}
                        </div>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            稍后再说
                        </Button>
                        <Button color="primary" onClick={this.submitUpdates}>
                            更改
                        </Button>
                    </DialogActions>
                </Dialog>
                {this.renderPage()}
            </div>
        );
    }
}

// err from backend errors:
// if the user update his email with a one that is already used by another user!
// or err from database
const mapStateToProps = state => {
    console.log("UserReducer", state.UserReducer);
    return {
        user: state.UserReducer
    };
};

export default connect(mapStateToProps, actions)(
    withRouter(withStyles(styles)(PrivateBasicInfo))
);