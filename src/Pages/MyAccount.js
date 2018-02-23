import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "material-ui/Avatar";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import * as actions from "../Actions";
import pic from "../Assets/Images/profile.jpg";
import MyItem from "./MyItem";

const styles = theme => ({
    avatar: {
        width: 70,
        height: 70
    },

    myHeader: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        padding: 15,
        marginBottom: 5,
        backgroundColor: "#1976D2",
        color: "#fff"
    },

    myHeaderRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 20,
        fontSize:"1.2rem"
    },

    list: {
        listStyle: "none",
        padding: 0
    }
});

class MyAccount extends Component {
    state = {
        user: {}
    };

    componentWillMount() {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.setState({
                user
            });
        }
    }

    renderItems() {
        const { classes } = this.props;
        const items = ["账号信息","我的活动 | 愿望", "我的收藏", "我的好友", "系统设置", "关于我们", "版本更新"];
        return items.map((item, index, items) => {
            return <MyItem key={index} item={item} />;
        });
    }
    render() {
        const { history, classes } = this.props;
        const { user } = this.state;
        return (
            <div>
                <div
                    className={classes.myHeader}
                    onClick={() => history.push("/myInfo")}
                >
                    <Avatar
                        alt="profile"
                        src={pic}
                        className={classes.avatar}
                    />
                    <div className={classes.myHeaderRight}>{user.mail}</div>
                </div>
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