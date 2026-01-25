import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 900px) {
    flex-direction: column;
    max-width: 400px;
    gap: 40px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${darkTheme.colors.secondary};
  svg {
    font-size: 2rem;
  }
`;

export const Email = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const LinkItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.5rem;
  color: ${darkTheme.colors.text};
  text-decoration: none;
  padding: 6px 0;

  svg {
    font-size: 2rem;
  }

  &:hover {
    color: ${darkTheme.colors.primary};
  }
`;
