import React, {Component} from 'react';
import {Redirect} from 'react-router'
import SinUp from './SinUpForm'
import {connect} from 'react-redux'
import {userSignupRequest} from '../Actions/signupAction'
import PropTypes from 'prop-types'

class Home extends Component
{
  constructor()
  {
    super();
    this.state =
    {
      redirect :  false,
      user: ''
    }
  }
  onClick(e)
  {
   this.setState(
     {
     redirect : true
   }
   )

  }

  onChange(e)
  {
    this.setState(
      {
     [e.target.name]:  e.target.value
   }
    )
  }


  render()
  {
    const {userSignupRequest} = this.props;
    const dataArray = this.props.data;
    return(
      this.state.redirect?
      <Redirect to="/first" />:
      <div>
      <form className="form-inline">
<div className="form-group">
  <span className="sr-only"  >Amount (in dollars)</span>
  <div className="input-group">
    <div className="input-group-addon">$</div>
    <input name = 'user' onChange={this.onChange.bind(this)} type="text" className="form-control" id="exampleInputAmount" placeholder="Amount"/>
    <div className="input-group-addon">.00</div>
  </div>
</div>
<button onClick={this.onClick.bind(this)} className="btn btn-primary">Transfer cash</button>
</form>
<SinUp userSignupRequest = {userSignupRequest} data = {dataArray}/>
</div>
    )

  }

}
Home.propTypes =
{
 userSignupRequest: PropTypes.func.isRequired,
 data: PropTypes.array
 }

function mapStateToProps(state)
{
  return{
    data: state.getTestData.data
  }
}



export default connect(mapStateToProps, {userSignupRequest})(Home);
