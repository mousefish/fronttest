import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from './validate';
import { TextField } from "redux-form-material-ui";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        width: "95%",
        marginTop:20
    }
});

class WizardSecond extends Component {
    render() {
        const { handleSubmit, previousPage } = this.props;
        const { classes } = this.props;

        return (
            <div className="wrapper">
                <div className="wizard-header">
                    <KeyboardArrowLeft
                        className="arrow"
                        onClick={previousPage}
                    />

                    <h4 className="category-title">我在这个地方的故事</h4>
                </div>
                <form onSubmit={handleSubmit} >

                    <Field
                        key="story"
                        name="story"
                        component={TextField}
                        placeholder="我在这里生活了10年......"
                        className='text-field'
                    />

                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                        id='btn'
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