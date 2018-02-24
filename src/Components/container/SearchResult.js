import React, { Component } from "react";
import { connect } from "react-redux";
import SideButton from "../../Pages/sideButton";
import Header from "../presenter/header";
import Slide from "material-ui/transitions/Slide";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import { withStyles } from "material-ui/styles";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PopupSearch from "./PopupSearch";
import { Link } from "react-router-dom";
import * as actions from "../../Actions";
import PageHeader from "../../Pages/PageHeader";

const styles = {
  appBar: {
    position: "relative",
    backgroundColor:"#1976D2"
  }
};
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SearchResult extends Component {
  componentWillMount() {
    // slice(1) to remove the first '?'
    let query = this.props.location.search.slice(1);
    this.props.submitSearchData(query, null, this.handleRequestClose);
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

  renderSearchResult(searchResult) {
    let result = [];
    result.push(
      <PageHeader key="header" history={this.props.history} title="搜索结果" />
    );
    if (!searchResult[0]) {
      result.push(<div key="no">尚未有搜索结果</div>);
      return result;
    }

    result.push(<div key="counter">共计 {searchResult[0].counter} 个结果</div>);
    if (searchResult[0].category === "activity") {
      searchResult.forEach(item => {
        result.push(
          <Link to={`/activity/${item.id}`} key={item.id}>
            {item.theme}
          </Link>
        );
      });
    }
    if (searchResult[0].category === "wish") {
      searchResult.forEach(item => {
        result.push(
          <Link to={`/wish/${item.id}`} key={item.id}>
            {item.location}
          </Link>
        );
      });
    }

    return result;
  }
  render() {
    const { classes, searchResult } = this.props;
    return (
      <div className="wrapper">
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
        {this.renderSearchResult(searchResult)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log("searchResult", state.SearchDataReducer);
  return { searchResult: state.SearchDataReducer };
};

export default connect(mapStateToProps, actions)(
  withStyles(styles)(SearchResult)
);