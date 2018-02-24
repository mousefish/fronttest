import React, { Component } from "react";
import _ from "lodash";
import * as actions from "../../Actions";
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import CloseIcon from "material-ui-icons/Close";

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        justifyContent:"space-between",
        padding: theme.spacing.unit / 2
    },
    chip: {
        margin: theme.spacing.unit / 2
    }
});

const generateChipData = data => {
    if (!data) {
        return [];
    }
    let histList = data.split("|");
    if (histList[histList.length - 1] === "") {
        histList.pop();
    }

    return histList.map((record, index) => {
        return { key: index, label: record };
    });
};

// 珠海市 广东省,activity|大连市 辽宁省,activity|
class HistorySearch extends Component {
    state = {
        chipData: generateChipData(localStorage.hist)
    };

    deleteChip(data) {
       // {key: 0, label: "大连市 辽宁省, 活动"}
        const chipData = [...this.state.chipData];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({ chipData });

        let newHist = localStorage.hist.split("|").filter((record)=>record !== data.label).join("|")

        localStorage.hist = newHist;
        console.log("newhist", localStorage.hist)
    }

    // handleClickChip(data){
    //    // {key: 0, label: "大连市 辽宁省, 活动"}
    //    let record = data.label.split(",")
    //    let location = record[0];
    //    let category = record[1];
    //    console.log("here", location, category)
    //    this.props.submitSearchData({ location, category})
    // }

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
                                <CloseIcon
                                    className={classes.svgIcon}
                                    onClick={() => this.deleteChip(data)}
                                />
                            </Avatar>
                        );
                        return (
                            <Chip
                                key={data.key}
                                avatar={avatar}
                                label={data.label}
                                className={classes.chip}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(withStyles(styles)(HistorySearch));