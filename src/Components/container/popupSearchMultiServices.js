import React from "react";
import Multiselect from "react-widgets/lib/Multiselect";
import { withStyles } from "material-ui/styles";
import "react-widgets/dist/css/react-widgets.css";
import "../../CSS/updated-react-widgets.css";

const styles = theme => ({});
const popupSearchMultiServices = ({
    classes,
    input,
    data,
    valueField,
    textField,
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
            />
            <div className="input-error">{touched && error}</div>
        </div>
    );
};

export default withStyles(styles)(popupSearchMultiServices);