import React, { Component } from "react";
import * as actions from '../Actions';
import { connect } from 'react-redux';


class MyAccount extends Component {

    onBtnClick(){
        this.props.logout();
    }

    render() {
        return (
            <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    maxWidth: 800,
                    margin: "auto",
                    marginBottom: 98,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 20
                }}
            >
                <h5 style={{ textAlign: "center" }}>我的事项</h5>
                <div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            border:'1px solid #e0e0e0'
                        }}
                    >
                        <div style={{ display: "flex", padding:'10px' }}>
                            <img src="https://placeholdit.co//i/80x80?&text=portrait" />
                            <span style={{marginLeft:'20px'}}>
                                <p>用户名称</p>
                                <p>登录账号</p>
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItem: "center",
                                justifyContent: "center",
                                paddingRight:'10px'
                            }}
                        >
                            <img src="https://placeholdit.co//i/50x50?&text=QR" />
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="collection" style={{marginBottom:'2'}}>
                        <li className="collection-item">我的朋友圈</li>
                        <li className="collection-item">我的收藏</li>
                        <li className="collection-item">我的活动 | 需求</li>
                        <li className="collection-item">我的账单</li>
                        <li className="collection-item">关于我们</li>
                        <li className="collection-item">用户反馈</li>
                        <li className="collection-item">版本更新</li>
                    </ul>
                </div>
                <button className='red lighten-1 white-text' style={{marginTop:'0'}} onClick={this.onBtnClick.bind(this)}>退出账户</button>
            </div>
        );
    }
}

export default connect(null, actions)(MyAccount);