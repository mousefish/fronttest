import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";

import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";

import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";

import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PersonProfileDetails from "../Components/container/PersonProfileDetails";
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
    state = {
        open: false,
        key: "",
        value: "",
        err: ""
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleUpdate(data) {
         //  Needs to clear the err message to avoid showing the previous one
        this.setState({
            err:""
        })
        // valueToBeUpdated {userId: 23, username: "jingyi"}
        this.setState({
            open: true,
            key: Translation[data.key],
            value: data.value
        });
    }

    submitUpdates = () => {
        let inputValue = this.state.value;
        switch (this.state.key) {
            case "邮箱":
                if (
                    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                        inputValue
                    )
                ) {
                    this.setState({
                        err: "请输入有效邮箱"
                    });
                }
                break;

            case "密码":
                if (inputValue.length !== 6) {
                    this.setState({
                        err: "密码长度为六位"
                    });
                }
                break;

            default:
                if (!inputValue) {
                    this.setState({
                        err: "值不能为空"
                    });
                }
        }
    };

    renderPage() {
        let originalUser = localStorage.getItem("user");
        let user;
        if (originalUser) {
            user = JSON.parse(originalUser);
            return (
                <div>
                    <PageHeader history={this.props.history} title="我的信息" />
                    <PersonProfileDetails
                        profile={user}
                        onClick={data => this.handleUpdate(data)}
                    />
                </div>
            );
        } else {
            return <div>无权访问</div>;
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="wrapper">
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        更改{this.state.key}信息
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText style={{ width: 400 }} />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label={this.state.key}
                            type="email"
                            value={this.state.value}
                            onChange={e => {
                                this.setState({ value: e.target.value });
                            }}
                            fullWidth
                        />
                        <div className={classes.errMsg}>{this.state.err}</div>
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

const mapStateToProps = state => {
    return {
        user: state.UserReducer
    };
};

export default connect(mapStateToProps, actions)(
    withRouter(withStyles(styles)(PrivateBasicInfo))
);