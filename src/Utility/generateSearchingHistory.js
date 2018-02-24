export default (searchData, resData)=>{
    if (typeof searchData !== "string") {
        // console.log(localStorage.hist);
        let location;
        let category;

        if (resData.length === 0) {
            location = searchData.location;
            category = searchData.category === "activity" ? "活动" : "愿望";
        } else {
            location = resData[0].location;
            category = resData[0].category === "activity" ? "活动" : "愿望";
        }
        let record = location + ", " + category;
        let newRecord;
        let hist = localStorage.hist;
        if (!hist) {
            localStorage.hist = record;
        } else {
            let lst = hist.split("|");
            let lstWithoutDup = lst.filter(rec => {
                return rec !== record;
            });
            if (lstWithoutDup.length > 0) {
                newRecord = record + "|" + lstWithoutDup.join("|");
                // 珠海市 广东省,activity|大连市 辽宁省,activity|
            } else {
                newRecord = record + "|";
            }
            localStorage.hist = newRecord;
        }
    }
}