import React, { Component } from "react";
import * as actions from "../Actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";

class UserWishes extends Component {
    componentWillMount() {
        const { userId } = this.props.match.params;
        this.props.fetchUserWishes(userId);
    }

    renderUserWishes(userWishes) {
        if(userWishes && typeof userWishes[0] === "string"){
            return <div style={{textAlign:"center"}}>{userWishes[0]}</div>
        }
        return userWishes.map(item => {
            return (
                <Link
                    to={`/wish/${item.id}`}
                    className="unlink"
                    key={item.id}
                >
                    <li key={item.id}>{item.location}</li>
                </Link>
            );
        });
    }

    render() {
        const { userWishes } =this.props
        return (
            <div className="wrapper">
            <PageHeader title="我的愿望" history={this.props.history}/>
            <ul className="unlist">{this.renderUserWishes(userWishes)}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("userWishes",state.WishReducer.userWishes )
    return {
        userWishes: state.WishReducer.userWishes,
    };
};
export default connect(mapStateToProps, actions)(UserWishes);