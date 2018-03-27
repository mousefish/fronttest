import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import AddAPhoto from "material-ui-icons/AddAPhoto";
import Save from "material-ui-icons/Save";
import Cancel from "material-ui-icons/Cancel";
import IconButton from "material-ui/IconButton";
import { withStyles } from "material-ui/styles";
import FileCrop from "./FileCrop";

const styles = theme => ({});
class FileInput extends Component {
  state = { src: "" };

  renderIcon() {
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

  onCancel(){
    this.setState({
      src:""
    })
  }
  render() {
    const { input: { value }, touched, error, classes } = this.props;
    return (
      <div>
        <Dropzone
          style={this.props.style}
          name={this.props.name}
          multiple={true}
          onDrop={imagesToUpload => {
            const reader = new FileReader();
            reader.onload = () => {
              this.setState({
                src: reader.result,
              });
            };
            reader.readAsDataURL(imagesToUpload[0]);
            this.props.input.onChange(imagesToUpload);
            this.props.onGetImgUrl(imagesToUpload[0]);
          }}
        >
          {this.state.src ? (
            <FileCrop
              src={this.state.src}
              onCropImageObject={this.props.onCropImageObject}
              showCrop={this.props.showCrop}
              onCancel={()=>{this.onCancel()}}
            />
          ) : (
            ""
          )}
          {this.renderIcon()}
        </Dropzone>

        {touched && error}
      </div>
    );
  }
}

export default withStyles(styles)(FileInput);