import { FETCH_WISH_DATA } from './types';


export const fetchWishData = () =>dispatch=>{
    // backend API:
        // const res = await axios.get('/api/mywish');
        // dispatch({
        //     type: FETCH_WISH_DATA,
        //     payload: res.data
        // });

        // temp
        dispatch({
            type:FETCH_WISH_DATA
        });
}