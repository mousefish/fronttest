import React from "react";
import Multiselect from "react-widgets/lib/Multiselect";
import "react-widgets/dist/css/react-widgets.css";

export default ({ input, data, valueField, textField }) => {
    return (
        <Multiselect
            {...input}
            onBlur={() => input.onBlur()}
            value={input.value || []} // requires value to be an array
            data={data}
            valueField={valueField}
            textField={textField}
            style={{border:'1px solid #3f51b5'}}
        />
    );
};