import React, { Component } from "react";
import { connect } from "react-redux";
import ActivityIndex from "./ActivityIndex";
import SideButton from "../../Pages/sideButton";
import Header from "../presenter/header";
import Slide from "material-ui/transitions/Slide";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Typography from "material-ui/Typography";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import PopupSearch from "./PopupSearch";
import { Link } from "react-router-dom";
import * as actions from "../../Actions"

const styles = {
    appBar: {
        position: "relative"
    }
};
function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class SearchResult extends Component {

    componentWillMount(){
        // slice(1) to remove the first '?'
       let query = this.props.location.search.slice(1)
       this.props.submitSearchData(query)
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

    renderSearchResult(searchResult){
       if(!searchResult[0]){
        return <div>尚未有搜索结果</div>
       }

       let result = []
       result.push(<div>共计 {searchResult[0].counter} 个结果</div>)
       if( searchResult[0].category === "activity"){
             searchResult.forEach((item)=>{
              result.push(<Link to={`/activity/${item.id}`}>{item.theme}</Link>)
         })
       }
       if( searchResult[0].category === "wish"){
              searchResult.forEach((item)=>{
              result.push(<Link to={`/wish/${item.id}`}>{item.location}</Link>)
         })
       }

       return result
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
                                <KeyboardArrowLeft />
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
    console.log("searchResult", state.SearchDataReducer)
    return { searchResult: state.SearchDataReducer };
};

export default connect(mapStateToProps, actions)(withStyles(styles)(SearchResult));
