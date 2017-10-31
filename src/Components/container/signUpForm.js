import React, { Component } from "react";
import SignUpComp from "../presenter/signUpComp";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSignupRequest } from "../../Actions/authActions";
import { toast } from "react-toastify";



class SignUpForm extends Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="column" style={{flexDirection:'column', alignItem:'center', justifyContent:'center'}}>
        <div className="col-md-4 col-md-offset-4">
          <SignUpComp userSignupRequest={userSignupRequest} />
        </div>
      </div>
    );
  }
}
/*this props used to pass to the presenter, for the action that will be used*/
SignUpForm.propType = {
  userSignUpRequest: PropTypes.func.isRequired
};

export default connect(null, { userSignupRequest })(SignUpForm);