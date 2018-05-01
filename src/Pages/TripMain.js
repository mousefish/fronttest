import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import WebFontLoader from "webfontloader";
import ActivityIndex from "../Components/container/ActivityIndex";
import SideButton from "./sideButton";
import Header from "../Components/presenter/header";
import IconButton from "material-ui/IconButton";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import {
  getPageYOffset,
  getDocumentHeight,
  getWindowInnerHeight
} from "../Utility/scrollHandler";
// WebFontLoader.load({
//   google: {
//     families: ["Roboto:300,400,500,700", "Material Icons"]
//   }
// });

const styles = theme => ({
  loadMore: {
    color: "blue"
  },
  hideLoadMore: {
    display: "none"
  },

  bottomLine: {
    textAlign: "center",
    color: "#757575",
    borderBottom: "1px solid #757575"
  }
});

class TripMain extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  state = {
    open: false,
    show: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    const { activityData } = this.props;
    if (activityData && activityData.length === 0) {
      this.props.fetchActivityData(0);
    }
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.scrollTo(0, Math.round(getPageYOffset()));
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prevState and curState", prevState.show, this.state.show);
    if (prevState.show !== this.state.show) {
      const { activityData, message } = this.props;
      if (activityData && activityData.length > 0 && !message) {
        let lastId = activityData[activityData.length - 1].id;
        this.props.fetchActivityData(lastId);
      }
    }
  }

  handleScroll(e) {
    let { classes, message } = this.props;
    let pageYOffset = Math.round(getPageYOffset());
    // console.log(pageYOffset, getDocumentHeight() - getWindowInnerHeight());
    if (pageYOffset === getDocumentHeight() - getWindowInnerHeight()) {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }
  }

  renderContent() {
    let { message, activityData, version, classes } = this.props;
    if (!activityData || activityData.length === 0) {
      return <div>Loading..</div>;
    } else {
      return (
        <div style={{ position: "relative" }}>
          <ActivityIndex activityData={activityData} version={version} />
          {message ? <div className={classes.bottomLine}>{message}</div> : ""}
        </div>
      );
    }
  }

  render() {
    const { classes, match: { params: { version } } } = this.props;
    return (
      <div style={{ position: "relative" }} ref="docForCards">
        <SideButton version={version} />
        <div className="wrapper">
          <Header version={version} />
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

TripMain.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  // console.log("activityData reducer", state.ActivityReducer.message);
  return {
    activityData: state.ActivityReducer.all,
    message: state.ActivityReducer.message
  };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(TripMain));