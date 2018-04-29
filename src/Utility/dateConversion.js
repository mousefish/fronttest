import moment from "moment";
import "moment/locale/zh-cn.js";


export default (version, date) => {
    if(version === "CH"){
        moment.locale("zh-cn");
        return moment(date).format("lll");
    }else if(version === "EN"){
        moment.locale("en");
        return moment(date).format("lll");
    }else{
        return date;
    }

};