import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Button from "material-ui/Button";
import gallery from "../Assets/Images/gallery.jpg";
import { Link } from "react-router-dom";
import * as actions from "../Actions";
import PageHeader from "./PageHeader";
import FriendComments from "./FriendComments";

const styles = theme => ({
    innerWrapper: {
        marginBottom: 20
    },
    button: {
        margin: theme.spacing.unit,
        width: "55%"
    },
    galleryWrapper: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },

    gallary: {
        position: "relative",
        display:"flex",
        flexFlow:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    gallaryLayer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        opacity: 0.7,
    },
    checkAll:{
        position: "absolute",
        color:"#0D47A1",
        border:"2px solid #0D47A1",
        padding:"5px 20px",
        letterSpacing:2,
        borderRadius:15,
    },

    imageFrame: {
        width: "calc(50% - 1px)",
        marginBottom: 2
        // border:"5px solid red"
    },

    imageWrapper: {
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        maxHeight: "100%"
    },

    link: {
        color: "#337ab7"
    }
});

class Story extends Component {
    state = {
        isExpanded: false
    };

    componentWillMount() {
        const userId = this.props.match.params.userId;
        this.props.fetchComments(userId);
    }

    render() {
        const classes = this.props.classes;
        const { user } = this.props;
        if (!user) {
            return <div>loading</div>;
        }

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="我的圈子" />
                <h4>我的相册</h4>
                <div className={classes.gallary}>
                    <div className={classes.gallaryLayer}/>
                    <h2 className={classes.checkAll}>查看全部照片</h2>

                    <div className={classes.galleryWrapper}>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className={classes.imageWrapper}
                            />
                        </div>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className={classes.imageWrapper}
                            />
                        </div>

                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className={classes.imageWrapper}
                            />
                        </div>
                        <div className={classes.imageFrame}>
                            <img
                                src={gallery}
                                alt=""
                                className={classes.imageWrapper}
                            />
                        </div>
                    </div>
                </div>
                <FriendComments comments={user.comments}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("!user", state.UserReducer)
    return {
        user: state.UserReducer
    };
};
export default connect(mapStateToProps, actions)(withStyles(styles)(Story));