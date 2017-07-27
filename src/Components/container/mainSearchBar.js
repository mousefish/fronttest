import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class MainSearchBar extends Component
{
  render()
  {
    return(
      <div id="bar-header" className="content-padded">
       <div className="searchbar row">
         <div className="search-input col-85">
           <input type="search" id='search' placeholder='旅游,行程,城市,美食搜索...'/>
         </div>
         <Link className="button button-fill button-primary col-15" to="/"><span className="icon icon-search"></span></Link>
       </div>
     </div>
    )

  }

}

export default MainSearchBar;
