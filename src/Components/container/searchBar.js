import React, {Component} from 'react'


import PropTypes from 'prop-types'

class SearchBar extends Component{

   render(){
     return(
       <div
  cancelLink="Cancel"
  placeholder="Search in items"
  clearButton={true}
/>
     )
   }
}


export default SearchBar
