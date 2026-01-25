import styled from "styled-components";

export const MainContent = styled.main`
    height: calc(100vh - 6.4rem);
    width: 100%;

    @media (min-width: 600px) {
        height: calc(100vh - 7.2rem);
    }
    @media (min-width: 900px) {
        height: calc(100vh - 8rem);
    }
`;