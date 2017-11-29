import React from "react";
import { Link } from "react-router-dom";
import bg from "../Assets/Images/bg.jpg";

const styles = {
    wrapper: {
        width: "90%",
        margin: "auto",
        marginBottom: 98,
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },

    imageWrapper: {
        width: "100%",
        maxWidth: "100%",
        filter:'grayscale(40%)'
    },

    paddingUpper:{
        padding: "50px 20% 0 0"

    },

    paddingLower:{
        padding: "0 0 50px 20%"
    },

    button: {
        width: "60%",
        marginBottom: 20,
        boxShadow:'none'
    }
};

const loginSignUp = props => {
    return (
        <div style={styles.wrapper}>
            <img src={bg} alt="chengdu" style={styles.imageWrapper} />

            <h5 style={styles.paddingUpper}>带你深入体验</h5>
            <h5 style={styles.paddingLower}>当地风土人情</h5>

            <Link
                className="primary btn light-blue accent-4"
                style={styles.button}
                to="/login"
            >
                登陆已有账户
            </Link>

            <Link
                className="primary btn light-blue accent-4"
                style={styles.button}
                to="/signup"
            >
                创建新账户
            </Link>

            <footer style={{paddingLeft:10}}>
                注册代表已经同意<a>服务条款</a>，<a>隐私政策</a>，<a>免责声明</a>，<a>保障计划条款</a>，<a>使用政策须知</a>
            </footer>
        </div>
    );
};

export default loginSignUp;