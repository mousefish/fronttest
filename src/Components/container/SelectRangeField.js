import React, { Component } from "react";
import Input, { InputLabel } from "material-ui/Input";

import Select from "material-ui/Select";

class SelectRangeField extends Component {
    state = {
        age: ""
    };
    handleChange = name => event => {
        this.setState({ [name]: Number(event.target.value) });
    };

    renderOptions(num) {
        let result = []
        for (let i = 1; i <= num; i++) {
            result.push(<option key={i} value={i}>{i} 人</option>);
        }

        return result
    }
    render() {
        return (
            <div>
                <Select
                    native
                    value={this.state.age}
                    onChange={this.handleChange("age")}
                    {...this.props.input}
                >
                    {this.renderOptions(20)}
                </Select>
            </div>
        );
    }
}

export default SelectRangeField;