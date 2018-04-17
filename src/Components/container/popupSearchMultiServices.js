import React from "react";
import Multiselect from "react-widgets/lib/Multiselect";
import { withStyles } from "material-ui/styles";

const styles = theme => ({});
const popupSearchMultiServices = ({
    classes,
    input,
    data,
    valueField,
    textField,
    placeholder,
    meta: { error, touched }
}) => {
    return (
        <div>
            <Multiselect
                style={{
                    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
                    marginBottom: 5
                }}
                {...input}
                onBlur={() => input.onBlur()}
                value={input.value || []}
                data={data}
                valueField={valueField}
                textField={textField}
                placeholder={placeholder}
            />
            <div className="input-error">{touched && error}</div>
        </div>
    );
};

export default withStyles(styles)(popupSearchMultiServices);