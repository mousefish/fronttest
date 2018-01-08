import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../Actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import WebFontLoader from "webfontloader";
import ListCard from "../Components/container/ListCard";
import PopupSearch from "../Components/container/PopupSearch";
import SideButton from "./sideButton";
import Header from "../Components/presenter/header";
import Slide from "material-ui/transitions/Slide";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import Button from "material-ui/Button";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";


WebFontLoader.load({
  google: {
    families: ["Roboto:300,400,500,700", "Material Icons"]
  }
});

const styles = {
  wrapper: {
    width: '95vw',
    maxWidth:600,
    margin: "auto",
    marginBottom: 50,
    marginTop: 20
  },

  appBar: {
    position: "relative"
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

  render() {
    const classes = this.props.classes;
    return (
      <div style={{ position: "relative" }}>
        <SideButton onClick={this.handleClickOpen} URI='/' />
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
                <KeyboardArrowLeft />
              </IconButton>
            </Toolbar>
          </AppBar>
          <PopupSearch handleRequestClose={this.handleRequestClose} />
        </Dialog>
        <div className={classes.wrapper}>
          <Header description="这是一个有深度的旅游服务平台" />
          <ListCard dummyData={this.props.activityData} />
        </div>
      </div>
    );
  }
}

TripMain.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  setTimeout(()=>{console.log("reducer",state.ActivityDataReducer)}, 5000)

  return { activityData: state.ActivityDataReducer };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(TripMain));
