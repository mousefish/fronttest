import React, { Component } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css"; // see installation section above for versions of NPM older than 3.0.0
// If you choose not to use import, you need to assign Cropper to default
// var Cropper = require('react-cropper').default
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import { CircularProgress } from "material-ui/Progress";

const styles = theme => ({
  container: {
    position: "relative"
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
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
  },

  sets: {
    position: "absolute",
    bottom: 2,
    right: 8,
    fontSize: 16,
    color: "#fff"
  },
  cancel: {
    right: 60,
    marginRight: 25
  },
  hide: {
    display: "none"
  },

  layer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#000",
    opacity: 0.3,
    zIndex: 1000,
    textAlign: "center"
  }
});

class FileCrop extends Component {
  state = {
    on: true
  };
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

  hideSets() {
    this.setState({
      on: false
    });
  }
  renderLayer() {
    const { classes, purpose } = this.props;
    let top = purpose === "avatar" ? 10 : "20%";
    if (!this.state.on) {
      return (
        <div
          className={classes.layer}
          style={{ paddingTop: top }}
          onClick={e => {
            e.stopPropagation();
          }}
        >
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }
    return null;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        {this.renderLayer()}
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
          <span className={this.state.on ? classes.sets : classes.hide}>
            <span
              className={classes.cancel}
              onClick={e => {
                e.stopPropagation();
                this.props.onCancel();
              }}
            >
              取消
            </span>

            <span
              onClick={async e => {
                this.hideSets();
                await this.getImgURL(e);
                if (!this.props.uploadError) {
                  await this.cropImgObj(e);
                }
                this.props.onCancel();
              }}
            >
              保存
            </span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    uploadError: state.ImageReducer.error,
    keyforUrl: state.ImageReducer.image.key
  };
};

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(FileCrop)
);