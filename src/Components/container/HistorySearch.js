import React, { Component } from "react";
import _ from "lodash";
import { withStyles } from "material-ui/styles";
import * as actions from "../../Actions";
import { connect } from "react-redux";
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import CloseIcon from "material-ui-icons/Close";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        padding: theme.spacing.unit / 2
    },
    chip: {
        margin: theme.spacing.unit / 2
    }
});

class HistorySearch extends Component {
    state = {
        chipData: [
            { key: 0, label: "Angular" },
            { key: 1, label: "jQuery" },
            { key: 2, label: "Polymer" },
            { key: 3, label: "React" },
            { key: 4, label: "Vue.js" }
        ]
    };

    componentWillMount() {
        this.props.fetchHistoryData();
    }

    handleClick(data) {
        const chipData = [...this.state.chipData];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({ chipData });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <h4 style={{ textAlign: "center" }}>搜索历史</h4>
                <div className={classes.root}>
                    {this.state.chipData.map(data => {
                        let avatar = null;
                        avatar = (
                            <Avatar>
                                <CloseIcon className={classes.svgIcon} />
                            </Avatar>
                        );
                        return (
                            <Chip
                                key={data.key}
                                avatar={avatar}
                                label={data.label}
                                onClick={() => this.handleClick(data)}
                                className={classes.chip}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        historyData: state.HistoryDataReducer
    };
};
export default connect(mapStateToProps, actions)(
    withStyles(styles)(HistorySearch)
);