import { ADD_ACTIVITY } from './types';

export const addActivity = (data) => {
    // console.log('add route data', data);
    return {
        type: ADD_ACTIVITY,
        payload: data
    };

};