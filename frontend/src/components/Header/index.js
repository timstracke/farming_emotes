import React from 'react';
import { Link } from 'react-router-dom';
import twitch_logo from './twitch_logo.png'


import { Wrapper, Content } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/' class="header-btn">
                farming emotes
            </Link>
            <Link to='/' class="header-btn">
                streamers
            </Link>
            <Link to='/' class="header-btn">
                emotes
            </Link>
            <a target="_blank" href="https://www.twitch.tv/" rel="noreferrer">
                <img src={twitch_logo} alt='twitch' width="60px" height="60px"/>
            </a>
            

        </Content>
    </Wrapper>
);

export default Header;