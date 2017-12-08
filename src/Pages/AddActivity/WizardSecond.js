import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from './validate';
import TextField from './TextField';

const styles = theme => ({
    wrapper: {
        width: "90%",
        margin: "auto",
        marginBottom: 50,
        marginTop: 20
    },

    header: {
        width: "100%",
        height: "20%",
        textAlign: "center",
        padding: 10,
        fontWeight: "bold"
    },

    sectionWrapper: {
        textAlign: "center",
        marginBottom: 35
    },

    button: {
        margin: theme.spacing.unit,
        marginTop: 30,
        width: "95%",
        padding: 15,
        fontSize: 16
    }
});

class WizardSecond extends Component {
    render() {
        const { handleSubmit, previousPage } = this.props;
        const { classes } = this.props;

        return (
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <KeyboardArrowLeft
                        style={{ float: "left", color: "grey" }}
                        onClick={previousPage}
                    />

                    <h4 style={{fontWeight: "bold"}}>我在这个地方的故事</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <Field
                        key="story"
                        name="story"
                        component={TextField}
                        placeholder=""
                        style={{ height: "10rem" }}
                    />

                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                    >
                        下一步
                    </Button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(WizardSecond));