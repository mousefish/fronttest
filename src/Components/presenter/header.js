import React from "react";
import TLogo from "../../Assets/Images/logo.jpg";

const header = (props) => {
  return (
    <div style={{ textAlign: "center", padding: "10px 0" }}>
      <img
        src={TLogo}
        style={{
          width: 80,
          height: 80
        }}
      />
      <span
        style={{
          marginLeft: "6vw",
          color: "#666666",
          fontWeight: "bold",
          fontSize: 40,
          verticalAlign: -14
        }}
      >
        携U行
      </span>
      <h6
        style={{
          color: "#666666",
          paddingTop:10
        }}
      >
        {props.description}
      </h6>
    </div>
  );
};

export default header;