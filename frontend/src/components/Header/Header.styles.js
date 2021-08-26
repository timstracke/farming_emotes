import styled from 'styled-components';

export const Wrapper = styled.div`
    background: rgb(81,0,107);
    background: linear-gradient(90deg, rgba(81,0,107,1) 0%, rgba(172,49,213,1) 50%, rgba(199,79,255,1) 100%);
    padding: 20px;
    font-family: Arial;
    text-decoration: none;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    .header-btn {
        display: block;
        padding: 5px 10px;
        border-radius: 20px;
        background: var(--white);
        color: var(--black);
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
`;

export const Text = styled.div`
    background: var(--white);
    border-radius: 2000px;
`;
