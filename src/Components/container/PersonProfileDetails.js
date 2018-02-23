import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";

const styles = {
    item: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottom: "1px solid lightgrey",
        backgroundColor: "#fff",
        color: "grey"
    },
    list: {
        listStyle: "none",
        padding: 0
    },
    flexRight: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }
};

class PersonProfileDetails extends Component {
    renderItem() {
        const { profile, classes } = this.props;
        return (
            <ul className={classes.list}>
                <li className={classes.item}>
                    <span>性别</span>
                    <div className={classes.flexRight}>
                        <span>{profile.sex}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li className={classes.item}>
                    <span>老家</span>
                    <div className={classes.flexRight}>
                        <span>{profile.hometown}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li className={classes.item}>
                    <span>当前城市居住年限</span>
                    <div className={classes.flexRight}>
                        <span>{profile.yearOfLiving}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li className={classes.item}>
                    <span>毕业院校</span>
                    <div className={classes.flexRight}>
                        <span>{profile.school}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li className={classes.item}>
                    <span>专业</span>
                    <div className={classes.flexRight}>
                        <span>{profile.major}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li className={classes.item}>
                    <span>语言能力</span>
                    <div className={classes.flexRight}>
                        <span>{profile.language}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li className={classes.item}>
                    <span>兴趣</span>
                    <div className={classes.flexRight}>
                        <span>{profile.hobby}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li className={classes.item}>
                    <span>性格</span>
                    <div className={classes.flexRight}>
                        <span>{profile.personality}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
            </ul>
        );
    }
    render() {
        return <div className="wrapper">{this.renderItem()}</div>;
    }
}

export default withStyles(styles)(PersonProfileDetails);