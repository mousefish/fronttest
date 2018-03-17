export default (searchData, resData) => {
    if (typeof searchData !== "string") {
        let location;
        let category;

        if (typeof resData[0] === "string") {
            location = searchData.location;
            category = searchData.category;
        } else {
            location = resData[0].location;
            category = resData[0].category
        }
        let record = location + "—" + category;
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
};