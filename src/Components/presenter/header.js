import React from "react";
import TLogo from "../../Assets/Images/logo.jpg";

const header = props => {
  return (
    <header>
      <div className='title'>
        <div className='logo'><img src={TLogo} /></div>
        <div
          className='name'
        >
          携U行
        </div>
      </div>

      <h4>我们不打造攻略，我们只创造体验</h4>
    </header>
  );
};

export default header;