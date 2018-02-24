import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import * as actions from "../Actions";
import MyItem from "./MyItem";
import MyHeader from "./MyHeader";
import RegisterHeader from "./RegisterHeader";
import Button from "material-ui/Button";
import Dialog from "material-ui/Dialog";
import RegisterDialog from "./RegisterDialog";


const styles = theme => ({
    list: {
        listStyle: "none",
        padding: 0
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },

    button: {
        margin: theme.spacing.unit,
        width: "45%",
        padding: 10,
        fontSize: 14,
        backgroundColor:"#1976D2"
    },
});

class MyAccount extends Component {
    state = {
        open: false
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    handleClick(item) {
        let rawUser = localStorage.getItem("user");
        if (rawUser) {
            switch (item) {
                case "账号信息":
                    return this.props.history.push("/myInfo");
            }
        } else {
            this.setState({
                open:true
            })
        }
    }
    renderItems() {
        let rawUser = localStorage.getItem("user");

        const { classes } = this.props;
        const items = [
            "账号信息",
            "我的活动 | 愿望",
            "我的收藏",
            "我的好友",
            "系统设置",
            "关于我们",
            "版本更新"
        ];
        return items.map((item, index, items) => {
            return (
                <MyItem
                    key={index}
                    item={item}
                    rawUser={rawUser}
                    history={this.props.history}
                    onClick={() => {
                        this.handleClick(item);
                    }}
                />
            );
        });
    }

    renderMyHeader() {
        let rawUser = localStorage.getItem("user");
        let user;

        if (rawUser) {
            user = JSON.parse(rawUser);

            return <MyHeader history={this.props.history} user={user} />;
        } else {
            return <RegisterHeader />;
        }
    }

    render() {
        const { history, classes,fullScreen} = this.props;
        return (
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <div>
                        <RegisterDialog onClick={this.handleClose} />
                    </div>
                </Dialog>

                {this.renderMyHeader()}
                <div className="wrapper">
                    <div>
                        <ul className={classes.list}>{this.renderItems()}</ul>
                    </div>
                    <button
                        style={{
                            backgroundColor: "red",
                            marginTop: 30,
                            padding: 20
                        }}
                        onClick={() => this.props.logout(this.props.history)}
                    >
                        退出账户(only for testing)
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(
    withStyles(styles)(withRouter(MyAccount))
);