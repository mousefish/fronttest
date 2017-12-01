import React, { Component } from "react";
import _ from "lodash";
import * as actions from "../../Actions";
import { connect } from "react-redux";

class HistorySearch extends Component {

    componentWillMount(){
        this.props.fetchHistoryData();
    }

    clearHistory() {
        this.props.clearHistoryData();
    }

    renderItems() {
        // console.log("historyitem", this.props.historyData);
        return _.map(this.props.historyData, item => {
            return (
                <div
                    key={item.location}
                    style={{
                        display: "flex",
                        flexDirection: "row nowrap",
                        justifyContent: "space-between"
                    }}
                >
                    <div>{item.location}</div>
                    <div>{item.searchTime}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div
                style={{
                    textAlign: "center",
                    position: "relative",
                    paddingBottom: 40
                }}
            >
                <h4 style={{ fontWeight: "bold" }}>搜索历史</h4>
                {this.renderItems()}
                <span
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        textDecoration: "underline",
                        cursor:'pointer'
                    }}
                    onClick={this.clearHistory.bind(this)}
                >
                    {this.props.historyData.length === 0 ? ' ' : '清除历史记录'}
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        historyData: state.HistoryDataReducer
    };
};
export default connect(mapStateToProps, actions)(HistorySearch);