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
        alignItems: "center",
        marginRight:-7
    }
};

class BasicInfoItem extends Component {
    renderItem() {
        const { profile, classes } = this.props;
        return (
            <ul className={classes.list}>
                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "mail",
                            value: profile.mail
                        })}
                >
                    <span>邮箱</span>
                    <div className={classes.flexRight}>
                        <span>{profile.mail}</span>&nbsp;&nbsp;
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>

                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "password",
                            value: ""
                        })}
                >
                    <span>密码</span>
                    <div className={classes.flexRight}>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>

                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "username",
                            value: profile.username
                        })}
                >
                    <span>用户名</span>
                    <div className={classes.flexRight}>
                        <span>{profile.username}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>

                <li
                    className={classes.item}
                    onClick={() => {
                        this.props.onClick({
                            key: "sex",
                            value: profile.sex
                        });
                    }}
                >
                    <span>性别</span>
                    <div className={classes.flexRight}>
                        <span>{profile.sex}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>

                <li
                    className={classes.item}
                    onClick={() => {
                        this.props.onClick({
                            key: "age",
                            value: profile.age
                        });
                    }}
                >
                    <span>年龄</span>
                    <div className={classes.flexRight}>
                        <span>{profile.age}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>

                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "hometown",
                            value: profile.hometown
                        })}
                >
                    <span>老家</span>
                    <div className={classes.flexRight}>
                        <span>{profile.hometown}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "yearOfLiving",
                            value: profile.yearOfLiving
                        })}
                >
                    <span>当前城市居住年限</span>
                    <div className={classes.flexRight}>
                        <span>{profile.yearOfLiving}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "school",
                            value: profile.school
                        })}
                >
                    <span>毕业院校</span>
                    <div className={classes.flexRight}>
                        <span>{profile.school}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "major",
                            value: profile.major
                        })}
                >
                    <span>专业</span>
                    <div className={classes.flexRight}>
                        <span>{profile.major}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "language",
                            value: profile.language
                        })}
                >
                    <span>语言能力</span>
                    <div className={classes.flexRight}>
                        <span>{profile.language}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "hobby",
                            value: profile.hobby
                        })}
                >
                    <span>兴趣</span>
                    <div className={classes.flexRight}>
                        <span>{profile.hobby}</span>
                        <KeyboardArrowRight style={{ color: "lightgrey" }} />
                    </div>
                </li>
                <li
                    className={classes.item}
                    onClick={() =>
                        this.props.onClick({
                            key: "personality",
                            value: profile.personality
                        })}
                >
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

export default withStyles(styles)(BasicInfoItem);