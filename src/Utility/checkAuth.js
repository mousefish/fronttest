import React ,{Component}from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

export default function(ComposedComponent)
{
  class CheckAuth extends Component{

    componentWillMount(){
      if(!this.props.isAuthenticated)
      {
        alert("not authenticated");
            this.context.router.history.push('/');
      }
    }
    componentWillUpdate(nextProps){
        if(!nextProps.isAuthenticated)
        {
            alert("not authenticated");
           this.context.router.history.push('/');
        }

    }

    render()
    {
      return(
        <ComposedComponent {...this.props} />
      )
    }

  }

CheckAuth.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state)
{
  return{
    isAuthenticated :  state.UserAuth.isAuthenticated
  }
}

return connect(mapStateToProps, null)(CheckAuth);


}
