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

      <h4>{props.description}</h4>
    </header>
  );
};

export default header;