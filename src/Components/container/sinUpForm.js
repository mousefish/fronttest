import React, { Component } from "react";
import SinUpComp from "../presenter/sinUpComp";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { userSinupRequest } from "../../Actions/authActions";
import { toast } from "react-toastify";

class SinUpForm extends Component {
  render() {
    const { userSinupRequest } = this.props;
    return (
      <div className="column" style={{flexDirection:'column', alignItem:'center', justifyContent:'center'}}>
        <div className="col-md-4 col-md-offset-4">
          <h2 style={{ textAlign: "center" }}>Register</h2>
          <SinUpComp userSinupRequest={userSinupRequest} />
        </div>
      </div>
    );
  }
}
/*this props used to pass to the presenter, for the action that will be used*/
SinUpForm.propType = {
  userSinUpRequest: PropTypes.func.isRequired
};

export default connect(null, { userSinupRequest })(SinUpForm);