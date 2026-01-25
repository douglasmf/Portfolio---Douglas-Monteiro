import styled from 'styled-components';
import { darkTheme } from '../../themes/Themes';

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 32px;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 64px;
    margin-top: 64px;
  }
`;

export const ProfileArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 12px;

  @media (min-width: 900px) {
    align-items: flex-start;
    text-align: left;
    gap: 16px;
  }
`;

export const AboutImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);

  @media (min-width: 600px) {
    width: 180px;
    height: 180px;
  }

  @media (min-width: 900px) {
    width: 200px;
    height: 200px;
  }
`;

export const ProfileName = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  margin-top: 8px;

  @media (min-width: 600px) {
    font-size: 2rem;
  }

  @media (min-width: 900px) {
    font-size: 2.4rem;
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 12px;
  margin-top: 8px;

  @media (min-width: 900px) {
    
    gap: 16px;
  }
`;

export const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  border-radius: 12px;
  padding: 8px 14px;
  font-size: 1.4rem;
  transition: 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  svg {
    font-size: 1.8rem;
  }

  &:hover {
    filter: brightness(0.9);
    transform: translateY(-2px);
  }

  &.curriculo {
    align-self: center;
    background-color: ${darkTheme.colors.secondary};
    gap: 0.8rem;
  }
  &.github {
    background-color: ${darkTheme.colors.github};
    svg{
      color: ${darkTheme.colors.githubText};
    }
  }
  &.linkedin {
    background-color: ${darkTheme.colors.linkedin};
    font-weight: bold;
  }

  @media (min-width: 600px) {
    padding: 10px 18px;
  }

  @media (min-width: 900px) {
    font-size: 1.6rem;
    svg {
      font-size: 2rem;
    }
  }
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
    gap: 40px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6;

  &::first-letter {
    margin-left: 1.6rem;
  }

  @media (min-width: 600px) {
    font-size: 18px;
    line-height: 1.7;
  }

  @media (min-width: 900px) {
    font-size: 20px;
    line-height: 1.8;
  }
`;
