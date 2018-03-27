import React, { Component } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css"; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default
import { connect } from "react-redux";

class FileCrop extends Component {
  cropImgObj(e) {
    e.stopPropagation();
    e.preventDefault();
    const { keyforUrl } = this.props;
    const imgData = this.refs.cropper.getData(true);
    const { width, height, x, y } = imgData;
    this.props.onCropImageObject(keyforUrl, width, height, x, y);
  }

  render() {
    if (this.props.showCrop) {
      return (
        <div
          style={{
            // may need to redefine the max width later!
            position: "relative",
            textAlign: "center",
            height: 225,
            maxWidth: "100%"
            // border:"2px solid blue"
          }}
        >
          <Cropper
            ref="cropper"
            src={this.props.src}
            aspectRatio={400 / 225}
            guides={false}
            style={{
              height: 225,
              maxHeight: 225,
              flex: 1,
              maxWidth: "100%"
            }}
          />
          <span
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              fontSize: 16,
              color: "#fff"
            }}
          >
            <span
              style={{
                right: 60,
                marginRight: 25
              }}
              onClick={e => {
                e.stopPropagation();
                this.props.onCancel()
              }}
            >
              取消
            </span>

            <span
              style={{
                right: 15
              }}
              onClick={e => {
                this.cropImgObj(e);
              }}
            >
              保存
            </span>
          </span>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    keyforUrl: state.ImageReducer.key
  };
};

export default connect(mapStateToProps)(FileCrop);