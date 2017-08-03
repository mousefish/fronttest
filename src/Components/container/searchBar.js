import React, {Component} from 'react'

import {Searchbar} from 'framework7-react'
import PropTypes from 'prop-types'

class SearchBar extends Component{

   render(){
     return(
       <Searchbar
  cancelLink="Cancel"
  placeholder="Search in items"
  clearButton={true}
/>
     )
   }
}


export default SearchBar
