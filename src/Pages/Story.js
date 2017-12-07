import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import gallery from "../Assets/Images/gallery.jpg";

const styles = theme => ({
    wrapper: {
        width: "90%",
        margin: "auto",
        marginTop: 20,
        marginBottom: 50,
        textAlign: "center",
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
        cursor: "pointer",
        color: "#337ab7"
    }
});

class Story extends Component {
    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.wrapper}>
                <div className={classes.innerWrapper}>
                    <h2>我在这座城市的故事</h2>
                    <p>{this.props.storyData.myStory}</p>
                    <Button color="primary" raised className={classes.button}>
                        查看全部内容
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
                    <h2 className={classes.link}>来看看小伙伴对我的评价吧</h2>
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