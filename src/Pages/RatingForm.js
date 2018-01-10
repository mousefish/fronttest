import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";
import RatingIndex from "./RatingIndex";
import TextField from "material-ui/TextField";
import * as actions from "../Actions";

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200
    },
    container: {
        display: "flex",
        flexWrap: "wrap"
    }
});
class RatingForm extends Component {
    state = {
        value: {
            numOfStars: 0,
            feedback: "",
            stars: []
        }
    };

    componentWillMount() {
        const starContainer = [];
        for (let i = 0; i < 5; i++) {
            starContainer.push(
                <StarBorder onClick={() => this.updateStars(i)} />
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

    sendRating(event, value, activityId) {
        event.preventDefault();
        const { numOfStars, feedback } = value;
        const data = { numOfStars, feedback, activityId };
        // data: {numOfStars: 3, feedback: "ilove", activityId: 1}
        this.props.sendRating(data);
    }

    render() {
        const { classes } = this.props;
        const { activityId } = this.props;
        const { message } = this.props;
        return (
            <div style={{ marginTop: 30 }}>
                <h3>------------在此发表评论------------</h3>
                <form>
                    <div>{this.state.stars}</div>
                    <div>Stars you give: {this.state.numOfStars}</div>
                    <TextField
                        id="textarea"
                        label="tell us what you think"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                        onChange={event => {
                            this.setState({ feedback: event.target.value });
                        }}
                    />
                    <div>Feedback you gave: {this.state.feedback}</div>
                    <button
                        onClick={event => {
                            this.sendRating(event, this.state, activityId);
                        }}
                    >
                        提交
                    </button>
                    {message}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        message: state.RatingReducer.message
    }
}
export default connect(mapStateToProps, actions)(withStyles(styles)(RatingForm));