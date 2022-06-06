import axios from "axios"

const KEY = "AIzaSyBVHKsopjN0uFMc_ObneFk9yFvMT7Zk9Mg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 7,
        key: KEY,
    }
});