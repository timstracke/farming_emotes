import React from 'react';
import { STREAMERS, EMOTES } from '../../config';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper } from './SelectionBar.styles';

const SelectionBar = ({streamer, emote, setStreamer, setEmote}) => {
    const handleStreamerSelect=(e)=>{
        console.log(typeof e);
        console.log(typeof null);


        console.log(e);
        setStreamer(e);
      };

      const handleEmoteSelect=(e)=>{
        console.log("new emote selected: " + e);
        setEmote(e);
      };
    console.log(typeof setStreamer);

    return (
        <Wrapper>
            <DropdownButton class="dropdown" id="dropdown-button-streamers" variant="secondary" title={streamer} onSelect={handleStreamerSelect} align="start" >
                {STREAMERS.map((streamer_mapped) => (
                    <Dropdown.Item class={streamer===streamer_mapped ? 'dropdown-item-active' : 'dropdown-item'} key={`dropdown-item-${streamer_mapped}`} eventKey={streamer_mapped}>{streamer_mapped}</Dropdown.Item>
                ))}     
            </DropdownButton>
            <DropdownButton class="dropdown" id="dropdown-button-emotes" variant="secondary" title={emote} onSelect={handleEmoteSelect} align="end">
                {EMOTES.map((emote_mapped) => (
                    <Dropdown.Item class={emote===emote_mapped ? 'dropdown-item-active' : 'dropdown-item'} key={`dropdown-item-${emote_mapped}`} eventKey={emote_mapped}>{emote_mapped}</Dropdown.Item>
                ))}     
            </DropdownButton>
        </Wrapper>
    )
};

export default SelectionBar;