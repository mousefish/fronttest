import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import gallery from "../Assets/Images/gallery.jpg";
import { Link } from "react-router-dom";
import * as actions from "../Actions";
import PageHeader from "./PageHeader";

const styles = theme => ({
    innerWrapper: {
        marginBottom: 20
    },
    button: {
        margin: theme.spacing.unit,
        width: "55%"
    },
    galleryWrapper: {
        whiteSpace: "nowrap",
        overflowX: "auto"
    },
    imageFrame: {
        display: "inline-block",
        marginRight: 15,
        height: 200,
        width: 200
    },

    link: {
        color: "#337ab7"
    },
    fade: {
        overflow: "hidden",
        position: "relative",
        height: "3.6em"
    },
    fadeHelper: {
        textAlign: "right",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "70%",
        height: "1.2em",
        background:
            "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)"
    },
    toggler: {
        marginTop:2,
        alignSelf:"center",
        color: "#fff",
        backgroundColor:"#1976D2",
        borderRadius:10,
        width:100
    }
});

class Story extends Component {
    state = {
        isExpanded: false
    };

    componentWillMount() {
        const userId = this.props.match.params.userId;
        this.props.fetchUser(userId);
    }

    render() {
        const classes = this.props.classes;
        const { user } = this.props;
        if (!user) {
            return <div>loading</div>;
        }

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="我的旅行故事" />
                <div className="flex-inner-wrapper">
                    <div className={this.state.isExpanded ? "" : classes.fade}>
                        我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行我爱旅行
                        <span
                            className={
                                this.state.isExpanded ? "" : classes.fadeHelper
                            }
                        />
                    </div>
                    <button
                        className={classes.toggler}
                        onClick={() =>
                            this.setState(prevState => ({
                                isExpanded: !prevState.isExpanded
                            }))}
                    >
                        {this.state.isExpanded ? "收回内容" : "展开全部"}
                    </button>
                </div>
                <div className="gallery">
                    <h4 style={{ textAlign: "center" }}>我的旅游相册，快来看看吧</h4>
                    <div className={classes.galleryWrapper}>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className="image-wrapper"
                            />
                        </div>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className="image-wrapper"
                            />
                        </div>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className="image-wrapper"
                            />
                        </div>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className="image-wrapper"
                            />
                        </div>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className="image-wrapper"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex-inner-wrapper">
                    <Link
                        to="/friendComments"
                        className="unlink"
                        style={{ textAlign: "center" }}
                    >
                        <h2 className={classes.link}>来看看小伙伴对我的评价吧</h2>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserReducer
    };
};
export default connect(mapStateToProps, actions)(withStyles(styles)(Story));