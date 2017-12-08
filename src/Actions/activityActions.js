import { AUTH_USER } from './types';

export const submitActivityData = (data, history) => dispatch=> {
    // console.log('add route data', data);

    // request to API
    // const res = await axios.post('/api/searchData', searchData);
     // dispatch({
    //     type: AUTH_USER
    // });

    // temp

    history.push('/');
    dispatch({
        type: AUTH_USER,
    });



};