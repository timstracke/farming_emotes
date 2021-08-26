import { CLIENT_ID, TWITCH_OAUTH } from "./config";


const BASE_URL = "http://localhost:5000/api"



const apiSettings = {
    fetchPlot: async (streamer, emote) => {
        const endpoint = `${BASE_URL}/visualization`
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');

        var raw = JSON.stringify({
        "streamer": streamer,
        "emote": emote
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
        return await (await fetch(endpoint, requestOptions)).json();
    },

    fetchChannel: async (streamer) => {
        const endpoint = `https://api.twitch.tv/helix/search/channels?query=${streamer}&first=1`
        var myHeaders = new Headers();
        myHeaders.append("Client-Id", CLIENT_ID);
        myHeaders.append("Authorization", TWITCH_OAUTH);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        return await (await fetch(endpoint, requestOptions)).json();
    }
};

export default apiSettings;
