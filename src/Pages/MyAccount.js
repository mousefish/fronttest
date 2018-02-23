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
        width: 60,
        height: 60
    },

    subHeader: {
        margin: "5px 0px",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#1976D2",
        color: "#fff"
    },

    subHeaderRight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: 20
    },

    list: {
        listStyle: "none",
        padding: 0
    },


});

class MyAccount extends Component {
    renderItems() {
        const { classes } = this.props;
        const items = ["我的活动 | 愿望", "我的收藏", "我的好友", "系统设置", "关于我们", "版本更新"];
        return items.map((item, index, items) => {
            return (
               <MyItem item={item} />
            );
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="wrapper">
                <div className={classes.subHeader}>
                    <Avatar
                        alt="profile"
                        src={pic}
                        className={classes.avatar}
                    />
                    <div className={classes.subHeaderRight}>陈嘉熙</div>
                </div>

                <div>
                    <ul className={classes.list}>{this.renderItems()}</ul>
                </div>
                <button style={{backgroundColor:"red", marginTop:30, padding:20}}
                        onClick={() => this.props.logout(this.props.history)}
                    >
                        退出账户(only for testing)
               </button>
            </div>
        );
    }
}

export default connect(null, actions)(
    withStyles(styles)(withRouter(MyAccount))
);