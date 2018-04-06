import React, { Component } from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import moment from "moment";
import momentLocalizer from "react-widgets-moment";
import "moment/locale/zh-cn.js";

class InputDate extends Component {
    state = {
        value: null,
    };

    handleChange = (newValue) => {
        this.setState({
            value: newValue,
        });

    };


    render() {
        const { input, placeholder, meta: { error, touched } } = this.props;
        moment.locale("zh-cn");
        momentLocalizer();
        // console.log("input.value", input.value)
        // 1. before go to next input, the input.value is en string,
        // 2. after click on the next input, the input.value becomes ch str
        // we need the value to be en str, otherwise error will come up, so we use state to manage value
        return (
            <div>
                <div
                    style={{
                        margin: "10px 0 5px 0",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
                    }}
                >
                    <DateTimePicker
                        {...input}
                        onChange={(newValue) =>
                            this.handleChange(newValue)}
                        value={this.state.value}
                        time={true}
                        placeholder={placeholder}
                        culture="zh-cn"
                    />
                </div>
                <div className="input-error">{touched && error}</div>
            </div>
        );
    }
}

export default InputDate;