import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import Button from "material-ui/Button";
import popupSearchTextField from "../../Components/container/popupSearchTextField";
import popupSearchDateField from "../../Components/container/popupSearchDateField";
import popupSearchMultiServices from "../../Components/container/popupSearchMultiServices";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from "./validate";
import * as actions from '../../Actions';


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

class AddDemand extends Component {
    goBack() {
        this.props.history.goBack();
    }
    handleSubmit(value){
        this.props.submitDemandData(value, this.props.history);
    }

    renderFields(classes) {
        return [
            <Field
                key="location"
                name="location"
                type="text"
                component={popupSearchTextField}
                placeholder="你想去的国家和城市"
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
                placeholder="你的需求预算/人"
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

                    <h4 style={{ fontWeight: "bold" }}>发布新需求</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={classes.sectionWrapper}>
                        {this.renderFields(classes)}
                    </div>

                    <div className={classes.sectionWrapper}>
                        <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
                            你需要的向导服务
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
                        提交
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { errorMsg: state.demandDataReducer.error };
};

AddDemand = reduxForm({
  form: "AddDemand",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(AddDemand));

export default (AddDemand = connect(mapStateToProps, actions)(withRouter(AddDemand)))