import React from "react";
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

// .rw-widget-container{background-color:#fff;
// rw-select-bordered{border-right:#ccc 1px solid;border-left:
export default ({ format, input, placeholder, meta: { error, touched } }) => {

  momentLocaliser(moment);

    return (
        <div style={{border:'none'}}>
            <DateTimePicker
                {...input}
                onChange={input.onChange}
                value={!input.value ? null : new Date(input.value)}
                format={"DD MMM YYYY h:mm"}
                time={true}
                placeholder={placeholder}
            />
            <div className="red-text" style={{ marginBottom: "20px" }}>
                {touched && error}
            </div>
        </div>
    );
};