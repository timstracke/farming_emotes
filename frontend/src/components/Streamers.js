import React from 'react';
import { useStreamersFetch } from '../hooks/useStreamersFetch';

import Grid from './Grid';
import Thumb from './Thumb';



const Streamers = () => {
    const { channels } = useStreamersFetch();

    console.log(channels);

    // for (const channel of channels) {
    //     console.log(channel.data)
    // };


    return (
        <>
            <Grid header="Streamers">
                {channels.map(channel => (
                    
                        <Thumb
                            key={channel.id}
                            image={channel.thumbnail_url}
                            streamer={channel.display_name}
                        />
                    ))}
            
            </Grid>



        </>

    );

};

export default Streamers;