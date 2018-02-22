import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from 'react-redux';
import * as actions from '../Actions';
import WebFontLoader from "webfontloader";
import WishIndex from "../Components/container/WishIndex";
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
  appBar: {
    position: "relative"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class WishMain extends Component {
  componentWillMount(){
    this.props.fetchWishData();
  }

  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  renderContent(wishes){
    if(!wishes){
      return <div>loading..</div>
    }

    return <WishIndex wishes={wishes} />
  }
  render() {
    const { classes } = this.props;
    const { wishes } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <SideButton onClick={this.handleClickOpen} />
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
         <div className="wrapper">
          <Header description="这是一个有深度的旅游服务平台" />
           {this.renderContent(wishes)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { wishes: state.WishReducer.all}

}

export default connect(mapStateToProps, actions)(withStyles(styles)(WishMain));