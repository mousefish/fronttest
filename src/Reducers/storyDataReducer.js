import { FETCH_STORY_DATA } from "../Actions/types";

const date = new Date();
const localTime = date.toLocaleDateString();
// Dummy initial state
const INITIAL_STATE = {
    id: "001",
    name: "陈嘉熙",
    myStory:
        "我是一个土生土长的四川成都人。成都的水土养育了我。我大学主修金融。我爱金融，也热爱四川的美食，美景，和大熊猫。成都是一个底蕴深厚，兼容并蓄的城市。它以它独特的魅力迎接着来自世界的游客。我将会带你领略一个不一样的成都。",

    friendComments: [
        {
            name: "小瓶子",
            stars: 4,
            comment:
                "微博：臻美@臻美去哪，陈嘉熙是个热爱旅游，热爱美食的人。她总能挖掘出一般人注意不到的美食美景，如果你想领略四川真正的美，你需要陈嘉熙做你的向导！",
            date: localTime
        },

        {
            name: "小熊猫",
            stars: 5,
            comment:
                "感谢陈嘉熙带我去看了大熊猫！！",
            date: localTime
        },

        {
            name: "大柯基",
            stars: 5,
            comment:
                "没有一个人比陈嘉熙更了解四川美食！！我爱四川小巷！！",
            date: localTime
        },

    ]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STORY_DATA:
            // return { action.payload };
            return state;
    }

    return state;
};