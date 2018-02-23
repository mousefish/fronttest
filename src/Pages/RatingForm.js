import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import RatingIndex from "./RatingIndex";
import TextField from "material-ui/TextField";
import * as actions from "../Actions";
import Button from "material-ui/Button";
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog
} from "material-ui/Dialog";
import { Link } from "react-router-dom";

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "95%"
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },

    button: {
        margin: theme.spacing.unit,
        width: "45%",
        padding: 10,
        fontSize: 14
    },

    right: {
        marginRight: 30
    },
    bottom: {
        marginBottom: 10
    }
});
class RatingForm extends Component {
    state = {
        numOfStars: 0,
        feedback: "",
        stars: [],
        message: "",
        open: false
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentWillMount() {
        const starContainer = [];
        for (let i = 0; i < 5; i++) {
            starContainer.push(
                <StarBorder key={i} onClick={() => this.updateStars(i)} />
            );
        }

        this.setState({
            stars: starContainer
        });
    }

    updateStars(index) {
        const starContainer = [];
        for (let i = 0; i < 5; i++) {
            if (i <= index) {
                starContainer.push(
                    <Star onClick={() => this.updateStars(i)} />
                );
            } else {
                starContainer.push(
                    <StarBorder onClick={() => this.updateStars(i)} />
                );
            }
        }
        this.setState({
            stars: starContainer,
            numOfStars: index + 1
        });
    }

    sendRating(event, activityId) {
        event.preventDefault();
        const { numOfStars, feedback } = this.state;
        if (!localStorage.getItem("jwtToken")) {
            this.setState({
                open: true
            });
        } else if (numOfStars === 0) {
            this.setState({ message: "请提供星评和评论" });
            return;
        }
        const data = { numOfStars, feedback, activityId };
        this.setState({ message: "" });
        // data: {numOfStars: 3, feedback: "ilove", activityId: 1}
        this.props.sendRating(data);
    }

    render() {
        const { classes, fullScreen } = this.props;
        const { activityId } = this.props;
        const { message } = this.props;
        return (
            <div className="flex-inner-wrapper">
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"请登录"}
                    </DialogTitle>
                    <DialogContent>
                        <div className={classes.bottom}>
                            <Link to="/login" className={classes.right}>
                                <Button color="primary" raised>
                                    登陆已有账户
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button color="primary" raised>
                                    创建新账户
                                </Button>
                            </Link>
                        </div>
                        <DialogContentText>
                            注册代表已经同意<Link to="/">服务条款</Link>，<Link to="/">隐私政策</Link>，<Link to="/">免责声明</Link>，<Link to="/">保障计划条款</Link>，<Link to="/">使用政策须知</Link>。
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            稍后再说
                        </Button>
                    </DialogActions>
                </Dialog>
                <h3 className="category-title">在此发表评论</h3>
                <form>
                    <div>{this.state.stars}</div>
                    <TextField
                        id="textarea"
                        label="写下你的评论"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        onChange={event => {
                            this.setState({ feedback: event.target.value });
                        }}
                    />
                    <Button
                        className={classes.button}
                        color="primary"
                        raised
                        onClick={event => {
                            this.sendRating(event, activityId);
                        }}
                    >
                        提交评论
                    </Button>
                    <div className="input-error">
                        { this.state.message || message}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.RatingReducer.message
    };
};
export default connect(mapStateToProps, actions)(
    withStyles(styles)(RatingForm)
);