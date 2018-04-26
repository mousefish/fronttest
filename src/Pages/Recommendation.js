import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import PageHeader from "./PageHeader";
import Header from "../Components/presenter/header";
import SideButton from "./sideButton";

import GridList, { GridListTile, GridListTileBar } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import StarBorderIcon from "material-ui-icons/StarBorder";

import beijing from "../Assets/imgForTest/beijing2.jpg";
import zhuhai from "../Assets/imgForTest/beijing1.jpg";
import dalian from "../Assets/imgForTest/dalian2.jpg";
import dunhuang from "../Assets/Images/trip.jpg";
import Avatar from "material-ui/Avatar";
import classNames from "classnames";
import WhatsHot from "material-ui-icons/Whatshot";
import p1 from "../Assets/imgForTest/1.jpg";
import p2 from "../Assets/imgForTest/2.jpg";
import p3 from "../Assets/imgForTest/3.jpg";
import p4 from "../Assets/imgForTest/4.jpg";

const tileData = [
    {
        title: "北京",
        img: beijing
    },
    {
        title: "珠海",
        img: zhuhai
    },
    {
        title: "大连",
        img: dalian
    },
    {
        title: "敦煌",
        img: dunhuang
    }
];
const styles = theme => ({
    icon: {
        width: 20,
        height: 20,
        verticalAlign: "-2px",
        color:"#F44336"
    },
    row: {
        display: "flex",
        justifyContent: "flex-start"
    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 60,
        height: 60
    },
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)"
    },
    title: {
        color: theme.palette.primary.light,
        fontWeight: "bold",
        fontSize: "1.2rem"
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },

    cities: {
        // border: "1px solid red",
        margin: "20px 0"
    },

    peopleContainer: {
        // border: "1px solid green",
        padding: 0,
        listStyle: "none"
    },

    description: {
        textAlign: "center",
        color: "#757575"
    }
});
class Recommendation extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div style={{ position: "relative" }}>
                <div className="wrapper">
                    <Header/>
                    <div className={classes.cities}>
                        <h4 style={{ fontWeight: "bold" }}>
                            热门活动城市<WhatsHot className={classes.icon} />
                        </h4>
                        <div className={classes.root}>
                            <GridList className={classes.gridList} cols={2.5}>
                                {tileData.map(tile => (
                                    <GridListTile key={tile.img}>
                                        <img src={tile.img} alt={tile.title} />
                                        <GridListTileBar
                                            title={tile.title}
                                            // titlePosition="top"
                                            classes={{
                                                root: classes.titleBar,
                                                title: classes.title
                                            }}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: "bold" }}>
                            热门本地向导<WhatsHot className={classes.icon} />
                        </h4>
                        <ul className={classes.peopleContainer}>
                            <li>
                                <div className={classes.row}>
                                    <div>
                                        <Avatar
                                            alt="local tour guide"
                                            src={p1}
                                            className={classNames(
                                                classes.avatar,
                                                classes.bigAvatar
                                            )}
                                        />
                                        <div className={classes.description}>
                                            王贝勒
                                        </div>
                                        <div className={classes.description}>
                                            敦煌
                                        </div>
                                    </div>
                                    <div>
                                        <Avatar
                                            alt="local tour guide"
                                            src={p2}
                                            className={classNames(
                                                classes.avatar,
                                                classes.bigAvatar
                                            )}
                                        />
                                        <div className={classes.description}>
                                            曹格格
                                        </div>
                                        <div className={classes.description}>
                                            珠海
                                        </div>
                                    </div>
                                    <div>
                                        <Avatar
                                            alt="local tour guide"
                                            src={p3}
                                            className={classNames(
                                                classes.avatar,
                                                classes.bigAvatar
                                            )}
                                        />
                                        <div className={classes.description}>
                                            柯基的守护者
                                        </div>
                                        <div className={classes.description}>
                                            大连
                                        </div>
                                    </div>
                                    <div>
                                        <Avatar
                                            alt="local tour guide"
                                            src={p4}
                                            className={classNames(
                                                classes.avatar,
                                                classes.bigAvatar
                                            )}
                                        />
                                        <div className={classes.description}>
                                            哥斯拉
                                        </div>
                                        <div className={classes.description}>
                                            青岛
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Recommendation);