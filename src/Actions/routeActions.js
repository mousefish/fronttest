 // needs APIs, axios and reduxThunk here later
export const addRoute = (data) => {
    console.log('add route data', data);
    return {
        type: "ADD_ROUTE",
        payload: data
    };

};
