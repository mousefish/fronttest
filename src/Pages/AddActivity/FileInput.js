import React, { Component } from "react";
import Dropzone from "react-dropzone";

class FileInput extends Component {

  state = { src: "" };

  render() {
    const { input: { value }, touched, error } = this.props;
    return (
      <div>
        <Dropzone
          style={{ border: "1px solid #e0e0e0" }}
          name={this.props.name}
          multiple={true}
          onDrop={(imagesToUpload) => {
            const reader = new FileReader();
            reader.onload = () => {
              this.setState({ src: reader.result });
            };
            reader.readAsDataURL(imagesToUpload[0]);
            this.props.input.onChange(imagesToUpload);
          }}
        >
          <img
            style={{ height: "100px", width:100 }}
            src={this.state.src}
          />
        </Dropzone>
        {touched && error}
      </div>
    );
  }
}

export default FileInput;

// using redux form

// import Dropzone from "react-dropzone";

// const adaptFileEventToValue = delegate => e => delegate([...e.target.files]);

// export default ({
//   input: { value: omitValue, onChange, onBlur, ...inputProps },
//   meta: omitMeta,
//   ...props
// }) => (
//   <input
//     onChange={adaptFileEventToValue(onChange)}
//     onBlur={adaptFileEventToValue(onBlur)}
//     type="file"
//     {...inputProps}
//     {...props}
//   />
// );

