import axios from "axios";
import { UPLOAD_NEW_IMAGE, ACTIVITY_ERROR } from "./types";

import config from "../config/config";

const ROOT_URL = config["ROOT_URL"];

export const replaceWithNewImg = (userId, file) => async dispatch => {
    // 1. first make sure the user has the authority to replace the image
    // a. must be logged in b. must the be the user who created the activity

    const maxSize = 100000;
    if (file.size > maxSize) {
        dispatch(activityErr("文件不能超过100KB"));
    }
    const uploadConfig = await axios.get(
        `${ROOT_URL}/api/replace/image/${userId}`,
        {
            headers: {
                authorization: localStorage.getItem("jwtToken")
            }
        }
    );
    if (typeof uploadConfig.data === "string") {
        return;
    }

    const upload = await axios.put(uploadConfig.data.url, file, {
        headers: {
            "Content-Type": file.type
        }
    });

    dispatch({
        type: UPLOAD_NEW_IMAGE,
        payload: {
            key: uploadConfig.data.key
        }
    });
};

export const cropImageObj = (
    oldImgurl,
    activityId,
    userId,
    keyforUrl,
    width,
    height,
    x,
    y
) => async dispatch => {
    const data = {
        userId: userId,
        keyforUrl: keyforUrl,
        width: width,
        height: height,
        x: x,
        y: y
    };

    const result = await axios.post(`${ROOT_URL}/api/cropImage`, data, {
        headers: {
            authorization: localStorage.getItem("jwtToken")
        }
    });

    // console.log("2keys",result.data);
    // {srcKey: "35/activity/375aab00-3125-11e8-be4a-356e051160a9.jpeg",
    // targetKey: "35/activity-target/3831d120-3125-11e8-be4a-356e051160a9.jpeg"}

    // upload the imgurl in database with targetKey(cropped one)
    if (typeof result.data !== "string") {
        const { srcKey, targetKey } = result.data;
        let res;
        if (activityId) {
            res = await axios.post(
                `${ROOT_URL}/api/updateUserActivity/${activityId}`,
                { imageurl: targetKey },
                {
                    headers: {
                        authorization: localStorage.getItem("jwtToken")
                    }
                }
            );
        }
        if (userId === 0) {

            res = await axios.post(
                `${ROOT_URL}/api/updateBasicInfo`,
                { imageurl: targetKey },
                {
                    headers: {
                        authorization: localStorage.getItem("jwtToken")
                    }
                }
            );
        }

        // delete the srcKey(raw, non-cropped image) on AWS
        await axios.post(
            `${ROOT_URL}/api/deleteImage`,
            { imgurl: srcKey },
            {
                headers: {
                    authorization: localStorage.getItem("jwtToken")
                }
            }
        );
        // delete the previous image (cropped one) from database (if any) on AWS
        if (oldImgurl) {
            await axios.post(
                `${ROOT_URL}/api/deleteImage`,
                { imgurl: oldImgurl },
                {
                    headers: {
                        authorization: localStorage.getItem("jwtToken")
                    }
                }
            );
        }
    } else {
        dispatch(activityErr(result.data));
    }
};

export const activityErr = err => {
    return {
        type: ACTIVITY_ERROR,
        payload: err
    };
};