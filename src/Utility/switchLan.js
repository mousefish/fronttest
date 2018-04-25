import pair from "../Data/CH_EN_PAIR";

export default (version, name)=>{
    return pair[name][version];
}