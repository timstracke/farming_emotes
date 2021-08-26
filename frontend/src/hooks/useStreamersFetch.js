import { useEffect, useState } from "react";
// API
import API from '../API';

import { STREAMERS } from '../config';


export const useStreamersFetch = () => {
    const [channels, setChannels] = useState([]);

    const fetchChannel = async (streamer) => {
        const channel = await API.fetchChannel(streamer);
        setChannels(oldChannels => [...oldChannels, channel.data[0]]);
    }

    useEffect(() => {
        for (const streamer of STREAMERS) {
            fetchChannel(streamer);
        };
    }, []);


      return { channels };
};
