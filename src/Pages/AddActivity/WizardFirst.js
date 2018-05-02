import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import popupSearchDateField from "../../Components/container/popupSearchDateField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import AutocompleteField from "../../Components/container/AutocompleteField";
import SelectRangeField from "../../Components/container/SelectRangeField";
import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "../../Utility/validate";
import services from "../../Data/services";
import PageHeader from "../PageHeader";
import Bigbutton from "../Bigbutton";
import pair from "../../Data/CH_EN_PAIR";


const styles = theme => ({
    root: {
        flexGrow: 1
    },

    formControl: {
        minWidth: 120,
        // border:'1px solid red',
        height: 60
    },

    textField: {
        paddingTop: 8
        // border: "1px solid blue"
    },

    rangeContainer: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8
    },
    container: {
        flexGrow: 1,
        position: "relative"
    },
    inputRoot: {
        flexWrap: "wrap"
    }
});

class WizardFirst extends Component {
    renderFields(classes, version) {
        return [
            <div className="form-group" key="basic">
                <h4 className="category-title">{pair.basicEventInfo[version]}</h4>
                <Field
                    fullWidth
                    key="theme"
                    name="theme"
                    type="text"
                    component={TextField}
                    label={pair.eventTheme[version]}
                />

                <Field
                    fullWidth
                    key="location"
                    name="location"
                    type="text"
                    component={AutocompleteField}
                    label={pair.eventCity[version]}
                    props={this.props}
                    marker="loc"
                />

                <Field
                    fullWidth
                    key="budget"
                    name="budget"
                    type="text"
                    component={TextField}
                    label={pair.eventBudget[version]}
                />
                <div className={classes.rangeContainer}>
                    <Field
                        key="minNumOfPeople"
                        name="minNumOfPeople"
                        type="text"
                        component={SelectRangeField}
                        title={pair.minNumOfPeople[version]}
                        props={this.props}
                    />

                    <Field
                        key="maxNumOfPeople"
                        name="maxNumOfPeople"
                        type="text"
                        title={pair.maxNumOfPeople[version]}
                        component={SelectRangeField}
                        props={this.props}
                    />
                </div>
            </div>,

            <div className="form-group" key="date">
                <h4 className="category-title">{pair.eventDuration[version]}</h4>
                <Field
                    key="dapartdate"
                    name="departdate"
                    type="text"
                    component={popupSearchDateField}
                    placeholder={pair.departdate[version]}
                    version={version}
                />

                <Field
                    key="finishdate"
                    name="finishdate"
                    type="text"
                    component={popupSearchDateField}
                    placeholder={pair.finishdate[version]}
                    version={version}
                />
            </div>
        ];
    }

    render() {
        const { classes, handleSubmit, version } = this.props;

        return (
            <div className="wrapper">
                <PageHeader history={this.props.history} title={pair.createNewEvent[version]} />
                <form onSubmit={handleSubmit}>
                    <div>{this.renderFields(classes, version)}</div>

                    <div className="form-group">
                        <h4 className="category-title">{pair.providedServices[version]}</h4>
                        <Field
                            key="services"
                            name="services"
                            component={popupSearchMultiServices}
                            data={services}
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

export default reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withRouter(withStyles(styles)(WizardFirst)));