import React, { Component } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css"; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  avatarDimension: {
    height: 128,
    width: 128,

  },

  // may need to redefine the max width later!
  backgroundDimension: {
    height: 225,
    maxHeight: 225,
    flex: 1,
    maxWidth: "100%"
  },

  containerForAvatar: {
    // may need to redefine the max width later!
    position: "relative",
    textAlign: "center",
    height: 128,
    maxWidth: 128,

  },

  containerForBackground: {
    // may need to redefine the max width later!
    position: "relative",
    textAlign: "center",
    height: 225,
    maxWidth: "100%",
    border: "2px solid blue"
  }
});

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
    const { classes } = this.props;
    if (this.props.showCrop) {
      return (
        <div
          className={
            this.props.purpose === "avatar" ? (
              classes.containerForAvatar
            ) : (
              classes.containerForBackground
            )
          }
        >
          <Cropper
            ref="cropper"
            src={this.props.src}
            aspectRatio={this.props.purpose === "avatar" ? 1 / 1 : 400 / 225}
            guides={false}
            className={
              this.props.purpose === "avatar" ? (
                classes.avatarDimension
              ) : (
                classes.backgroundDimension
              )
            }
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
                this.props.onCancel();
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

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(FileCrop)
);