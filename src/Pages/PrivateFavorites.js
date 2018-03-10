import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../Actions";
import PageHeader from "./PageHeader";

class PrivateFavorites extends Component {
    componentWillMount() {
        let you = localStorage["user"];
        if (you) {
            this.props.fetchUserFavorites();
        }
    }

    renderFavorites(favorites) {
        if(favorites && favorites.hasOwnProperty("warning")){
            return<div>{favorites.warning}</div>
        }
        return favorites.map(fav => {
            return (
                <Link
                    to={`/activity/${fav.id}`}
                    className="unlink"
                    key={fav.id}
                >
                    <li>{fav.theme}</li>
                </Link>
            );
        });
    }

    render() {
        const { favorites } = this.props;
        return (
            <ul>
                <PageHeader history={this.props.history} title="我的活动收藏" />
                {this.renderFavorites(favorites)}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.FavoriteReducer);
    return {
        favorites: state.FavoriteReducer
    };
};

export default connect(mapStateToProps, actions)(PrivateFavorites);