import React, {Component} from 'react'
import classnames from 'classnames'
import  {loginValidation} from '../../Utlity/commonValidation'

class LoginComp extends  Component{
    constructor(){
      super();
      this.state={
        username: '',
        password: '',
        errors:{},
        isLoading: false
      }
    }

isValid(){
  const {errors, isValid} = loginValidation(this.state)
  if(!isValid)
  {
          this.setState({errors})
  }
  return isValid;
  }


onChange(e)
{
  this.setState({
    [e.target.name]: e.target.value
  })
}

onSubmit(e)
{
  e.preventDefault();
  this.setState({errors:''});
  if(this.isValid())
  {
     this.setState({isLoading:true});
      this.props.userLogin(this.state).then(
        (res)=>{},
        (err)=>{ this.setState({errors:err.response.data.errors, isLoading: false})}
      );
  }

}


  render(){
    const {errors, username, password, isLoading} = this.state;
    return(
          <div>
          <form onSubmit={this.onSubmit.bind(this)}>
          {errors.form&&<div className="alert alert-danger">{errors.form}</div>}
          <div className={classnames("form-group",{"has-error": this.state.errors.username})}>
            <label className="control-label">Username</label>
              <input type="text" id="username" name="username" onChange={this.onChange.bind(this)} placeholder="" className="form-control" />
          </div>
          {this.state.errors.username && <span className="help-block">{this.state.errors.username}</span>}

          <div className={classnames("form-group",{"has-error": this.state.errors.password})}>
            <label className="control-label">Password</label>
              <input type="password" id="password" name="password" onChange={this.onChange.bind(this)} placeholder="" className="form-control" />
          </div>
          {this.state.errors.password && <span className="help-block">{this.state.errors.password}</span>}
          <div className="form-group">
              <button className="btn btn-success" disable={isLoading}>Login</button>
          </div>
          </form>
          </div>
    );
  }
}


export default LoginComp
