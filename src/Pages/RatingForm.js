import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import RatingIndex from "./RatingIndex";
import TextField from "material-ui/TextField";
import * as actions from "../Actions";
import Dialog from "material-ui/Dialog";
import RegisterDialog from "./RegisterDialog";
import Bigbutton from "./Bigbutton";

const styles = theme => ({
    textField: {
        // marginLeft: theme.spacing.unit,
        // marginRight: theme.spacing.unit,
        width: "100%",
        marginBottom: 10
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    },

    button: {
        width: "100%",
        backgroundColor: "#1976D2"
    },
    starColor: {
        color: "#BDBDBD"
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
        const { classes } = this.props;
        const starContainer = [];
        for (let i = 0; i < 5; i++) {
            starContainer.push(
                <StarBorder
                    className={classes.starColor}
                    key={i}
                    onClick={() => this.updateStars(i)}
                />
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
                    <Star key={i} onClick={() => this.updateStars(i)} />
                );
            } else {
                starContainer.push(
                    <StarBorder key={i} onClick={() => this.updateStars(i)} />
                );
            }
        }
        this.setState({
            stars: starContainer,
            numOfStars: index + 1
        });
    }

    sendRating(event, activityId, creatorId) {
        event.preventDefault();
        const { numOfStars, feedback } = this.state;
        if (!localStorage.getItem("jwtToken")) {
            this.setState({
                open: true
            });
        } else if (numOfStars === 0) {
            this.setState({ message: "请提供星评和评论" });
            return;
        } else if (feedback && feedback.length > 300) {
            this.setState({ message: "评论长度不能多于300个字" });
            return;
        }
        const data = { numOfStars, feedback, activityId, creatorId };
        this.setState({ message: "" });
        // data: {numOfStars: 3, feedback: "ilove", activityId: 1}

        this.props.sendRating(data);
    }

    render() {
        const {
            classes,
            fullScreen,
            activityId,
            creatorId,
            message
        } = this.props;

        // console.log("State",this.state.message)
        return (
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <div>
                        <RegisterDialog onClick={this.handleClose} />
                    </div>
                </Dialog>

                <form>
                    <div>{this.state.stars}</div>
                    <TextField
                        id="textarea"
                        label="给个评论吧"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        // margin="normal"
                        onChange={event => {
                            this.setState({ feedback: event.target.value });
                        }}
                    />

                    <Bigbutton
                        text="提交评论"
                        onClick={event => {
                            this.sendRating(event, activityId, creatorId);
                        }}
                        width="100%"
                    />
                    <div className="input-error">
                        {this.state.message || message}
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