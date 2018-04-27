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
    width: 128
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
    maxWidth: 128
  },

  containerForBackground: {
    // may need to redefine the max width later!
    position: "relative",
    textAlign: "center",
    height: 225,
    maxWidth: "100%"
  }
});

class FileCrop extends Component {
  async getImgURL(e) {
    e.stopPropagation();
    e.preventDefault();
    const { file } = this.props;
    await this.props.onGetImgUrl(file);
  }
  async cropImgObj(e) {
    const imgData = this.refs.cropper.getData(true);
    const { width, height, x, y } = imgData;
    const { keyforUrl } = this.props;
    await this.props.onCropImageObject(keyforUrl, width, height, x, y);
  }

  render() {
    const { classes } = this.props;

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
            bottom: 2,
            right: 8,
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
            onClick={async e => {
              await this.getImgURL(e);
              await this.cropImgObj(e);
              this.props.onCancel();
            }}
          >
            保存
          </span>
        </span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    keyforUrl: state.ImageReducer.image.key
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(FileCrop)
);