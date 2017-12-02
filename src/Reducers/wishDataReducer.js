import axios from 'axios';
import { FETCH_WISH_DATA } from "../Actions/types";


const time = new Date();
const localTime = time.toLocaleDateString();
// dummy initial state:
const INITIAL_STATE = [
    {
        date:localTime,
        theme: "成都吃货一日游，麻辣香锅，糖葫芦...",
        location: "中国 成都",
        price: "RMB 200",
        service: ["徒步向导", "购物打折"],
        grouping: '2/3'
    },

];

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_WISH_DATA:
          return state;
    }
    return state;
}