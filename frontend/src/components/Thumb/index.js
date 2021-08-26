import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Image, Content } from './Thumb.styles'

const Thumb = ({ image, streamer }) => (
        <Wrapper>
            <Link to={`/${streamer}`} className="streamer-btn">
                <Content>
                    <Image src={image} alt='channel' />
                    {streamer}
                </Content>
            </Link>
        </Wrapper>
      
);

export default Thumb;