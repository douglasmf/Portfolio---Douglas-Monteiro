import styled from "styled-components";
import { darkTheme } from "../../themes/Themes";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${darkTheme.colors.darkPrimary};
    @media (min-width: 600px) {
        height: 7.2rem;
    }
    @media (min-width: 900px) {
        height: 8rem;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonMenu = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    svg {
        font-size: 2.4rem;
        color: ${darkTheme.colors.text};
    }
    @media (min-width: 600px) {
        svg {
            font-size: 2.8rem;
        }
    }
    @media (min-width: 900px) {
        display: none;
    }
    
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${darkTheme.colors.text};
    font-weight: bold;
    @media (min-width: 600px) {
        font-size: 2.4rem;
    }
    @media (min-width: 900px) {
        font-size: 2.8rem;
    }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 2.0rem;
  a svg {
    font-size: 2.4rem;
    color: ${darkTheme.colors.text};
  }
  @media (min-width: 600px) {
    a svg {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 900px) {
    svg {
      transition: color 0.3s ease;
    }
    a svg:hover {
      color: ${darkTheme.colors.primary};
    }
  } 
`;
