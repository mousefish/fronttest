import axios from 'axios';
import { FETCH_WISH_DATA } from "../Actions/types";


const time = new Date();
const localTime = time.toLocaleDateString();
// dummy initial state:

const INITIAL_STATE = {
       '001':
        {
            id:'001',
            date:localTime,
            theme: "成都吃货一日游，麻辣香锅，糖葫芦...",
            location: "中国 成都",
            price: "RMB 200",
            service: ["徒步向导", "购物打折",'胡同巷子'],
            grouping: '2/3'
       },

       '002':{
            id:'002',
            date:localTime,
            theme: "三亚沙滩一日游，海鲜，阳光",
            location: "中国 三亚",
            price: "RMB 400",
            service: ["徒步向导", "购物打折",'海鲜大排档'],
            grouping: '1/3'
       }
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_WISH_DATA:
          // return {[action.payload.data.id]:action.payload.data, ...state};
          return state;
    }
    return state;
}