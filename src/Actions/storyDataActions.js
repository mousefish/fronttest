// import axios from 'axios';
import { FETCH_STORY_DATA } from './types';


export const fetchStoryData = (data) => dispatch =>{

    // backend API:
    // const res = await axios.get('/api/storyData');

    // dispatch({
    //     type: FETCH_STORY_DATA,
    //     payload:res.data
    // })

    // temp
    dispatch({
        type: FETCH_STORY_DATA
    });

};