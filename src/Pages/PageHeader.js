import React from "react";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";

const PageHeader = props => {
  return (
    <div className="wizard-header">
      <KeyboardArrowLeft
        className="arrow"
        style={{
          width: 30,
          height: 30
        }}
        onClick={() =>
          props.history ? props.history.goBack() : props.onClick()}
      />

      <h3 className="page-title">{props.title}</h3>
    </div>
  );
};

export default PageHeader;