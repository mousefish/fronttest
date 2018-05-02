import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { TextField } from "redux-form-material-ui";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import validate from "../../Utility/validate";
import PasswordSetVisibility from "../presenter/PasswordSetVisibility";
import * as actions from "../../Actions";
import PageHeader from "../../Pages/PageHeader";
import Bigbutton from "../../Pages/Bigbutton";
import pair from "../../Data/CH_EN_PAIR";

const styles = theme => ({
  legal: {
    margin: "auto",
    marginTop: 45,
    width: "95%",
    lineHeight: 1.5,
    fontSize: 12
    // border: "1px solid blue"
  }
});

class SignupForm extends Component {
  state = {
    completed: 25,
    initialState: ""
  };

  submitForm(values) {
    const { history, match: { params: { version } } } = this.props;
    this.props.userSignupRequest(values, history, version);
  }

  render() {
    const {
      classes,
      history,
      handleSubmit,
      match: { params: { version } }
    } = this.props;

    return (
      <form
        className="wrapper"
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <PageHeader
          history={this.props.history}
          title={pair.createNewAccount[version]}
        />
        <div className="form-group">
          <Field
            fullWidth
            name="email"
            component={TextField}
            label={pair.inputEmailAddress[version]}
            placeholder={pair.inputEmailAddress[version]}
          />

          <Field
            name="password"
            type="password"
            component={PasswordSetVisibility}
            label={pair.inputPassword[version]}
            placeholder={pair.inputPassword[version]}
          />

          <Field
            name="username"
            type="text"
            component={TextField}
            label={pair.inputUsername[version]}
            placeholder={pair.inputUsername[version]}
          />
        </div>
        <div className={classes.legal}>
          注册代表已经同意<Link to="/" className="unlink">
            服务条款
          </Link>，<Link to="/" className="unlink">
            隐私政策
          </Link>，<Link to="/" className="unlink">
            免责声明
          </Link>，<Link to="/" className="unlink">
            保障计划条款
          </Link>，<Link to="/" className="unlink">
            使用政策须知
          </Link>
          (Needs EN translation)later
        </div>

        <Bigbutton type="submit" text={pair.signup[version]} />
        <p
          className="input-error centralize-button"
          style={{ textAlign: "center" }}
        >
          {this.props.errorMessage}
        </p>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.UserAuth.errorSignup
  };
};

SignupForm = reduxForm({
  form: "SignupForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(SignupForm));

export default (SignupForm = connect(mapStateToProps, actions)(
  withRouter(SignupForm)
));