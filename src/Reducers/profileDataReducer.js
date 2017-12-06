import axios from "axios";
import { FETCH_PROFILE_DATA } from "../Actions/types";

// dummy initial state:

const INITIAL_STATE =
  {
    id: "001",
    name: "陈嘉熙",
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