import React, { Component } from "react";
import Avatar from "material-ui/Avatar";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import config from "../../config/config";
import test0 from "../../Assets/imgForTest/1.jpg";

const styles = {
    item: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottom: "1px solid #BDBDBD",
        backgroundColor: "#fff",
        color: "#757575"
    },
    list: {
        listStyle: "none",
        padding: 0,
        marginTop: 5
    },
    flexRight: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: -7
    },

    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 80,
        height: 80
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
                            key: "imageurl",
                            value: profile.imageurl
                        })}
                >
                    <span>头像</span>
                    <div className={classes.flexRight}>
                        <span>
                            {profile.imageurl ? (
                                <Avatar
                                    alt="tour guide"
                                    src={
                                        config.BUCKET_URL +
                                        profile.imageurl
                                    }
                                    className={classNames(
                                        classes.avatar,
                                        classes.bigAvatar
                                    )}
                                />
                            ) : (
                                <Avatar
                                    alt="tour guide"
                                    src={test0}
                                    className={classNames(
                                        classes.avatar,
                                        classes.bigAvatar
                                    )}
                                />
                            )}
                        </span>&nbsp;&nbsp;
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
                    </div>
                </li>
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                    <span>掌握的语言种类</span>
                    <div className={classes.flexRight}>
                        <span>{profile.language}</span>
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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
                        <KeyboardArrowRight style={{ color: "#BDBDBD" }} />
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