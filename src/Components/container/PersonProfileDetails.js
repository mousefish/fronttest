import React, { Component } from "react";

const styles = {
    wrapper: {
        width: "90%",
        margin: "auto",
        marginBottom: 50,
        marginTop: 80
    },
    lists: {
        listStyle: "none",
        padding: 0,
        lineHeight: 2
    },
    space: {
        padding: 5,
        textAlign: "center",
        fontWeight:"bold"
    },
    item :{
        display:'flex',
        flexDirection:'row nowrap',
        justifyContent:'space-between'
    }
};

class PersonProfileDetails extends Component {
    renderItem() {
        const profile = this.props.profile;
        return (
            <ul style={styles.lists}>
                <h4 style={styles.space}>基本资料</h4>
                <li style={styles.item}>
                    <span>性别</span>
                    <span>{profile.sex}</span>
                </li>
                <li style={styles.item}>
                    <span>老家</span>
                    <span>{profile.hometown}</span>
                </li>
                <li style={styles.item}>
                    <span>当前城市居住年限</span>
                    <span>{profile.yearOfLiving}</span>
                </li>
                <h4 style={styles.space}>职业，教育背景</h4>
                <li style={styles.item}>
                    <span>毕业院校</span>
                    <span>{profile.school}</span>
                </li>
                <li style={styles.item}>
                    <span>专业</span>
                    <span>{profile.major}</span>
                </li>
                <li style={styles.item}>
                    <span>语言能力</span>
                    <span>{profile.language}</span>
                </li>
                <h4 style={styles.space}>性格爱好</h4>
                <li style={styles.item}>
                    <span>兴趣</span>
                    <span>{profile.hobby}</span>
                </li>
                <li style={styles.item}>
                    <span>性格</span>
                    <span>{profile.personality}</span>
                </li>
            </ul>
        );
    }
    render() {
        return <div style={styles.wrapper}>{this.renderItem()}</div>;
    }
}

export default PersonProfileDetails;