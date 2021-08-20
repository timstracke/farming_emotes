
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
    }
};

export default apiSettings;
