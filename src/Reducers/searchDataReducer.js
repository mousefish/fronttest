import { FETCH_SEARCH_DATA } from "../Actions/types";

// Dummy initial state:
const INITIAL_STATE = [
    {
        name: "曹尚君",
        title: "程序猿",
        theme: "骨灰级成都山水游玩地图",
        location: "中国 成都",
        price: "RMB 100",
        service: ["吃喝玩乐", "吹拉弹唱",'教授编程'],
        comments: "12",
        stars: 1
    },

    {
        name: "陈嘉熙",
        title: "情感作家",
        theme: "骨灰级成都吃货地图",
        location: "中国 成都",
        price: "RMB 200",
        service: ["徒步向导", "购物打折"],
        comments: "13",
        stars: 4
    },


];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_SEARCH_DATA:
            // return action.payload;
            // temp
            return INITIAL_STATE;
    }

    return state;
};