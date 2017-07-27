import React, {Component} from 'react';
import axios from 'axios';
import AuthApi from '../../ManagedApi/AuthApi'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import  {sinUpValidation} from '../../Utlity/commonValidation'
import { toast } from 'react-toastify';

class SinUpComp extends Component
{
  constructor()
  {
    super();
    this.state={
      username: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {}
    }
  }


  isValid(){
      const {errors, isValid} = sinUpValidation(this.state)
      if(!isValid)
      {
        this.setState({errors})
      }
      return isValid;
  }

passwordChange(state)
{
  console.log(state.password.length);
}


  onChange(e)
  {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e)
  {
    const options = {
      autoClose: 1000,
      hideProgressBar: true,
      position: toast.POSITION.TOP_CENTER
  };
    e.preventDefault();
      this.setState({errors: ''});
    if(this.isValid())
    {
    //axios.post(AuthApi.SinUp, this.state);
    this.props.userSinupRequest(this.state).then(
      (response)=>
      {
          console.log(response);
          toast.success("注册成功", options)
          this.context.router.history.push('/');
      }
    ,(error)=>{
        toast.error("注册失败,请稍后再试", options)
      console.log(error.response.data.email);
    })
  }
  }

  render()
  {
    return(
  <div>
  <form onSubmit = {this.onSubmit.bind(this)}>

  <div className={classnames("form-group",{"has-error": this.state.errors.username})}>
    <label className="control-label">Username</label>
      <input type="text" id="username" name="username" onChange={this.onChange.bind(this)} placeholder="" className="form-control" />
  </div>
  {this.state.errors.username && <span className="help-block">{this.state.errors.username}</span>}

  <div className={classnames("form-group",{"has-error": this.state.errors.email})}>
    <label className="control-label">E-mail</label>
      <input type="text" id="email" name="email" onChange={this.onChange.bind(this)} placeholder="" className="form-control" />
  </div>
  {this.state.errors.email && <span className="help-block">{this.state.errors.email}</span>}

  <div className={classnames("form-group",{"has-error": this.state.errors.password})}>
    <label className="control-label">Password</label>
      <input type="password" id="password" name="password" onChange={this.onChange.bind(this)} placeholder="" className="form-control" />

  </div>
  {this.state.errors.password && <span className="help-block">{this.state.errors.password}</span>}



  <div className={classnames("form-group",{"has-error": this.state.errors.password_confirm})}>
    <label className="control-label" >Password (Confirm)</label>
      <input type="password" id="password_confirm" name="password_confirm" onChange={this.onChange.bind(this)} placeholder="" className="form-control" />
  </div>
  {this.state.errors.password_confirm && <span className="help-block">{this.state.errors.password_confirm}</span>}

  <div className="form-group">
      <button className="btn btn-success">Register</button>
  </div>
</form>

 </div>
    )

  }

}

SinUpComp.propType = {
  userSinUpRequest: PropTypes.func.isRequired
}

SinUpComp.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SinUpComp;
