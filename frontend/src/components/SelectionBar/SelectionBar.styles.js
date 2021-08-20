import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    padding: 10px 0 0 0;

    .dropdown {
        color: var(--black);
        padding: 0 20px 0 10px;

        .dropdown-menu {
            background-color: var(--medGrey);
        }
        

        .dropdown-item {
            background-color: var(--medGrey);
            color: var(--white);

        }

        .dropdown-item-active {
            color: var(--purple);
            margin: 0 0 0 15px;
            text-decoration: none;
        }
    }

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 30px 0;
    margin: 0 auto;

    .dropdown {
        align-items: right;
        background-color: var(--lightGrey);
        padding: 30px 0;
    }

    .dropdown-button-streamers {
        color: var(--black);
    }
`;