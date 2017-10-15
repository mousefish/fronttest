import React, {Component} from 'react';
import LoginComp from '../presenter/loginComp';
import {connect} from 'react-redux';
import * as actions from '../../Actions';
import PropTypes from 'prop-types';


class LoginPage extends Component{


Logout(e)
{
  e.preventDefault();
  this.props.logout();
}

  render(){
    const {isAuthenticated} = this.props.auth;
    const {userLogin} = this.props;
    return(
      <div className="row">
      <div className="col-md-4 col-md-offset-4">
      <LoginComp userLogin = {userLogin}/>
      </div>
      {isAuthenticated && <button onClick={this.Logout.bind(this)} className="btn btn-success">Logout</button>}
      </div>
    )
  }
}

LoginPage.propType = {
  userLogin: PropTypes.func.isRequired
}

function mapStateToProps(state)
{
  return{
    auth: state.UserAuth
  }
}

export default connect(mapStateToProps, actions)(LoginPage);
