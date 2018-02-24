import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import WebFontLoader from "webfontloader";
import ActivityIndex from "../Components/container/ActivityIndex";
import PopupSearch from "../Components/container/PopupSearch";
import SideButton from "./sideButton";
import Header from "../Components/presenter/header";
import Slide from "material-ui/transitions/Slide";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"]
  }
});

const styles = {
  appBar: {
    position: "relative",
    backgroundColor:"#1976D2"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TripMain extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    this.props.fetchActivityData();
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  renderContent(activityData) {
    if (!activityData) {
      return <div>Loading..</div>;
    } else {
      return <ActivityIndex activityData={activityData} />;
    }
  }

  render() {
    const classes = this.props.classes;
    const { activityData } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <SideButton onClick={this.handleClickOpen} URI="/" />
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                onClick={this.handleRequestClose}
                aria-label="Close"
              >
                <KeyboardArrowLeft
                  style={{
                    width: 30,
                    height: 30
                  }}
                />
              </IconButton>
            </Toolbar>
          </AppBar>
          <PopupSearch handleRequestClose={this.handleRequestClose} />
        </Dialog>
        <div className="wrapper">
          <Header description="这是一个有深度的旅游服务平台" />
          <div>{this.renderContent(activityData)}</div>
        </div>
      </div>
    );
  }
}

TripMain.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    activityData: state.ActivityReducer.all
  };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(TripMain));