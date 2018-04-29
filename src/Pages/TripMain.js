import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import WebFontLoader from "webfontloader";
import ActivityIndex from "../Components/container/ActivityIndex";
import SideButton from "./sideButton";
import Header from "../Components/presenter/header";
import Slide from "material-ui/transitions/Slide";
import IconButton from "material-ui/IconButton";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";

WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"]
  }
});

const styles = {};

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

  renderContent(activityData, version) {
    if (!activityData) {
      return <div>Loading..</div>;
    } else {
      return <ActivityIndex activityData={activityData} version={version} />;
    }
  }

  render() {
    const {
      activityData,
      classes,
      match: { params: { version } }
    } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <SideButton version={version}/>
        <div className="wrapper">
          <Header version={version} />
          <div>{this.renderContent(activityData, version)}</div>
        </div>
      </div>
    );
  }
}

TripMain.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  // console.log("activityData reducer", state.ActivityReducer.all)
  return {
    activityData: state.ActivityReducer.all
  };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(TripMain));