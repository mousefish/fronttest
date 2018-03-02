import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import * as actions from "../Actions";
import WebFontLoader from "webfontloader";
import WishIndex from "../Components/container/WishIndex";
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

const styles = {

};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class WishMain extends Component {
  componentWillMount() {
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

  renderContent(wishes) {
    if (!wishes) {
      return <div>loading..</div>;
    }

    return <WishIndex wishes={wishes} />;
  }
  render() {
    const { classes } = this.props;
    const { wishes } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <SideButton />
        <div className="wrapper">
          <Header description="这是一个有深度的旅游服务平台" />
          {this.renderContent(wishes)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { wishes: state.WishReducer.all };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(WishMain));