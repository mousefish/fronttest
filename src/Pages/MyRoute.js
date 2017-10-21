import React, { Component } from "react";
import { connect } from "react-redux";

class MyRoute extends Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: 800,
                    margin: "auto",
                    marginBottom: 98,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 20
                }}
            >
                <div>
                    <i
                        className="material-icons medium left"
                        onClick={() => this.props.history.push("/my")}
                    >
                        keyboard_arrow_left
                    </i>
                    <h5
                        style={{
                            paddingBottom: "10px"
                        }}
                    >
                        行程
                    </h5>
                </div>
                <div style={{ display: "flex" }}>
                    <a
                        style={{
                            flex: "1",
                            border: "1px solid #e0e0e0",
                            textAlign: "center"
                        }}
                        className="btn-flat"
                    >
                        正在参与
                    </a>
                    <a
                        style={{
                            flex: "1",
                            border: "1px solid #e0e0e0",
                            textAlign: "center"
                        }}
                        className="btn-flat"
                    >
                        过往行程
                    </a>
                </div>

                <div style={{display:'flex', justifyContent:'space-between', padding:'5px 5px 0 5px', borderBottom:"1px solid #e0e0e0"}}>
                    <ul style={{lineHeight:'2'}}>
                     <li>主题</li>
                     <li>发起人</li>
                     <li>价格 | 地点 | 过期日期</li>
                    </ul>
                    <i
                        className="material-icons large right"

                    >
                        keyboard_arrow_right
                    </i>

                </div>

                <div style={{textAlign:'center', padding:'2px'}}>
                 加载更多
                 <div><img style={{maxWidth:'100%'}} src="https://placeholdit.co//i/800x400?&text=More"/></div>
                </div>
            </div>
        );
    }
}



export default MyRoute;