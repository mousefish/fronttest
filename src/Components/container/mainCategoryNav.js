import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class CategoryNav extends Component
{
  render()
  {
    return(
  <div className="buttons-tab">
   <button className="tab-link active button">找向导</button>
   <Link to="/" className="tab-link button">找旅伴</Link>
   <Link to="/" className="tab-link button">找美食</Link>
   <Link to="/" className="tab-link button">探险吧</Link>
 </div>
    )

  }

}

export default CategoryNav;
