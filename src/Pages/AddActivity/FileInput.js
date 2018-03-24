import React, { Component } from "react";
import Dropzone from "react-dropzone";
import AddAPhoto from "material-ui-icons/AddAPhoto";
import Save from "material-ui-icons/Save";
import Cancel from "material-ui-icons/Cancel";
import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  bg: {
    backgroundColor: "#000"
  }
});
class FileInput extends Component {
  state = { src: "", action: false, toggle: false, file: null };

  renderIcon() {
    if (this.state.action === false) {
      return (
        <span
          style={{
            position: "absolute",
            top: "40%",
            left: "calc(50% - 25px)",
            color: "#fff"
          }}
        >
          <IconButton aria-label="upload image">
            <AddAPhoto
              style={{ color: "#E0E0E0", width: 50, height: 50 }}
              aria-label="upload image"
            />
          </IconButton>
        </span>
      );
    }
  }
  renderOperation() {
    const { onUploadNewImage } = this.props;
    if (onUploadNewImage && this.state.action === true) {
      const { file } = this.state;
      return (
        <span
          style={{
            position: "absolute",
            top: "40%",
            left: "calc(40% - 25px)",
            color: "#fff"
          }}
        >
          <IconButton
            aria-label="cancel uploading image"
            style={{ marginRight: 40 }}
            onClick={e => {
              e.stopPropagation();
              this.setState({
                action: false,
                toggle: false,
                src: ""
              });
            }}
          >
            <Cancel
              style={{ color: "#E0E0E0", width: 50, height: 50 }}
              aria-label="cancel uploading image"
            />
          </IconButton>
          <IconButton
            aria-label="upload image"
            onClick={e => {
              e.stopPropagation();
              onUploadNewImage(file);
              this.setState({
                action: false,
                toggle: true
              });
            }}
          >
            <Save
              style={{ color: "#E0E0E0", width: 50, height: 50 }}
              aria-label="upload image"
            />
          </IconButton>
        </span>
      );
    }
  }

  render() {
    const { input: { value }, touched, error, classes } = this.props;
    return (
      <div>
        <Dropzone
          style={this.props.style}
          name={this.props.name}
          multiple={true}
          className={this.state.toggle ? classes.bg : ""}
          onDrop={imagesToUpload => {
            const reader = new FileReader();
            reader.onload = () => {
              this.setState({
                src: reader.result,
                action: true,
                toggle: true,
                file: imagesToUpload[0]
              });
            };
            reader.readAsDataURL(imagesToUpload[0]);
            this.props.input.onChange(imagesToUpload);
          }}
        >
          {this.state.src ? (
            <img
              src={this.state.src}
              style={{
                flex: 1,
                maxWidth: "100%",
                maxHeight: 240
              }}
            />
          ) : (
            ""
          )}

          {this.renderIcon()}
          {this.renderOperation()}
        </Dropzone>
        {touched && error}
      </div>
    );
  }
}

export default withStyles(styles)(FileInput);

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