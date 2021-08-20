import { useState, useEffect } from "react";
// API
import API from '../API';


export const useHomeFetch = () => {
    const [image, setImage] = useState("");
    const [streamer, setStreamer] = useState("mizkif");
    const [emote, setEmote] = useState("OMEGALUL"); 


    const fetchPlot = async (streamer, emote) => {
        try {
            const plot = await API.fetchPlot(streamer, emote);
            console.log(plot);
            setImage(plot.image);

        } catch (error) {
            console.log("Error fetching plot");
        }

    };

    useEffect(() => {
        console.log("streamer: " + streamer)
        console.log("emote: " + emote)
        fetchPlot(streamer, emote);
    }, [streamer, emote])


    return { image, streamer, emote, setStreamer, setEmote };
};
