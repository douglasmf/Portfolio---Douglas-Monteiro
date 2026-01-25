import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 32px;

  @media (min-width: 600px) {
    gap: 48px;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 48px;
    gap: 64px;
  }
`;

