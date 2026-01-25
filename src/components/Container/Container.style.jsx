import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 600px) {
    padding: 0 24px;
    max-width: 860px;
  }

  @media (min-width: 900px) {
    padding: 0 32px;
    max-width: 1200px;
  }
`;