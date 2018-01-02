import React, { Component } from "react";
import Dropzone from "react-dropzone";

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { input: { onChange } } = this.props;
    const reader = new FileReader();
    reader.onload = () => {
      // console.log('src', reader.result);
      this.setState({ src: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
    onChange(e.target.files[0]);
  }
  render() {
    const { input: { value }, touched, error } = this.props;
    console.log('value', typeof value);

    return (
      <div>
        <Dropzone
          style={{ border: "1px solid #e0e0e0" }}
          name={this.props.name}
          multiple={true}
          onDrop={(imagesToUpload, e) => {
            const reader = new FileReader();
            reader.onload = () => {
              this.setState({ src: reader.result });
              // console.log('src', src)
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

