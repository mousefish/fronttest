import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Bottom extends Component
{
  render()
  {
     const b_style={position:'fixed', bottom:0, zIndex:2, left:0,right:0, textAlign:'center', lineHeight:2,height:30};
    return(
      <div style={b_style}>
    <nav className="bar bar-tab" style = {{backgroundColor:'white'}}>
      <Link className="tab-item external active" to="/" style={{position:'relative', bottom: 5}}>
        <span className="icon icon-home"></span>
        <span className="tab-label">首页</span>
      </Link>
      <Link className="tab-item external active" to="/" style={{position:'relative', bottom: 5}}>
        <span className="icon icon-share"></span>
        <span className="tab-label">朋友圈</span>
      </Link>
      <Link className="tab-item external active" to="/" style={{position:'relative', bottom: 5}}>
        <span className="icon icon-star"></span>
        <span className="tab-label">新行程</span>
      </Link>
      <Link className="tab-item external active" to="/" style={{position:'relative', bottom: 5}}>
        <span className="icon icon-message"></span>
        <span className="tab-label">消息</span>
         <span className="badge">2</span>
      </Link>
      <Link className="tab-item external active" to="/" style={{position:'relative', bottom: 5}}>
        <span className="icon icon-me"></span>
        <span className="tab-label">我的</span>
      </Link>

    </nav>
    </div>
    )

  }

}

export default Bottom;
