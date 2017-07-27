import React, {Component} from 'react';
import {Redirect} from 'react-router'
import PropTypes from 'prop-types'
import axios from 'axios'

class Home extends Component
{
  constructor()
  {
    super();
    this.state =
    {
      redirect :  false,
      user: '',
      users: []
    }
  }
  onClick(e)
  {
  // this.setState(
    // {
     //redirect : true
   //}
   //)
   e.preventDefault();
     axios.get('/users',).then(function(response){console.log('response',response.data);
     this.setState({users: response.data});
   }.bind(this));

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
  const  listusers = this.state.users.map((data,i) =>{
  return <li key={i}>{data.username}</li>
});
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

<ol>
{listusers}
</ol>

</div>
    )

  }

}




export default Home;
