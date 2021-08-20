import styled from 'styled-components';

export const PlotImg = styled.img`
    width: 1200px;
    height: 600px;

    @media screen and (max-width: 900px) {
        width: 750px;
    }
    @media screen and (max-width: 600px) {
        width: 500px;
    }
`;