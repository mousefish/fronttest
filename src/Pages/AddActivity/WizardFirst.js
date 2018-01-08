import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import Button from "material-ui/Button";
import popupSearchTextField from "../../Components/container/popupSearchTextField";
import popupSearchDateField from "../../Components/container/popupSearchDateField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "./validate";

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
        // textAlign: "center",
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

class WizardFirst extends Component {
    goBack() {
        this.props.history.goBack();
    }

    renderFields(classes) {
        return [
            <Field
                key="theme"
                name="theme"
                type="text"
                component={popupSearchTextField}
                placeholder="活动的主题(例：骨灰级成都吃货地图)"
            />,
            <Field
                key="location"
                name="location"
                type="text"
                component={popupSearchTextField}
                placeholder="活动所在的国家和城市"
            />,

            <Field
                key="dapartdate"
                name="departdate"
                type="text"
                component={popupSearchDateField}
                placeholder="出发日期和时间"
            />,

            <Field
                key="finishdate"
                name="finishdate"
                type="text"
                component={popupSearchDateField}
                placeholder="结束日期和时间"
            />,

            <Field
                key="budget"
                name="budget"
                type="text"
                component={popupSearchTextField}
                placeholder="活动费用/人"
            />
        ];
    }

    render() {
        const classes = this.props.classes;
        const { handleSubmit } = this.props;

        return (
            <div className={classes.wrapper}>
                <div
                    className={classes.header}
                    onClick={this.goBack.bind(this)}
                >
                    <KeyboardArrowLeft
                        style={{ float: "left", color: "grey" }}
                    />

                    <h4 style={{ fontWeight: "bold" }}>发布新活动</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={classes.sectionWrapper}>
                        {this.renderFields(classes)}
                    </div>

                    <div className={classes.sectionWrapper}>
                        <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
                            你可以提供的向导服务
                        </h4>
                        <Field
                            key="services"
                            name="services"
                            component={popupSearchMultiServices}
                            data={["徒步旅行", "汽车接送", "购物打折"]}
                        />
                    </div>

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
})(withRouter(withStyles(styles)(WizardFirst)));