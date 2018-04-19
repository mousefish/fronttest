import React, { Component } from "react";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
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
        const { classes, input, title, meta: { error, touched } } = this.props;
        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">{title}</InputLabel>
                <Select native {...input}>
                    <option value="" />
                    {this.renderOptions(20)}
                </Select>

                <div className="input-error">{touched && error}</div>
            </FormControl>
        );
    }
}
export default SelectRangeField;