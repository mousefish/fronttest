import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import { TextField } from "redux-form-material-ui";
import PageHeader from "../PageHeader";
import Bigbutton from "../Bigbutton";

const styles = theme => ({

    textField: {
        padding: "8px 0"
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
                        <h4 className="category-title">我在这里的旅行故事</h4>
                        <Field
                            fullWidth
                            key="story"
                            name="story"
                            component={TextField}
                            id="multiline-flexible"
                            multiline
                            rowsMax="4"
                            placeholder="我在这里生活了10年......"
                            label="我在这里的旅行故事"
                            className={classes.textField}
                        />
                    </div>
                    <div className="centralize-button">
                        <Bigbutton text="下一步" type="submit" />
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log("reducer", state.form.wizard.values);
    return {
        values: state.form.wizard.values
    };
};
export default reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(connect(mapStateToProps)(WizardSecond)));