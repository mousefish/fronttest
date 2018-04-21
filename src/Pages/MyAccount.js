import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import * as actions from "../Actions";
import MyAccountItem from "./MyAccountItem";
import MyAccountLoggedinHeader from "./MyAccountLoggedinHeader";
import MyAccountRegisterHeader from "./MyAccountRegisterHeader";
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
        backgroundColor: "#1976D2"
    }
});

class MyAccount extends Component {
    state = {
        open: false
    };

    componentWillMount() {
        this.props.fetchUser(0);
    }
    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick(item) {
        let token = localStorage.getItem("jwtToken");
        if (token) {
            switch (item) {
                case "账号信息":
                    return this.props.history.push(`/myBasicInfo`);
                case "我的圈子":
                    return this.props.history.push(`/story/0`);
                case "我的活动":
                    return this.props.history.push(`/userActivities/0`);
                case "我的愿望":
                    return this.props.history.push(`/userWishes/0`);
                case "我的收藏":
                    return this.props.history.push(`/myFavorites`);
            }
        } else {
            this.setState({
                open: true
            });
        }
    }
    renderItems() {
        const { classes } = this.props;
        const items = [
            "账号信息",
            "我的圈子",
            "我的活动",
            "我的愿望",
            "我的收藏",
            "我的好友",
            "系统设置",
            "关于我们",
            "版本更新"
        ];
        return items.map((item, index, items) => {
            return (
                <MyAccountItem
                    key={index}
                    item={item}
                    history={this.props.history}
                    onClick={() => {
                        this.handleClick(item);
                    }}
                />
            );
        });
    }

    renderMyHeader() {
        let token = localStorage.getItem("jwtToken");
        const { user } = this.props;
        if (token) {
            return (
                <MyAccountLoggedinHeader
                    userName={user.username}
                />
            );
        } else {
            return <MyAccountRegisterHeader />;
        }
    }

    render() {
        const { history, classes, fullScreen } = this.props;
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
                        退出账户(FOR TESTING PURPOSE. NO NEED IN PRODUCTION)
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer.basicInfo
    };
};

export default connect(mapStateToProps, actions)(
    withStyles(styles)(withRouter(MyAccount))
);