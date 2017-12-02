import { FETCH_MAIN_DATA } from "../Actions/types";

// Dummy initial state
const INITIAL_STATE = [
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

    {
        name: "陈嘉熙",
        title: "情感作家",
        theme: "骨灰级吃货地图",
        location: "中国 成都",
        price: "RMB 200",
        service: ["徒步向导", "购物打折"],
        comments: "13",
        stars: 4
    },

    {
        name: "陈嘉熙",
        title: "情感作家",
        theme: "骨灰级吃货地图",
        location: "中国 成都",
        price: "RMB 200",
        service: ["徒步向导", "购物打折"],
        comments: "13",
        stars: 4
    }
];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MAIN_DATA:
            return state;
    }

    return state;
};