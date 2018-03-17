import React from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import moment from "moment";
import momentLocaliser from "react-widgets-moment";

export default ({ format, input, placeholder, meta: { error, touched } }) => {
    momentLocaliser(moment);

    return (
        <div>
            <div
                style={{
                    margin: "10px 0 5px 0",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
                }}
            >
                <DateTimePicker
                    {...input}
                    onChange={input.onChange}
                    value={!input.value ? null : new Date(input.value)}
                    format={"DD MMM YYYY h:mm"}
                    time={true}
                    placeholder={placeholder}
                />
            </div>
            <div className="input-error">{touched && error}</div>
        </div>
    );
};