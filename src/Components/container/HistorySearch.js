import React, { Component } from "react";
import * as actions from "../../Actions";
import { connect } from "react-redux";

class HistorySearch extends Component {

    clearHistory() {
        this.props.emptyHistorySearchData();
    }
    renderItems() {
        console.log('historyitem', this.props.historyData)
            return this.props.historyData.map(item => {

                return (
                    <li
                        key={item}
                        style={{
                            display: "inline-block",
                            width: "50%",
                            marginBottom: "20px",
                        }}
                    >
                        <i
                            className="material-icons tiny"
                            style={{ marginRight: "2px" }}
                        >
                            access_time
                        </i>
                        {item}
                    </li>
                );
            });

    }

    render() {
        return (
            <div style={{display:'flex', flexDirection:'column', alignItem:'center'}}>
                <p
                    style={{
                        marginBottom: "40px",
                        textDecoration: "underline",
                    }}
                >
                    热门搜索
                </p>
                <ul style={{ marginBottom: "20px" }}>{this.renderItems()}</ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        historyData: state.historyData
    };
};
export default connect(mapStateToProps, actions)(HistorySearch);