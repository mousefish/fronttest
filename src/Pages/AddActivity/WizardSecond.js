import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import { TextField } from "redux-form-material-ui";
import PageHeader from "../PageHeader";
import Bigbutton from "../Bigbutton";
import pair from "../../Data/CH_EN_PAIR";

const styles = theme => ({

    textField: {
        padding: "8px 0"
        // border: "1px solid blue"
    }
});

class WizardSecond extends Component {
    render() {
        const { handleSubmit, previousPage, classes, version } = this.props;
        return (
            <div className="wrapper">
                <PageHeader onClick={previousPage} title={pair.createNewEvent[version]}/>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h4 className="category-title">{pair.eventStory[version]}</h4>
                        <Field
                            fullWidth
                            key="story"
                            name="story"
                            component={TextField}
                            id="multiline-flexible"
                            multiline
                            rowsMax="4"
                            placeholder={pair.eventStoryExample[version]}
                            label={pair.eventStory[version]}
                            className={classes.textField}
                        />
                    </div>
                    <div className="centralize-button">
                        <Bigbutton text={pair.nextStep[version]} type="submit" />
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