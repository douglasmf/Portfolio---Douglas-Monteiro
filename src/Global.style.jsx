import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./themes/Themes";

export const Global = createGlobalStyle`
  :root{
    --header-height: 64px;
  }

  @media (min-width: 600px){
    :root{ --header-height: 72px; }
  }

  @media (min-width: 900px){
    :root{ --header-height: 80px; }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${darkTheme.colors.darkSecondary};
    color: ${darkTheme.colors.text};
  }
  a {
    text-decoration: none;
  }

  .button-style{
    margin-top: 32px;
    background-color: ${darkTheme.colors.secondary};
    color: ${darkTheme.colors.text};
    border: none;
    border-radius: 20px;
    padding: 0 20px;
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      filter: brightness(0.9);
    }
    @media (min-width: 600px) {
      height: 48px;
      border-radius: 24px;
      padding: 0 24px;
      font-size: 1.6rem;
      margin-top: 40px;
    }

    @media (min-width: 900px) {
      height: 56px;
      border-radius: 28px;
      padding: 0 28px;
      font-size: 1.8rem;
      margin-top: 48px;
    }
  }
  @keyframes pageReveal {
    0% {
      opacity: 0;
      filter: blur(6px);
    }
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }

  .page-effect {
    animation: pageReveal .8s ease forwards;
  }
`;

