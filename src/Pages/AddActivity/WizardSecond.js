import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import { TextField } from "redux-form-material-ui";
import PageHeader from "../PageHeader";

const styles = theme => ({
    button: {
         width: "100%",
        backgroundColor: "#1976D2"
    },

    textField: {
        padding: "8px 0",
        // border: "1px solid blue"
    }
});

class WizardSecond extends Component {
    render() {
        const { handleSubmit, previousPage } = this.props;
        const { classes } = this.props;

        return (
            <div className="wrapper">
                <PageHeader onClick={previousPage} title="发布新活动" />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h4 className="category-title">我在这里的故事</h4>
                        <Field
                            fullWidth
                            key="story"
                            name="story"
                            component={TextField}
                            id="multiline-flexible"
                            multiline
                            rowsMax="4"
                            placeholder="我在这里生活了10年......"
                            className={classes.textField}
                        />
                    </div>
                    <div className="centralize-button">
                    <Button
                        type="submit"
                        color="primary"
                        raised
                        className={classes.button}
                        id="btn"
                    >
                        下一步
                    </Button>
                    </div>
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