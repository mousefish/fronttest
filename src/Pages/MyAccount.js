import React, { Component } from "react";
// import * as actions from "../Actions";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import * as actions from '../Actions';
import PageHeader from "./PageHeader";


const styles = theme => ({
    subHeader: {
        display: "flex",
        flexFlow: "row nowrap",
        borderTop: "1px solid grey",
        padding: 20
    },

    subHeaderRight: {
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

    list: {
        listStyle: "none",
        padding:0,
    },

    ele: {
        lineHeight: 2,
        paddingLeft:20,
        borderTop: "1px solid grey"
    }
});




class MyAccount extends Component {
    renderEle(classes) {
        let eles = ["我的活动 | 愿望", "我的收藏", "我的好友", "系统设置", "关于我们", "版本更新"];
        return eles.map((ele, index, eles) => {
            return <li key={index} className={classes.ele}>{eles[index]}</li>;
        });
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="我的事项"/>
                <div className={classes.subHeader}>
                    <div>
                        <img src="https://placeholdit.co//i/80x80?&text=portrait" />
                    </div>
                    <div className={classes.subHeaderRight}>
                        <p>陈嘉熙</p>
                        <p>完善个人资料(75%)</p>
                    </div>
                </div>

                <div>
                    <ul className={classes.list}>{this.renderEle(classes)}</ul>
                    <button onClick={()=>this.props.logout(this.props.history)}>推出账户(temp for testing)</button>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(withStyles(styles)(withRouter(MyAccount)));