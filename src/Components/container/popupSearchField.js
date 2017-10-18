import React from "react";

// input, label, meta are props that passed from Field.
// { touched && error } can avoid showing up errors even when users have not typed yet,
// which means the validation will not be excecuted until users are done with typing and leaving the tying area
export default ({ input, placeholder, icon, meta: { error, touched } }) => {
    return (
        <div>
          <div style={{display:'flex'}}>
           <i className="material-icons" style={{lineHeight:'3', fontSize:'20px'}}>{icon}</i>
            <input {...input} style={{ marginBottom: "5px"}} placeholder={placeholder} />
            </div>
            <div className="red-text" style={{ marginBottom: "20px" }}>
                {touched && error}
            </div>
        </div>
    );
};