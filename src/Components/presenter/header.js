import React from "react";
import TLogo from "../../Assets/Images/logo.jpg";

const header = props => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
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
      </div>

      <h6
        style={{
          textAlign: "center",
          color: "#666666",
          paddingTop: 10
        }}
      >
        {props.description}
      </h6>
    </div>
  );
};

export default header;