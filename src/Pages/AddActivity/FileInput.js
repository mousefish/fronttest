import React, { Component } from "react";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import FileCrop from "./FileCrop";
import AddAPhoto from "material-ui-icons/AddAPhoto";
import IconButton from "material-ui/IconButton";

class FileInput extends Component {
  state = { src: "", showIcon: true };

  renderIcon() {
    if (this.state.showIcon) {
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
              style={{ color: "#fff", width: 50, height: 50 }}
              aria-label="upload image"
            />
          </IconButton>
        </span>
      );
    }else if(this.props.showIcon){
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
      showIcon:true
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
                showIcon: false
              });
            };
            reader.readAsDataURL(imagesToUpload[0]);
            this.props.onGetImgUrl(imagesToUpload[0]);
          }}
        >
          {this.state.src ? (
            <FileCrop
              src={this.state.src}
              purpose={this.props.purpose}
              onCropImageObject={this.props.onCropImageObject}
              showCrop={this.props.showCrop}
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