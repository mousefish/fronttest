import React from "react";
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocaliser from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css'

export default ({ format, input, placeholder, value, showTime, meta: { error, touched } }) => {

  momentLocaliser(moment);

    return (
        <div>
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