import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "../presenter/validate";
import { TextField } from "redux-form-material-ui";
import Button from "material-ui/Button";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Actions";
import { withRouter } from "react-router";


const styles = theme => ({
  progress: {
    width: "95%",
    margin: "auto"
  },

  button: {
    margin: theme.spacing.unit,
    width: "95%",
    padding: 20,
    fontSize: 16
  },

  wrapper: {
    width: "90%",
    margin: "auto",
    marginBottom: 98,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border:'1px solid green'
  },

  formWrapper: {
    width: "90%",
    margin: "auto",
    textAlign: "center",
    padding: "10px 0",
    position:'relative',
    // border:'1px solid red'
  },

  formInner: {
    width: "95%"
  },

  header: {
    width: "100%",
    height: "20%",
    textAlign: "center",
    padding: 10
  },
  text: {
    fontWeight: "bold"
  },

  hint:{
    position:'absolute',
    right:6,
    bottom: 10,
    fontSize:10,
    color:'grey',
    zIndex:1000
  },

  hintColor:{
    color:'grey'
  }

});

class LoginForm extends Component {
  constructor(props){
    super(props)
  }
  state = {
    completed: 100
  };

  submitForm(values) {
    console.log(values);
    this.props.userLogin(values, this.props.history);
  }

  // Use this function to show the error message from backend
  renderErrorMsg() {
    if (this.props.errorMsg) {
      return <div className="alert alert-danger">{this.props.errorMsg}</div>;
    }
  }

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <form
        className={classes.wrapper}
        onSubmit={handleSubmit(this.submitForm.bind(this))}
      >
        <div className={classes.header}>
          <Link to="/loginSignUp">
            <KeyboardArrowLeft style={{ float: "left", color: "grey" }} />
          </Link>
          <h4 className={classes.text}>登陆账户</h4>
        </div>
        <div className={classes.formWrapper}>
          <LinearProgress
            className={classes.progress}
            mode="determinate"
            value={this.state.completed}
          />
        </div>
        <div className={classes.formWrapper}>
          <span className={classes.hint}><Link to='/' className={classes.hintColor}>忘记邮箱？</Link></span>
          <Field
            name="email"
            component={TextField}
            className={classes.formInner}
            label="输入邮箱地址"
          />
        </div>
        <div className={classes.formWrapper} style={{ marginBottom: 20 }}>
          <Field
            name="password"
            type='password'
            component={TextField}
            className={classes.formInner}
            label="输入密码 - 六位数"
          />
          <span className={classes.hint}><Link to='/' className={classes.hintColor}>忘记密码？</Link></span>
        </div>

        <div className={classes.formWrapper}>
          <Button
            type="submit"
            color="primary"
            raised
            className={classes.button}
          >
            点击登陆
          </Button>
        </div>
        {this.renderErrorMsg}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { errorMsg: state.UserAuth.error };
};

LoginForm = reduxForm({
  form: "loginForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(withStyles(styles)(LoginForm));

export default (LoginForm = connect(mapStateToProps, actions)(withRouter(LoginForm)))