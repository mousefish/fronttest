import React, {Component} from 'react';
import NotFoundPage from './404.png';
class PageNotFound extends Component
{
  render()
  {
    return(
  <div>
    <img src={NotFoundPage}/>
 </div>
    )

  }

}

export default PageNotFound;
