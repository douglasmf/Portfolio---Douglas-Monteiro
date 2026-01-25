import styled from 'styled-components';
import { darkTheme } from '../../themes/Themes';

export const CarouselContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  margin: 48px auto;
  border: 2px solid ${darkTheme.colors.primary};
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  height: 60vh;

  @media (max-width: 900px) {
    height: 55vh;
  }

  @media (max-width: 600px) {
    height: 50vh;
  }
`;

export const Track = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(.22,.9,.28,1);
  will-change: transform;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === 'left' ? 'left: 16px;' : 'right: 16px;')}
  transform: translateY(-50%);
  background: rgba(26, 188, 156, 0.8);
  color: ${darkTheme.colors.text};
  border: none;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;

  &:hover:not(:disabled) {
    background: rgba(26, 188, 156, 1);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  svg {
    font-size: 2.8rem;
  }

`;

export const ProjectCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 60%; /* Ajuste a altura conforme preferir */
  overflow: hidden;
  position: relative;
`;

// O "trilho" que realmente desliza as imagens
export const ImageTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

export const ImageContainer = styled.div`
  position: relative;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;

export const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  height: 65%;
  background: rgba(0, 0, 0, 0.2);
  pointer-events: none;
`;

export const ProjectInfo = styled.div`
  flex: 1;
  background-color: #121212; 
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 1px solid ${darkTheme.colors.primary} ; 
`;

export const AnimatedContent = styled.div`
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: 1;
  transform: translateY(0);

  &.changing {
    opacity: 0;
    transform: translateY(10px);
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: .8rem;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.4rem;
  max-width: 80%;
  line-height: 1.5;
  color: ${darkTheme.colors.text};
  margin-bottom: .8rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  background: rgba(26, 188, 156, 0.2);
  color: ${darkTheme.colors.primary};
  border: 1px solid ${darkTheme.colors.primary};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 500;
  white-space: nowrap;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

export const ProjectButton = styled.a`
  background-color: ${props => props.destaque ? darkTheme.colors.secondary : "#fff"};
  text-decoration: none;
  font-size: 1.4rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: 0.3s ease;
  color: ${props => props.destaque ?  "#fff" : darkTheme.colors.secondary};
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    filter: brightness(0.9);
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    padding: 6px 12px;
  }
`;




