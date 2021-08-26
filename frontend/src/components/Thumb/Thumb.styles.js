import styled from "styled-components";

export const Wrapper = styled.div`

    .streamer-btn {
        display: block;
        text-decoration: none;
        display: flex;
        background-color: var(--lightGrey);
        animation: animateThumb 0.5s;
        text-align: center;
        border-radius: 20px;
    }

    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
`

export const Image = styled.img`
    width: 100%;
    max-width: 250px;
    max-height: 250px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;
    padding: 0 30px 0 0;

`;

export const Content = styled.div`
    display: flex;
    color: var(--black);
    font-size: 45px;
    align-items: center;

    :hover {
        opacity: 0.7;
    }

`

