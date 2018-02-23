import React from "react";
import { Link } from "react-router-dom";
import bg from "../Assets/Images/bg.jpg";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: "95%"
    },

    paddingUpper: {
        padding: "40px 0px 0px 40px"
    },

    paddingLower: {
        padding: "10px 0px 0px 160px"
    }
});

const loginSignUp = props => {
    const { classes } = props;
    return (
        <div className="wrapper">
            <img src={bg} alt="chengdu" className="image-wrapper" />
            <div className="flex-inner-wrapper">
                <h2 className={classes.paddingUpper}>带你深入体验</h2>
                <h2 className={classes.paddingLower}>当地风土人情</h2>
            </div>

            <div className="flex-inner-wrapper">
                <Link to="/login" className="unlink">
                    <Button
                        color="primary"
                        raised
                        className={classes.button}
                        id="btn"
                    >
                        登陆已有账户
                    </Button>
                </Link>
                <Link to="/signup" className="unlink">
                    <Button
                        color="primary"
                        raised
                        className={classes.button}
                        id="btn"
                    >
                        创建新账户
                    </Button>
                </Link>
            </div>
            <footer className="legal-footer">
                注册代表已经同意<Link to="/">服务条款</Link>，<Link to="/">隐私政策</Link>，<Link to="/">免责声明</Link>，<Link to="/">保障计划条款</Link>，<Link to="/">使用政策须知</Link>
            </footer>
        </div>
    );
};

export default withStyles(styles)(loginSignUp);