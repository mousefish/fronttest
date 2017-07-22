import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {commonValidation} from '../Utlity/commonValidation'

class SinUp extends Component
{
  constructor(){
    super();
    this.state={
      body: [],
      config: '',
      data:'',
      errors: {}
    }
  }

  isValid()
  {
        const {errors, isValid} = commonValidation(this.state.data);
        if(!isValid)
        {
          this.setState({errors});
        }
        return isValid;
  }


  Submit(e)
  {
    e.preventDefault();
    if(this.isValid())
    {
    this.setState({errors:{}});
    //  axios.get('https://jsonplaceholder.typicode.com/posts',).then(function(response){console.log('response',response.data);
  //    this.setState({body: response.data});
  //  }.bind(this));
  this.props.userSignupRequest('').then(
      () => { /*this.context.router.history.push('/first')*/ },
      ({data})=>this.setState({errors: data})
  );
    this.setState({config:'try'});
  }
  }

  onChange(e)
  {
    this.setState({data: e.target.value});
  }

  render(){

let listItems = [];
if(this.props.data)
{
  console.log('data',this.props.data);
    listItems = this.props.data.map((data,i) =>{
  return <li key={i}>{data.body}</li>
}
);
}
const last = this.state.body.pop();
let check = '';

if(last)
{
check = last['body'];
alert(check);
}

      return (
        <div>
        <h1>Get All Information</h1>
        <form onSubmit={this.Submit.bind(this)}>
        <div className ="form-group">
        <span className="control-label">Username</span>
        <input onChange={this.onChange.bind(this)} name='user_id' className="form-control" />
        {this.state.errors.data && <span className = "help-block">{this.state.errors.data}</span>}
        </div>

        <div className="form-group">
        <button className="btn btn-primary btn-lg">Get</button>
        </div>
        </form>
        <ul>
        <li>test</li>
        <li>{this.state.config}</li>
        <li>{check}</li>
        {listItems}
        </ul>
        </div>

      );

  }

}


SinUp.propTypes =
{
 userSignupRequest: PropTypes.func.isRequired,
 data: PropTypes.array.isRequired
}

SinUp.contextTypes = {
  router: PropTypes.object.isRequired
}


export default SinUp
