import moment from "moment";

export default (version, date) => {
    if(version === "CH"){
        moment.locale("zh-cn");
        return moment(date).format("lll");
    }else if(version === "EN"){
        moment.locale("en");
        return moment(date).format("lll");
    }else{
        moment.locale("zh-cn");
        return moment(date).format("lll");
    }

};