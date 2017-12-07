import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import gallery from "../Assets/Images/gallery.jpg";
import { Link } from "react-router-dom";

const styles = theme => ({
    wrapper: {
        width: "90%",
        margin: "auto",
        marginTop: 20,
        marginBottom: 50,
        textAlign: "center"
    },
    innerWrapper: {
        marginBottom: 20
    },
    button: {
        margin: theme.spacing.unit
    },
    galleryWrapper: {
        whiteSpace: "nowrap",
        overflowX: "auto"
    },
    imageWrapper: {
        display: "inline-block",
        marginRight: 15,
        height: 200,
        width: 200
    },
    image: {
        width: "100%",
        maxWidth: "100%",
        maxHeight: "100%"
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
    }
});

class Story extends Component {
    state = {
        isExpanded: false
    };

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.wrapper}>
                <div className={classes.innerWrapper}>
                    <h2>我在这座城市的故事</h2>
                    <div className={this.state.isExpanded ? "" : classes.fade}>
                        <p style={{ textAlign: "left" }}>
                            {this.props.storyData.myStory}
                        </p>
                        <span
                            className={
                                this.state.isExpanded ? "" : classes.fadeHelper
                            }
                        />
                    </div>
                    <Button
                        color="primary"
                        raised
                        className={classes.button}
                        onClick={() =>
                            this.setState(prevState => ({
                                isExpanded: !prevState.isExpanded
                            }))}
                    >
                        {this.state.isExpanded ? "收回内容" : "展开全部内容"}
                    </Button>
                </div>
                <div className={classes.innerWrapper}>
                    <h2>我的旅游相册，快来看看吧</h2>
                    <div className={classes.galleryWrapper}>
                        <div className={classes.imageWrapper}>
                            <img
                                src={gallery}
                                alt="image in my gallery"
                                className={classes.image}
                            />
                        </div>
                        <div className={classes.imageWrapper}>
                            <img
                                src={gallery}
                                alt="image in my gallery"
                                className={classes.image}
                            />
                        </div>
                        <div className={classes.imageWrapper}>
                            <img
                                src={gallery}
                                alt="image in my gallery"
                                className={classes.image}
                            />
                        </div>
                        <div className={classes.imageWrapper}>
                            <img
                                src={gallery}
                                alt="image in my gallery"
                                className={classes.image}
                            />
                        </div>
                        <div className={classes.imageWrapper}>
                            <img
                                src={gallery}
                                alt="image in my gallery"
                                className={classes.image}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.innerWrapper}>
                    <Link to='/friendComments'><h2 className={classes.link}>来看看小伙伴对我的评价吧</h2></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        storyData: state.StoryDataReducer
    };
};
export default connect(mapStateToProps)(withStyles(styles)(Story));