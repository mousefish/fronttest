import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Avatar from "material-ui/Avatar";
import LocationOn from "material-ui-icons/LocationOn";
import LocalOffer from "material-ui-icons/LocalOffer";
import Star from "material-ui-icons/Star";
import deepOrange from "material-ui/colors/deepOrange";
import sichuan from "../Assets/Images/sichuan.jpg";
import pic from "../Assets/Images/profile.jpg";
import Button from "material-ui/Button";

const styles = theme => ({
    wrapper: {
        width: "90%",
        margin: "auto",
        marginBottom: 50,
        marginTop: 60
    },

    imageWrapper: {
        position: "relative"
    },

    image: {
        width: "100%",
        maxWidth: "100%",
        height: 224,
        marginBottom: 40
    },
    avatar: {
        margin: 10
    },

    bigAvatar: {
        width: 60,
        height: 60,
        position: "absolute",
        left: "50%",
        top: 180,
        marginLeft: "-30px"
    },

    innerWrapper: {
        textAlign: "center"
    },

    serviceWrapper: {
        display: "flex",
        flexDirection: "row nowrap",
        justifyContent: "space-around",
        marginBottom: 20
    },
    space: {
        marginBottom: 10
    },
    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },
    button: {
        margin: theme.spacing.unit,
        marginBottom: 20
    },
    root: {
        margin: theme.spacing.unit,
        width: "95%",
        padding: 15
    }
});

class PersonProfile extends Component {
    renderService(services) {
        const icon = this.props.classes.icon;

        return services.map(service => {
            return (
                <span style={{ marginRight: 6 }}>
                    <LocalOffer className={icon} />
                    &nbsp;{service}
                </span>
            );
        });
    }

    renderStar(nums) {
        const icon = this.props.classes.icon;
        var starWrapper = [];
        for (let i = 0; i < nums; i++) {
            starWrapper.push(<Star className={icon} />);
        }
        return starWrapper;
    }

    render() {
        const classes = this.props.classes;
        const profile = this.props.profileData;
        return (
            <div className={classes.wrapper}>
                <div className={classes.imageWrapper}>
                    <img className={classes.image} src={sichuan} />
                    <Avatar
                        alt="profile pic"
                        src={pic}
                        className={classNames(
                            classes.avatar,
                            classes.bigAvatar
                        )}
                    />
                </div>
                <div className={classes.innerWrapper}>
                    <h4
                        className={classes.space}
                        style={{ fontWeight: "bold" }}
                    >
                        {profile.name}
                    </h4>
                    <div className={classes.space}>
                        <LocationOn className={classes.icon} />
                        {profile.location}
                    </div>
                    <div className={classes.space}>
                        {this.renderStar(profile.stars)}
                        {profile.comments}
                    </div>
                    <div className={classes.serviceWrapper}>
                        {this.renderService(profile.service)}
                    </div>
                    <Button color="primary" raised className={classes.button}>
                        更多我的资料哦
                    </Button>
                    <h2>我在这座城市的故事</h2>
                    <Button color="primary" raised className={classes.root}>
                        一起参与吧
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        profileData: state.ProfileDataReducer
    };
};

export default connect(mapStateToProps)(withStyles(styles)(PersonProfile));