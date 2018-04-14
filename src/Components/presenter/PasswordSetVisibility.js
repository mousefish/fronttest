import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import Visibility from "material-ui-icons/Visibility";
import VisibilityOff from "material-ui-icons/VisibilityOff";



class InputAdornments extends Component {
    state = {
        showPassword: false
    };
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPasssword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        const {input, placeholder, meta:{touched, error}} = this.props;
        return (
           <div>
            <Input
                style={{width:"100%"}}
                placeholder={placeholder}
                {...this.props.input}
                id="adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment  position="end">
                        <IconButton

                            onClick={this.handleClickShowPasssword}
                            onMouseDown={this.handleMouseDownPassword}
                        >
                            {this.state.showPassword ? (
                                <VisibilityOff />
                            ) : (
                                <Visibility />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
            />
            <div className="input-error">
                {touched && error}
            </div>
          </div>
        );
    }
}
export default InputAdornments;