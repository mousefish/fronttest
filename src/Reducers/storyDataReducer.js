import { FETCH_STORY_DATA } from "../Actions/types";

// Dummy initial state
const INITIAL_STATE = {
    id: "001",
    name: "陈嘉熙",
    myStory:
        "我是一个土生土长的四川成都人。成都的水土养育了我。我大学主修金融。我爱金融，也热爱四川的美食，美景，和大熊猫。成都是一个底蕴深厚，兼容并蓄的城市。它以它独特的魅力迎接着来自世界的游客。我将会带你领略一个不一样的成都。",

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STORY_DATA:
            // return { action.payload };
            return state;
    }

    return state;
};