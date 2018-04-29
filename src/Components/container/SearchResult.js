import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import classNames from "classnames";
import SideButton from "../../Pages/sideButton";
import Card, { CardContent } from "material-ui/Card";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import Header from "../presenter/header";
import Slide from "material-ui/transitions/Slide";
import { withStyles } from "material-ui/styles";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import EventAvailable from "material-ui-icons/EventAvailable";
import LocalPlay from "material-ui-icons/LocalPlay";
import Person from "material-ui-icons/PersonPin";
import { Link } from "react-router-dom";
import * as actions from "../../Actions";
import PageHeader from "../../Pages/PageHeader";
import LocalOffer from "material-ui-icons/LocalOffer";
import Stars from "../../Pages/Stars";

const styles = theme => ({

  icon: {
    width: 15,
    height: 15,
    verticalAlign: "-2px"
  },

  card: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    boxShadow: "none",
    borderBottom: "1px solid #BDBDBD",
    padding: "10px 10px 10px 0px"
  },

  cover: {
    width: 151,
    height: 151
  },

  listWrapper: {
    marginTop: 10,
    marginBottom: 65
  },

  resultList: {
    display: "flex",
    flexFlow: "column"
  },
  result: {
    width: "95vw",
    maxWidth: 600,
    margin: "auto",

  },

  btnGroup: {
        width: "95%",
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
        // border:"1px solid green"
    },
    button: {
        width: "50%",
        letterSpacing: 2,
        padding: 12,
        fontSize: 18,
        backgroundColor:"#1976D2",
        color: "#fff",
        textAlign:"center"
    },


  createActivity: {
    backgroundColor: "#1976D2",
    borderRight: "none",
    color: "#fff"
  },

  createWish: {
    color: "#fff",
    backgroundColor: "#43A047"
  },

  heading: {
    fontWeight: "bold",
    textAlign: "left",
    maxWidth: "70%",
    margin: 0
  },

  subheading: {
    textAlign: "left",
    // border:"1px solid red",
    margin: 0
  },
  rowWrapper: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between"
  },
  iconWrapper: {
    margin: "0px 15px 0 10px",
    // border:"1px solid red",
    paddingTop: 3
  },
  icon: {
    width: 50,
    height: 50
  },
  right: {
    width: "80%"
  },

  unlink: {
    textDecoration: "none",
    color: "#fff"
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SearchResult extends Component {
  // componentWillMount() {
  //   // slice(1) to remove the first '?'
  //   if (this.props.location) {
  //     let query = this.props.location.search.slice(1);
  //     this.props.submitSearchData(query, null, this.handleRequestClose);
  //   }
  // }

  renderSearchResult(searchResult) {
    const { classes } = this.props;
    let result = [];
    if (
      searchResult &&
      searchResult[0] &&
      typeof searchResult[0] === "string"
    ) {
      result.push(
        <h4 key="no" className={classes.result}>
          {searchResult[0]}
        </h4>
      );
      result.push(
        <div
          className={classNames(classes.btnGroup)}
          key="createGroup"
        >
          <span
            className={classNames(classes.button, classes.createActivity)}
          >
            <Link to="/addActivity" className={classes.unlink}>
              创建新活动
            </Link>
          </span>
          <span className={classNames(classes.button, classes.createWish)}>
            <Link to="/addWish" className={classes.unlink}>
              创建新愿望
            </Link>
          </span>
        </div>
      );
      return result;
    }
    if (searchResult && searchResult[0]) {
      result.push(
        <h4 key="counter" className={classes.result}>
          找到 {searchResult[0].counter} 个{searchResult[0].category}
        </h4>
      );
      if (searchResult[0].category === "活动") {
         const { version } = this.props;
        searchResult.forEach(item => {
          result.push(
            <Link to={`/activity/${item.id}/${version}`} key={item.id} className="unlink">
              <Card className={classes.card}>
                <div className={classes.iconWrapper}>
                  <EventAvailable className={classes.icon} />
                </div>
                <div className={classes.right}>
                  <div className={classes.rowWrapper}>
                    <h4 className={classes.heading}>{item.theme}</h4>
                    <h4 className={classes.subheading} color="textSecondary">
                      <Stars num={item.averageScore} />
                    </h4>
                  </div>

                  <p className={classes.subheading} color="textSecondary">
                    {item.budget} 元 / 人
                  </p>
                  <div className={classes.rowWrapper}>
                    <p className={classes.subheading} color="textSecondary">
                      {item.departdate} 出发
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        });
      } else if (searchResult[0].category === "愿望") {
        const { version } = this.props;
        searchResult.forEach(item => {
          result.push(
            <Link to={`/wish/${item.id}/${version}`} key={item.id} className="unlink">
              <Card className={classes.card}>
                <div className={classes.iconWrapper}>
                  <LocalPlay className={classes.icon} />
                </div>
                <div className={classes.right}>
                  <h4 className={classes.heading}>{item.location}</h4>
                  <p className={classes.subheading} color="textSecondary">
                    预算 {item.budget} 元 / 人
                  </p>
                  <p className={classes.subheading} color="textSecondary">
                    希望 {item.departdate} 出发
                  </p>
                </div>
              </Card>
            </Link>
          );
        });
      } else if (searchResult[0].category === "向导") {
         const { version } = this.props;
        searchResult.forEach(item => {
          result.push(
            <Link to={`/user/${item.id}`} key={item.id} className="unlink">
              <Card className={classes.card}>
                <div className={classes.iconWrapper}>
                  <Person className={classes.icon} />
                </div>
                <div className={classes.right}>
                  <h4 className={classes.heading}>{item.username}</h4>
                  <p className={classes.subheading} color="textSecondary">
                    {item.sex} {item.age} 岁
                  </p>
                  <p className={classes.subheading} color="textSecondary">
                    {item.language}
                  </p>
                </div>
              </Card>
            </Link>
          );
        });
      }
    }

    return result;
  }
  render() {
    const { classes, searchResult } = this.props;
    return (
      <div className={classes.listWrapper}>
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