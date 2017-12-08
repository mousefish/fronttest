import React from "react";
import "react-widgets/dist/css/react-widgets.css";
// input, label, meta are props that passed from Field.
// { touched && error } can avoid showing up errors even when users have not typed yet,
// which means the validation will not be excecuted until users are done with typing and leaving the tying area
export default ({ input, placeholder, icon, meta: { error, touched } }) => {
    return (
        <div>
            <div
                style={{ marginBottom: 10, border: "1px solid #3f51b5" }}
                className="rw-widget"
            >
                <div className="rw-widget-picker rw-widget-container">
                    <textarea
                        style={{padding:10}}
                        className="rw-widget-input rw-input"
                        role="combobox"
                        placeholder={placeholder}
                        rows="10"
                        cols="50"
                        {...input}
                    />
                </div>
            </div>
            <div style={{ marginBottom: 10, color: "red" }}>
                {touched && error}
            </div>
        </div>
    );
};