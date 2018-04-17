import React, { Component } from "react";
import Input, { InputLabel } from "material-ui/Input";
import Select from "material-ui/Select";

class SelectRangeField extends Component {
    renderOptions(num) {
        let result = [];
        for (let i = 1; i <= num; i++) {
            result.push(
                <option key={i} value={i}>
                    {i} 人
                </option>
            );
        }

        return result;
    }
    render() {
        const {
            classes,
            input,
            placeholder,
            meta: { error, touched }
        } = this.props;
        return (
            <div style={{ margin: "10px 0 5px 0" }}>
                <Select native {...input}>
                    <option value="" placeholder="最大" />
                    {this.renderOptions(20)}
                </Select>

                <div className="input-error">{touched && error}</div>
            </div>
        );
    }
}

export default SelectRangeField;