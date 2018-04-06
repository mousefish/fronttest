import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import IconButton from "material-ui/IconButton";
import LocationOn from "material-ui-icons/LocationOn";
import Star from "material-ui-icons/Star";
import EventAvailable from "material-ui-icons/EventAvailable";
import Button from "material-ui/Button";
import Card, {
    CardHeader,
    CardMedia,
    CardContent,
    CardActions
} from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import OpenInNew from "material-ui-icons/OpenInNew";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PageHeader from "../../Pages/PageHeader";
import defaultAvatar from "../../Assets/Images/defaultAvatar.png";
import config from "../../config/config";

const style = theme => ({
    media: {
        height: 224,
        position: "relative"
    },

    icon: {
        width: 15,
        height: 15,
        verticalAlign: "-2px"
    },

    root: {
        margin: theme.spacing.unit,
        backgroundColor: "#43A047",
        color: "#fff"
    },

    editBar: {
        // border:"1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "10px 0 30px 0",
        padding: 5
    },
    editBtn: {
        border: "1px solid #1976D2",
        padding: "7px 15px",
        borderRadius: 40,
        color: "#1976D2"
    },
    note: {
        color: "#F44336"
    },

    detailPanel: {
        // border: "1px solid green",
        padding: 0,
        listStyle: "none",
        color: "#424242"
    },

    detailTitle: {
        margin: 5,
        color: "#1976D2"
    },
    detailContent: {
        margin: 5,
        paddingBottom: 5,
        marginBottom: 10,
        borderBottom: "1px solid #BDBDBD"
    },
    row: {
        display: "flex",
        justifyContent: "center"
    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 80,
        height: 80
    }
});

class WishDetails extends Component {
    renderEditChoice() {
        const { id } = this.props.wish;
        const { classes, wish, isYourWish } = this.props;

        if (isYourWish) {
            return (
                <div className={classes.editBar}>
                    <div style={{ lineHeight: 1.8, marginTop: 1 }}>
                        <div>{wish.mail}</div>
                        <div>{wish.username}</div>
                    </div>
                    <div>
                        <Link className="unlink" to={`/editWish/${id}`}>
                            <div className={classes.editBtn}>修改我的愿望</div>
                        </Link>
                    </div>
                </div>
            );
        }
    }

    renderServices(services) {
        if (services) {
            return services.map(item => {
                return <span key={item}>{item}&nbsp; </span>;
            });
        }
    }

    componentWillMount() {
        const { wishId } = this.props.match.params;
        this.props.fetchOneWish(wishId);
    }
    render() {
        const { classes, wish, match } = this.props;
        if (Object.keys(wish).length === 0) {
            return null;
        } else if (wish && wish.hasOwnProperty("warning")) {
            return (
                <div>
                    <PageHeader history={this.props.history} title="愿望" />
                    <div style={{ textAlign: "center" }}>{wish["warning"]}</div>
                </div>
            );
        }
        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="愿望" />
                {this.renderEditChoice()}
                <div className={classes.row}>
                    <Avatar
                        alt="tour guide"
                        src={
                            wish.userimageurl ? (
                                config.BUCKET_URL + wish.userimageurl
                            ) : (
                                defaultAvatar
                            )
                        }
                        className={classNames(
                            classes.avatar,
                            classes.bigAvatar
                        )}
                    />
                </div>

                <ul className={classes.detailPanel}>
                    <li>
                        <div className={classes.detailTitle}>愿望发起人</div>
                        <div className={classes.detailContent}>
                            {" "}
                            <Link
                                style={{ color: "#424242" }}
                                to={`/user/${wish.userId}`}
                                className="unlink"
                            >
                                {wish.username}&nbsp;
                                <OpenInNew className={classes.icon} />
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className={classes.detailTitle}>愿望地点</div>
                        <div className={classes.detailContent}>
                            {wish.location}
                        </div>
                    </li>

                    <li>
                        <div className={classes.detailTitle}>期待愿望开始和结束日期</div>
                        <div className={classes.detailContent}>
                            {wish.departdate} — {wish.finishdate}
                        </div>
                    </li>

                    <li>
                        <div className={classes.detailTitle}>预算</div>
                        <div className={classes.detailContent}>
                            {wish.budget} 元 / 人
                        </div>
                    </li>

                    <li>
                        <div className={classes.detailTitle}>参加人数上限</div>
                        <div className={classes.detailContent}>
                            {wish.numberOfPeople} 人
                        </div>
                    </li>

                    <li>
                        <div className={classes.detailTitle}>希望提供的服务</div>
                        <div className={classes.detailContent}>
                            {this.renderServices(wish.services)}
                        </div>
                    </li>
                    <li>
                        <div className={classes.detailTitle}>额外要求</div>
                        <div
                            className={classes.detailContent}
                            style={{ color: "#F44336" }}
                        >
                            {wish.note ? wish.note : "目前没有额外要求"}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    // console.log("wish reducer", state.WishReducer.wish.isYourWish);
    return {
        wish: state.WishReducer.wish,
        isYourWish: state.WishReducer.wish.isYourWish
    };
};
export default connect(mapStateToProps, actions)(
    withStyles(style)(WishDetails)
);