import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "material-ui/Button";
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
    flexFlow: "column",
    textAlign: "center"
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
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class SearchResult extends Component {
  componentWillMount() {
    // slice(1) to remove the first '?'
    if (this.props.location) {
      let query = this.props.location.search.slice(1);
      this.props.submitSearchData(query, null, this.handleRequestClose);
    }
  }

  renderSearchResult(searchResult) {
    const { classes } = this.props;
    let result = [];
    if (
      searchResult &&
      searchResult[0] &&
      typeof searchResult[0] === "string"
    ) {
      result.push(<h4 key="no">{searchResult[0]}</h4>);
      result.push(
        <Link to="/addWish" className="unlink" key="wish">
          <Button color="primary" raised className={classes.button} id="btn">
            发布新愿望
          </Button>
        </Link>
      );

      return result;
    }
    if (searchResult && searchResult[0]) {
      result.push(
        <h4 key="counter">
          找到 {searchResult[0].counter} 个{searchResult[0].category}
        </h4>
      );
      if (searchResult[0].category === "活动") {
        searchResult.forEach(item => {
          result.push(
            <Link to={`/activity/${item.id}`} key={item.id} className="unlink">
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
        searchResult.forEach(item => {
          result.push(
            <Link to={`/wish/${item.id}`} key={item.id} className="unlink">
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
        <PageHeader key={0} title="搜索结果" history={this.props.history} />

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