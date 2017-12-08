import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withStyles } from "material-ui/styles";
import Button from "material-ui/Button";
import FileInput from "./FileInput";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import validate from './validate';

const styles = theme => ({
    wrapper: {
        width: "90%",
        margin: "auto",
        marginBottom: 50,
        marginTop: 20
    },

    sectionWrapper: {
        textAlign: "center",
        marginBottom: 35
    },

    header: {
        width: "100%",
        height: "20%",
        textAlign: "center",
        padding: 10,
        fontWeight: "bold"
    },

    imageWrapper:{
        display: "flex",
        flexFlow:'row wrap',
    },

    image:{
        flex: 1
    },

    button: {
        margin: theme.spacing.unit,
        marginTop: 30,
        width: "95%",
        padding: 15,
        fontSize: 16
    }
});

class WizardThird extends Component {
    render() {

        const { handleSubmit, pristine, previousPage, submitting } = this.props;
        const { classes } = this.props;
        return (
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <KeyboardArrowLeft
                        style={{ float: "left", color: "grey" }}
                        onClick={previousPage}
                    />

                    <h4 style={{fontWeight: "bold"}}>上传照片</h4>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={classes.imageWrapper}>
                        <Field
                            component={FileInput}
                            name="img1"
                            className={classes.image}
                        />
                        <Field
                            component={FileInput}
                            name="img2"
                            className={classes.image}
                        />
                        <Field
                            component={FileInput}
                            name="img3"
                            className={classes.image}
                        />
                        <Field
                            component={FileInput}
                            name="img4"
                            className={classes.image}
                        />
                        <Field
                            component={FileInput}
                            name="img5"
                            className={classes.image}
                        />
                        <Field
                            component={FileInput}
                            name="img6"
                            className={classes.image}
                        />
                        <Field
                            component={FileInput}
                            name="img7"
                            className={classes.image}
                        />
                        <Field
                            component={FileInput}
                            name="img8"
                            className={classes.image}
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

export default reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(WizardThird));