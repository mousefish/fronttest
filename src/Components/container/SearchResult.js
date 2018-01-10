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



const styles = {
    wrapper: {
        width: "90%",
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

class SearchResult extends Component {
    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };
    render() {
        const classes = this.props.classes;
        return (
            <div style={styles.wrapper}>
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
                <ActivityIndex dummyData={this.props.searchResult} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.SearchDataReducer)
    return { searchResult: state.SearchDataReducer };
};

export default connect(mapStateToProps)(withStyles(styles)(SearchResult));
