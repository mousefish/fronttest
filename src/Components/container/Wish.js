import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import PropTypes from "prop-types";
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

    button: {
        // margin: theme.spacing.unit,
        width: "50%",
        color: "#fff",
        lineHeight: 0.6,
        height: 60,
        borderRadius: 0,
        fontSize: "1.5rem"
    },
    root: {
        margin: theme.spacing.unit,
        backgroundColor: "#43A047",
        color: "#fff"
    },
    btnGroup: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // border:"1px solid green"
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
    note:{
        color:"#F44336"
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
        if (wish && wish.hasOwnProperty("warning")) {
            return(
            <div>
                <PageHeader history={this.props.history} title="愿望" />
                <div style={{ textAlign: "center" }}>{wish["warning"]}</div>
            </div>)
        }
        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title="愿望" />
                {this.renderEditChoice()}
                <Link
                    style={{ color: "#424242" }}
                    to={`/user/${wish.userId}`}
                    className="unlink"
                    >
                     {wish.username}&nbsp;
                    <OpenInNew className={classes.icon} />
                </Link>
                <div>{wish.location}</div>
                <div>{wish.departdate} — {wish.finishdate}</div>

                <div>{wish.budget} 元 / 人</div>
                <div>{this.renderServices(wish.services)}</div>
                 <div className={classes.note}>{wish.note ? wish.note :"目前没有额外要求"}</div>
                <div className={classes.btnGroup}>
                        <Button
                          color="primary"
                            style={{ backgroundColor: "#1976D2" }}
                            raised
                            className={classes.button}
                        >
                            我有兴趣
                        </Button>
                        <Button
                            color="primary"
                            style={{ backgroundColor: "#43A047" }}
                            raised
                            className={classes.button}
                        >
                            我想加入
                        </Button>
                    </div>
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