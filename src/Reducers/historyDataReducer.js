
const INIT_STATE=['旧金山','美食','广东省天河市','美国','北海道','成都热干面'];

export default (state=INIT_STATE, action)=>{
    switch(action.type){
        case "EMPTY_HISTORY_DATA":
        return [];
    }

    return state;
}