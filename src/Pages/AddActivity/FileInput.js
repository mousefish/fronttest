import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import FileCrop from "./FileCrop";
import AddAPhoto from "material-ui-icons/AddAPhoto";
import IconButton from "material-ui/IconButton";

class FileInput extends Component {
  state = { src: "", showIcon: true, file:null };

  renderIcon() {
    let left = this.props.purpose === "avatar" ? 40 : "calc(50% - 25px)";
    let top = this.props.purpose === "avatar" ? "30%" : "40%";

    if (this.state.showIcon) {
      return (
        <span
          style={{
            position: "absolute",
            top: top,
            left: left,
            color: "#fff"
          }}
        >
          <IconButton aria-label="upload image">
            <AddAPhoto
              style={{ color: "#fff", width: 50, height: 50 }}
              aria-label="upload image"
            />
          </IconButton>
        </span>
      );
    }
  }

  onCancel() {
    this.setState({
      src: "",
      showIcon: true,
      file:null
    });
  }
  render() {
    return (
      <div>
        <Dropzone
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          name={this.props.name}
          multiple={true}
          onDrop={imagesToUpload => {
            const reader = new FileReader();
            reader.onload = () => {
              this.setState({
                src: reader.result,
                showIcon: false,
                file:imagesToUpload[0]
              });
            };
            reader.readAsDataURL(imagesToUpload[0]);

          }}
        >
          {this.state.src ? (
            <FileCrop
              src={this.state.src}
              purpose={this.props.purpose}
              onCropImageObject={this.props.onCropImageObject}
              onGetImgUrl={this.props.onGetImgUrl}
              file={this.state.file}
              onCancel={() => {
                this.onCancel();
              }}
            />
          ) : (
            ""
          )}
          {this.renderIcon()}
        </Dropzone>
      </div>
    );
  }
}

export default FileInput;