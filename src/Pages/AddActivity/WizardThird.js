import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import * as actions from "../../Actions";
import FileInput from "./FileInput";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import PageHeader from "../PageHeader";
import Bigbutton from "../Bigbutton";
import pair from "../../Data/CH_EN_PAIR";

const styles = theme => ({
    imageWrapper: {
        position: "relative",
        textAlign: "center",
        height: 225
        // border: "2px solid green"
    },

    btnGroup: {
        width: "95%",
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    item: {
        padding: "5px 0"
    }
});

class WizardThird extends Component {
    renderInputs() {
        const { values, classes, version } = this.props;
        return (
            <div>
                <div className={classes.item}>
                    {pair.eventTheme[version]}: {values.theme}
                </div>
                <div className={classes.item}>
                    {pair.eventCity[version]}: {values.location}
                </div>
                <div className={classes.item}>
                    {pair.eventBudget[version]}: {values.budget}
                </div>
                <div className={classes.item}>
                    {pair.minNumOfPeople[version]} — {
                        pair.maxNumOfPeople[version]}: {values.minNumOfPeople} —{" "}
                    {values.maxNumOfPeople}
                </div>
                <div className={classes.item}>
                    {pair.departdate[version]}: {values.departdate}
                </div>
                <div className={classes.item}>
                    {pair.finishdate[version]}: {values.finishdate}
                </div>
                <div className={classes.item}>
                    {pair.providedServices[version]}: {values.services}
                </div>
                <div className={classes.item}>
                    {pair.eventStory[version]}: {values.story}
                </div>
            </div>
        );
    }

    render() {
        const {
            handleSubmit,
            pristine,
            previousPage,
            submitting,
            classes,
            version
        } = this.props;
        return (
            <div className="wrapper">
                <PageHeader
                    onClick={previousPage}
                    title={pair.createNewEvent[version]}
                />

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h4 className="category-title">
                            {pair.confirmTypes[version]}
                        </h4>
                        {this.renderInputs()}
                    </div>
                    <div className={classes.btnGroup}>
                        <div style={{ width: "40%" }}>
                            <Bigbutton
                                text={pair.gobackToRevise[version]}
                                color="#43A047"
                                onClick={previousPage}
                            />
                        </div>
                        <div style={{ width: "40%" }}>
                            <Bigbutton
                                text={pair.submit[version]}
                                type="submit"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.form.wizard.values)
    return {
        values: state.form.wizard.values
    };
};
export default reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,

})(withStyles(styles)(connect(mapStateToProps, actions)(WizardThird)));