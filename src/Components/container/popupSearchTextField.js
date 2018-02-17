import React from "react";
import "react-widgets/dist/css/react-widgets.css";
// input, label, meta are props that passed from Field.
// { touched && error } can avoid showing up errors even when users have not typed yet,
// which means the validation will not be excecuted until users are done with typing and leaving the tying area
export default ({ input, placeholder, icon, meta: { error, touched } }) => {
    return (
        <div>
            <div
                style={{ marginBottom: 10 }}
                className="rw-widget"
            >
                <div className="rw-widget-picker rw-widget-container">
                    <textarea
                        className="rw-widget-input rw-input"
                        role="combobox"
                        {...input}
                        placeholder={placeholder}
                    />
                </div>
            </div>
            <div style={{ marginBottom: 10, color: "red" }}>
                {touched && error}
            </div>
        </div>
    );
};