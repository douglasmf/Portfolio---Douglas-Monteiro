import styled from 'styled-components';
import {darkTheme} from '../../themes/Themes'

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

export const SkillsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 32px;
  justify-items: center;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    margin-top: 64px;
  }
`;

export const SkillCard = styled.div`
  background-color: #1e1e1e;
  border-radius: 16px;
  padding: 24px 16px;
  width: 100%;
  max-width: 180px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }
`;

export const IconWrapper = styled.div`
  font-size: 3.2rem;
  margin-bottom: 12px;
`;

export const SkillName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${darkTheme.colors.text};

  @media (min-width: 900px) {
    font-size: 1.8rem;
  }
`;

