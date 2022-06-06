import { useState, useEffect } from "react";
import youtube from "../api/video";


const useVideos = (defaultSearchterm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchterm);
    }, [defaultSearchterm]);

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            },
        });

        setVideos(response.data.items);
        // setSelectedVideo(response.data.items[0]);

    };
    return [videos, search];
}

export default useVideos;