import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import SideButton from "../../Pages/sideButton";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Header from "../presenter/header";
import Slide from "material-ui/transitions/Slide";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import { withStyles } from "material-ui/styles";
import Toolbar from "material-ui/Toolbar";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PopupSearch from "./PopupSearch";
import { Link } from "react-router-dom";
import * as actions from "../../Actions";
import PageHeader from "../../Pages/PageHeader";
import LocalOffer from "material-ui-icons/LocalOffer";
import travel from "../../Assets/Images/trip.jpg";

const styles = theme=>({
  appBar: {
    position: "relative",
    backgroundColor: "#1976D2"
  },
  button: {
    margin: theme.spacing.unit,
    width: "95%",
    marginBottom: 15
  },
  icon: {
    width: 15,
    height: 15,
    verticalAlign: "-2px"
  },

  card: {
    display: "flex"
  },

  content: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    width: "80%"
  },

  cover: {
    width: 151,
    height: 151
  },

  resultList: {
    display: "flex",
    flexFlow: "column",
    textAlign: "center"
  },

  heading: {
    fontWeight: "bold",
    textAlign: "left"
  },

  subheading: {
    textAlign: "left"
  }
});

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
  renderServices(services) {
    const icon = this.props.classes.icon;
    return services.map(service => {
      return (
        <span style={{ marginRight: 6 }} key={service}>
          <LocalOffer className={icon} />
          &nbsp;{service}
        </span>
      );
    });
  }

  renderSearchResult(searchResult) {
    const { classes } = this.props;
    let result = [];
    result.push(
      <PageHeader key="header" history={this.props.history} title="搜索结果" />
    );
    if (!searchResult[0]) {
      result.push(<h4 key="no">尚未有搜索结果，发布你的愿望？</h4>);
      result.push(
        <Link to="/addWish" className="unlink">
          <Button color="primary" raised className={classes.button} id="btn">
            发布新愿望
          </Button>
        </Link>
      );
      return result;
    }

    result.push(<h4 key="counter">共计 {searchResult[0].counter} 个结果</h4>);
    if (searchResult[0].category === "activity") {
      searchResult.forEach(item => {
        result.push(
          <Link to={`/activity/${item.id}`} key={item.id} className="unlink">
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <h4 className={classes.heading}>{item.theme}</h4>
                <h6 className={classes.subheading} color="textSecondary">
                  {item.budget} 元/人
                  <div style={{ marginTop: 8 }}>
                    {this.renderServices(item.services)}
                  </div>
                </h6>
              </CardContent>
              <CardMedia
                className={classes.cover}
                image={travel}
                title="travel"
              />
            </Card>
          </Link>
        );
      });
    }
    if (searchResult[0].category === "wish") {
      searchResult.forEach(item => {
        result.push(
          <Link to={`/wish/${item.id}`} key={item.id} className="unlink">
            <Card className={classes.card}>
              <CardContent className={classes.content}>
                <h4 className={classes.heading}>{item.location}</h4>
                <h6 className={classes.subheading} color="textSecondary">
                  {item.budget} 元/人
                  <div style={{ marginTop: 8 }}>
                    {this.renderServices(item.services)}
                  </div>
                </h6>
              </CardContent>
              <CardMedia
                className={classes.cover}
                image={travel}
                title="travel"
              />
            </Card>
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
        <div className={classes.resultList}>
          {this.renderSearchResult(searchResult)}
        </div>
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