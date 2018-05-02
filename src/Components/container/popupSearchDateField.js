import React, { Component } from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import moment from "moment";
import momentLocalizer from "react-widgets-moment";


class InputDate extends Component {
    state = {
        value: this.props.defaultValue,
    };

    handleChange = (newValue) => {
        this.setState({
            value: newValue,
        });

    };


    render() {
        const { input, placeholder, meta: { error, touched }, version } = this.props;
        if(version === 'CH'){
            import("moment/locale/zh-cn.js")
            moment.locale("zh-cn");
        }
        else if(version === "EN"){
            moment.locale('en')
        }else {
            moment.locale('en')
        }

        momentLocalizer();
       // input. value is formatted time string : 2018/05/26 12:26

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
                        onChange={(newValue) =>{
                            // newValue is a time object:Sat May 26 2018 12:26:51 GMT-0700 (PDT)
                            this.handleChange(newValue)}
                        }
                        value={this.state.value}
                        time={true}
                        placeholder={placeholder}
                        format={"YYYY/MM/DD h:mm"}
                        culture={version === "CH" ? "zh-cn" :"en"}
                    />
                </div>
                <div className="input-error">{touched && error}</div>
            </div>
        );
    }
}

export default InputDate;



