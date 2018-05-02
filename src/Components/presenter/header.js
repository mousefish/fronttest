import React from "react";
import TLogo from "../../Assets/Images/logo.jpg";
import pair from "../../Data/CH_EN_PAIR";
const header = props => {
  const { version } = props;
  return (
    <header>
      <div className='title'>
        <div className='logo'><img src={TLogo} /></div>
        <div
          className='name'
        >
          {pair.brandName[version]}
        </div>
      </div>

      <h5>{pair.sloganInside[version]}</h5>
    </header>
  );
};

export default header;