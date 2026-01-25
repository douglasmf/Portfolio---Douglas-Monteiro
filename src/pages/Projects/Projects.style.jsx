import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: hidden; /* permite rolagem vertical controlada sem "flash" */
  position: relative;
  @media (max-width:599px) {
    height: auto;
    padding: 0 1rem;
  }
 
`;