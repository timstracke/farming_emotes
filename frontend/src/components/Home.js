import React from 'react';
import { useHomeFetch } from '../hooks/useHomeFetch';


// components
import SelectionBar from './SelectionBar';
import Plot from './Plot';

// Styles
import { Wrapper } from './Home.styles';






const Home = () => {
    const { image, streamer, emote, setStreamer, setEmote } = useHomeFetch();
    
    const img_src = 'data:image/png;base64,' + image;
    
    return (
        <Wrapper>
            <SelectionBar streamer={streamer} emote={emote} setStreamer={setStreamer} setEmote={setEmote}/>
            
            <Plot img_src={img_src} />
        </Wrapper>
    );
}

export default Home;