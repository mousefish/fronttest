const INIT_STATE = [{ location: "成都", time: "2017/11/20" },{ location: "蓬莱", time: "2017/11/21" }];

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case "EMPTY_HISTORY_DATA":
            return [];
    }

    return state;
};