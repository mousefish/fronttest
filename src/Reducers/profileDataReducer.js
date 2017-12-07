import axios from "axios";
import { FETCH_PROFILE_DATA } from "../Actions/types";

// dummy initial state:

const INITIAL_STATE =
  {
    id: "001",
    name: "陈嘉熙",
    sex:'女孩',
    hometown:'成都',
    city:'成都',
    yearOfLiving:12,
    major:'金融',
    school:'四川大学',
    language:'普通话,英语,四川话',
    hobby:'吃喝',
    personality:'活泼开朗',
    location: "中国 成都",
    stars: 4,
    comments: 13,
    service: ["徒步向导", "购物打折", "胡同巷子"]
  };


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROFILE_DATA:
      // return action.payload.data
      return state;
  }
  return state;
};