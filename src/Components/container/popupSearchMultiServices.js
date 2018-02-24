import React from "react";
import Multiselect from "react-widgets/lib/Multiselect";
import { withStyles } from "material-ui/styles";

const styles = theme => ({

});
const popupSearchMultiServices = ({ classes, input, data, valueField, textField, meta: { error, touched } }) => {
    return (
        <div>
            <Multiselect
                style={{borderBottom:'2px solid lightgrey'}}
                {...input}
                onBlur={() => input.onBlur()}
                value={input.value || []}
                data={data}
                valueField={valueField}
                textField={textField}
            />
            <div className="input-error">
                {touched && error}
            </div>
        </div>
    );
};

export default withStyles(styles)(popupSearchMultiServices)