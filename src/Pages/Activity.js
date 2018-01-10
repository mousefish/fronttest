import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import * as actions from "../Actions";
import Star from "material-ui-icons/Star";
import StarBorder from "material-ui-icons/StarBorder";

const styles = theme => ({
    wrapper: {
        width: "95vw",
        maxWidth: 600,
        margin: "auto",
        marginBottom: 50,
        marginTop: 20
    },
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

class Activity extends Component {
    state = {
        value: {
            numOfStars: 0,
            feedback: "",
            stars: []
        }
    };
    componentWillMount() {
        const activityId = this.props.match.params.activityId;
        this.props.fetchOneActivity(activityId);

        const starContainer = [];
        for (let i = 0; i < 5; i++) {
            starContainer.push(
                <StarBorder onClick={() => this.updateStars(i)} />
            );
        }

        this.setState({
            stars: starContainer,
        });
    }


    updateStars(index) {
        const starContainer = [];
        for (let i = 0; i < 5; i++) {
            if (i <= index) {
                starContainer.push(<Star onClick={() => this.updateStars(i)} />);
            } else {
                starContainer.push(
                    <StarBorder onClick={() => this.updateStars(i)} />
                );
            }
        }
        this.setState({
            stars: starContainer,
            numOfStars:index + 1
        });


    }

    render() {
        const { classes } = this.props;
        const { activity } = this.props;
        if (!activity) {
            return <div>loading</div>;
        }

        return (
            <div className={classes.wrapper}>
                This is Activity <span>{activity.id} (add style later)</span>
                <ul>
                    <li>{activity.theme}</li>
                    <li>{activity.location}</li>
                    <li>{activity.story}</li>
                    <Link to={`/user/${activity.userId}`}>
                        来看看<li>{activity.username}</li>的档案
                    </Link>
                </ul>
                <div style={{ marginTop: 30 }}>
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
                        />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { activity: state.ActivityDataReducer.activity };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(Activity));