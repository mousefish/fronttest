import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class SubPage extends Component
{
  render()
  {
    return(
      <div>
          <h1>This is first Page </h1>
          <Link to="/"> back </Link>
     </div>
    )

  }

}

export default SubPage;
